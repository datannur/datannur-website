type Playback = {
  time: number
  playing: boolean
  rate: number
  captions: TextTrackMode[]
}

export function initFilm(root: HTMLElement) {
  const video = root.querySelector('video')!
  const launch = root.querySelector<HTMLButtonElement>('.film-launch')!
  const error = root.querySelector<HTMLElement>('.film-error')!
  let theme = root.dataset.filmTheme
  let started = false
  let revision = 0
  let pending: Playback | null = null
  let cancelRestore = () => {}

  video.controls = false
  launch.hidden = false

  const play = async (version: number) => {
    try {
      await video.play()
    } catch (cause) {
      // A newer theme may cancel a pending play request.
      if (version === revision && !(cause instanceof DOMException && cause.name === 'AbortError')) {
        error.hidden = false
      }
    }
  }

  launch.addEventListener('click', () => {
    started = true
    launch.hidden = true
    error.hidden = true
    video.controls = true
    video.tabIndex = 0
    video.focus({ preventScroll: true })
    if (pending) pending.playing = true
    else void play(revision)
  })
  video.addEventListener('play', () => { started = true })

  const syncTheme = () => {
    const next = document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light'
    if (next === theme) return
    theme = next
    root.dataset.filmTheme = next
    const version = ++revision
    cancelRestore()
    error.hidden = true
    video.poster = root.dataset[`${next}Poster`]!
    root.querySelectorAll<HTMLAnchorElement>('[data-film-download]').forEach(link => {
      link.href = root.dataset[`${next}Src`]!
    })

    // Retain the original position across rapid toggles while a file loads.
    const state = pending ?? {
      time: video.currentTime,
      playing: !video.paused && !video.ended,
      rate: video.playbackRate,
      captions: Array.from(video.textTracks, track => track.mode),
    }
    if (started) {
      pending = state
      const restore = () => {
        if (version !== revision) return
        const finish = () => {
          if (version !== revision) return
          cancelRestore()
          pending = null
          video.playbackRate = state.rate
          Array.from(video.textTracks).forEach((track, index) => {
            track.mode = state.captions[index] ?? 'disabled'
          })
          if (state.playing) void play(version)
        }
        const time = Math.min(state.time, Number.isFinite(video.duration) ? video.duration : state.time)
        if (time > 0) {
          video.addEventListener('seeked', finish, { once: true })
          cancelRestore = () => {
            video.removeEventListener('loadedmetadata', restore)
            video.removeEventListener('seeked', finish)
          }
          video.currentTime = time
        } else finish()
      }
      cancelRestore = () => video.removeEventListener('loadedmetadata', restore)
      video.addEventListener('loadedmetadata', restore, { once: true })
      // Loading becomes explicit only after the visitor has started playback.
      video.preload = 'auto'
    }
    video.src = root.dataset[`${next}Src`]!
    if (started) video.load()
  }

  new MutationObserver(syncTheme).observe(document.documentElement, {
    attributes: true, attributeFilter: ['data-theme'],
  })
  syncTheme()

  video.addEventListener('error', () => {
    cancelRestore()
    pending = null
    launch.hidden = true
    video.controls = true
    error.hidden = false
  })
}

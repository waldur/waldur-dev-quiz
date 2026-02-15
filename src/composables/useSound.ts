import { ref } from 'vue'

interface Note {
  freq: number
  dur: number
  type?: OscillatorType
}

let audioContext: AudioContext | null = null
const enabled = ref(true)

function init() {
  if (audioContext) return
  try {
    audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
  } catch {
    console.warn('Web Audio API not supported')
    enabled.value = false
  }
}

function resume() {
  if (audioContext && audioContext.state === 'suspended') {
    audioContext.resume()
  }
}

function playTone(frequency: number, duration: number, type: OscillatorType = 'sine', volume = 0.3) {
  if (!enabled.value || !audioContext) return
  resume()

  const oscillator = audioContext.createOscillator()
  const gainNode = audioContext.createGain()

  oscillator.connect(gainNode)
  gainNode.connect(audioContext.destination)

  oscillator.frequency.value = frequency
  oscillator.type = type

  gainNode.gain.setValueAtTime(volume, audioContext.currentTime)
  gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration)

  oscillator.start(audioContext.currentTime)
  oscillator.stop(audioContext.currentTime + duration)
}

function playMelody(notes: Note[], baseVolume = 0.3) {
  if (!enabled.value || !audioContext) return
  resume()

  let time = audioContext.currentTime
  notes.forEach(note => {
    const oscillator = audioContext!.createOscillator()
    const gainNode = audioContext!.createGain()

    oscillator.connect(gainNode)
    gainNode.connect(audioContext!.destination)

    oscillator.frequency.value = note.freq
    oscillator.type = note.type || 'sine'

    gainNode.gain.setValueAtTime(baseVolume, time)
    gainNode.gain.exponentialRampToValueAtTime(0.01, time + note.dur)

    oscillator.start(time)
    oscillator.stop(time + note.dur)

    time += note.dur * 0.9
  })
}

export function useSound() {
  init()

  return {
    enabled,
    correct() {
      playMelody([
        { freq: 523.25, dur: 0.1 },
        { freq: 659.25, dur: 0.15 },
      ], 0.25)
    },
    incorrect() {
      playMelody([
        { freq: 311.13, dur: 0.15, type: 'triangle' },
        { freq: 277.18, dur: 0.2, type: 'triangle' },
      ], 0.2)
    },
    streak() {
      playMelody([
        { freq: 523.25, dur: 0.08 },
        { freq: 659.25, dur: 0.08 },
        { freq: 783.99, dur: 0.12 },
      ], 0.25)
    },
    streakBig() {
      playMelody([
        { freq: 523.25, dur: 0.1 },
        { freq: 659.25, dur: 0.1 },
        { freq: 783.99, dur: 0.1 },
        { freq: 1046.5, dur: 0.2 },
      ], 0.3)
    },
    streakEpic() {
      playMelody([
        { freq: 392.00, dur: 0.1 },
        { freq: 523.25, dur: 0.1 },
        { freq: 659.25, dur: 0.1 },
        { freq: 783.99, dur: 0.1 },
        { freq: 1046.5, dur: 0.25 },
        { freq: 1318.5, dur: 0.3 },
      ], 0.35)
    },
    achievement() {
      playMelody([
        { freq: 523.25, dur: 0.1 },
        { freq: 659.25, dur: 0.1 },
        { freq: 783.99, dur: 0.1 },
        { freq: 1046.5, dur: 0.2 },
      ], 0.35)
    },
    click() {
      playTone(800, 0.05, 'sine', 0.15)
    },
    quizComplete() {
      playMelody([
        { freq: 523.25, dur: 0.15 },
        { freq: 659.25, dur: 0.15 },
        { freq: 783.99, dur: 0.15 },
        { freq: 1046.5, dur: 0.3 },
      ], 0.3)
    },
  }
}

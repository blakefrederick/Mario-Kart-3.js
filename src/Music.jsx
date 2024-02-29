import { useEffect, useState } from 'react'
import { useStore } from './components/store'

export const Music = () => {
  const { gameStarted } = useStore()
  const [volume, setVolume] = useState(0.75)
  const [audio] = useState(() => new Audio("https://dl.vgmdownloads.com/soundtracks/mario-kart-wii/jahdscxtwb/89.%20DS%20Delfino%20Square.mp3")) // one only

  useEffect(() => {
    audio.loop = true

    if (gameStarted) {
      audio.play()
    } else {
      audio.pause()
      audio.currentTime = 0
    }

    return () => {
      audio.pause()
    }
  }, [gameStarted, audio])

  useEffect(() => {
    audio.volume = volume
  }, [volume, audio])

  return (
    <div style={{ position: 'fixed', bottom: 10, left: 0, right: 0, backgroundColor: 'rgba(0,0,0,0.5)', width: '10%'}}>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={(e) => setVolume(e.target.value)}
        style={{ width: '100%' }}
      />
    </div>
  )
}

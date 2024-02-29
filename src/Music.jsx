import { useEffect } from 'react'
import { useStore } from './components/store'

export const Music = () => {
  const { gameStarted } = useStore()

  useEffect(() => {
    const audio = new Audio("https://dl.vgmdownloads.com/soundtracks/mario-kart-wii/jahdscxtwb/89.%20DS%20Delfino%20Square.mp3")
    audio.loop = true

    if (gameStarted) {
      audio.play()
    }
    return () => {
      audio.pause()
    }
  }, [gameStarted])

  return null
}

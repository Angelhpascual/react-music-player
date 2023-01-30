import { useState } from "react"
import LedZeppeling from "../assests/led-Zeppeling.mp3"
import useSound from "use-sound"

export default function Player() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [play, { pause, duration, sound }] = useSound(LedZeppeling)

  const handlePlay = () => {
    if (isPlaying) {
      pause()
      setIsPlaying(false)
    } else {
      play()
      setIsPlaying(true)
    }
  }
  return (
    <div className="component">
      <h2>Playing Now</h2>
      <img src="https://picsum.photos/200/200" alt="" />
      <div>
        <h3>Led Zeppeling</h3>
        <p>Whole Lotta Love</p>
      </div>
    </div>
  )
}

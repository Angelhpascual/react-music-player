import { useState } from "react"
import LedZeppeling from "../assests/led-Zeppeling.mp3"
import useSound from "use-sound"
import { IconContext } from "react-icons"
import { BiSkipPrevious, BiSkipNext } from "react-icons/bi"
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai"

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
        <h3 className="title">Led Zeppeling</h3>
        <p className="subtitle">Whole Lotta Love</p>
      </div>
      <div>
        <button className="playButton">
          <IconContext.Provider value={{ size: "2em", color: "tomato" }}>
            <BiSkipPrevious />
          </IconContext.Provider>
        </button>
        <button className="playButton">
          {isPlaying ? (
            <IconContext.Provider value={{ size: "2em", color: "tomato" }}>
              <AiFillPauseCircle onClick={handlePlay} />
            </IconContext.Provider>
          ) : (
            <IconContext.Provider value={{ size: "2em", color: "tomato" }}>
              <AiFillPlayCircle onClick={handlePlay} />
            </IconContext.Provider>
          )}
        </button>
        <button className="playButton">
          <IconContext.Provider value={{ size: "2em", color: "tomato" }}>
            <BiSkipNext />
          </IconContext.Provider>
        </button>
      </div>
    </div>
  )
}

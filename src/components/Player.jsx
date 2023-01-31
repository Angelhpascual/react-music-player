import { useEffect, useState } from "react"
import LedZeppeling from "../assests/led-Zeppeling.mp3"
import useSound from "use-sound"
import { IconContext } from "react-icons"
import { BiSkipPrevious, BiSkipNext } from "react-icons/bi"
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai"

export default function Player() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [play, { pause, duration, sound }] = useSound(LedZeppeling)
  const [currentTime, setCurrentTime] = useState({
    min: "",
    sec: "",
  })
  const [time, setTime] = useState({
    min: "",
    sec: "",
  })
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    console.log(duration)
    if (duration) {
      const sec = duration / 1000
      const min = Math.floor(sec / 60)
      const secRemain = Math.floor(sec % 60)
      setTime({
        min: min,
        sec: secRemain,
      })
    }
  }, [isPlaying, duration])

  useEffect(() => {
    const interval = setInterval(() => {
      if (sound) {
        setSeconds(sound.seek([])) // setting the seconds state with the current state
        const min = Math.floor(sound.seek([]) / 60)
        const sec = Math.floor(sound.seek([]) % 60)
        setCurrentTime({
          min,
          sec,
        })
      }
    }, 1000)
    return () => clearInterval(interval)
  }, [sound])

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
      <img className="musicCover" src="https://picsum.photos/200/200" alt="" />
      <div>
        <h3 className="title">Led Zeppeling</h3>
        <p className="subtitle">Whole Lotta Love</p>
      </div>
      <div>
        <div>
          <div className="time">
            <p>
              {currentTime.min}:{currentTime.sec}
            </p>
            <p>
              {time.min}:{time.sec}
            </p>
          </div>
          <input
            type="range"
            min={0}
            max={duration / 1000}
            default={0}
            value={seconds}
            onChange={(e) => {
              sound.seek(e.target.value)
            }}
          />
        </div>

        <button className="playButton">
          <IconContext.Provider value={{ size: "3em", color: "tomato" }}>
            <BiSkipPrevious />
          </IconContext.Provider>
        </button>
        <button className="playButton">
          {isPlaying ? (
            <IconContext.Provider value={{ size: "3em", color: "tomato" }}>
              <AiFillPauseCircle onClick={handlePlay} />
            </IconContext.Provider>
          ) : (
            <IconContext.Provider value={{ size: "3em", color: "tomato" }}>
              <AiFillPlayCircle onClick={handlePlay} />
            </IconContext.Provider>
          )}
        </button>
        <button className="playButton">
          <IconContext.Provider value={{ size: "3em", color: "tomato" }}>
            <BiSkipNext />
          </IconContext.Provider>
        </button>
      </div>
    </div>
  )
}

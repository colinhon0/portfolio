import "./intro.scss"
import { init } from "ityped"
import { useEffect, useRef } from "react"

export default function Intro() {

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      strings: ["Frontend Developer", "CSESoc Treasurer", "Casual Academic", "NBA Fan"]
    })
  }, [])
    
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imageContainer">
          <img src="assets/Colin.png" alt =""/>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Nice to meet you! I'm</h2>
          <h1>Colin Hon</h1>
          <h3><span ref={textRef}></span></h3>
        </div>
        <a href="#portfolio">
        </a>
      </div>
    </div>
  )
}
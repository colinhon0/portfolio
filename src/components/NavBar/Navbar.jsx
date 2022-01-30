import "./navbar.scss"
import { GitHub, Mail, Phone } from "@mui/icons-material"

export default function NavBar({ menuOpen, setMenuOpen }) {
    
  return (
    <div className={"navbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            ColinHon0
          </a>
          <div className="itemContainer">
            <Phone className="icon" />
            <span>0430590412</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>colinhon0@gmail.com</span>
          </div>
          <div className="itemContainer">
            <GitHub className="icon" />
            <span>colinhon0</span>
          </div>
        </div>
        
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
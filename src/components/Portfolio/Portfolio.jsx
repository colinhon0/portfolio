import "./portfolio.scss"
import Paper from '@mui/material/Paper';

export default function Portfolio() {
    
  return (
    <div className="portfolio" id="portfolio">
      <h1>Experience</h1>
      <div className="experienceContainer">
        <Paper className="experience">
          <p>Macquarie</p>
        </Paper>
        <Paper className="experience">
          Streamplate
        </Paper>
        <Paper className="experience">
          CSESoc
        </Paper>
        <Paper className="experience">
          Mathnasium
        </Paper>
      </div>
    </div>
  )
}
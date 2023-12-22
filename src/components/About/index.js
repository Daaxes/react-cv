import {
  faCss3,
  faGitAlt,
  faHtml5,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { DiJsBadge } from "react-icons/di"; //import new ikons to cube
import './index.css'

const About = () => {

  return (
    <>
      {/* <div className="containerAbout-page"> */}
        <div className="textZoneAbout">
          <h1>
            Om mig
          </h1>
          <h2>
          <p>
          Jag är en erfaren IT-tekniker med lång erfarenhet som nu återvänder till det jag ursprungligen var intresserad av. 
          </p>
          <p>
          För närvarande studerar jag för att forma min framtid som Front-end utvecklare och kodar i React, C#, ASP.NET. 
          Mina färdigheter omfattar även Java, C, C++, Visual Basic och PHP. 
          Den här unika positionen gör det möjligt för mig att balansera på gränsen mellan IT-teknik och programmering
          </p>
          <p align="LEFT">
              I'm quite confident, naturally curious, and perpetually working on improving my skills.
          </p>
          <p>
          Jag är självsäker, naturligt nyfiken och arbetar ständigt med att förbättra mina färdigheter. 
          Om jag behöver definiera mig själv i en mening skulle det vara som en familjeperson som älskar djur
          och är väldigt teknik och service inriktad.
          </p>
          </h2>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              {/* <FontAwesomeIcon icon={faAngular} color="#DD0031" /> */}
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              {/* <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" /> */}
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      {/* </div> */}
    </>
  )
}

export default About

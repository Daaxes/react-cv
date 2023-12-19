import { useState } from 'react'
import LogoS from './../Images/Danne.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
  faBars,
  faClose,
} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'
import './index.css'

const Topbar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className='imgBox'>
      <Link 
        className="logo"
        to="/"
        onClick={() => setShowNav(false)}>
        <img src={LogoS} alt="Logo" />
      </Link>
    <div className="nav-bar">
      {/* <div className={showNav ? 'mobile-show' : ''}> */}
        <div>
          <NavLink 
            exact="true"
            activeclassname="active"
            to="/"
            onClick={() => setShowNav(false)}>
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          </NavLink>
        </div>
          <div>
          <NavLink 
            activeclassname="active"
            className="about-link"
            to="/about"
            onClick={() => setShowNav(false)}>
            Om
            {/* <FontAwesomeIcon icon={faUser} color="#4d4d4e" /> */}
          </NavLink>
          </div>
          <div>
          <NavLink 
            activeclassname="active"
            className="experience-link"
            to="/about"
            onClick={() => setShowNav(false)}>
              Arbetslivserfarenhet
            {/* <FontAwesomeIcon icon={faUser} color="#4d4d4e" /> */}
          </NavLink>
        </div>
        <div>
          <NavLink
            activeclassname="active"
            className="contact-link"
            to="/contact"
            onClick={() => setShowNav(false)} >
              Kontakt
            {/* <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" /> */}
          </NavLink>
        </div>
        <FontAwesomeIcon 
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#ffd700"
          size="3x"
          className='close-icon' />
      </div>
      {/* <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/daaxes"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Daaxes"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
      </ul> */}
      {/* <FontAwesomeIcon 
          onClick={() => setShowNav(true)}
          icon={faBars}
          color="#ffd700"
          size="3x"
          className='hamburger-icon' />
    </div> */}
      
    </div>
  )
}

export default Topbar

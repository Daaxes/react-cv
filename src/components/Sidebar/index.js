import { useState } from 'react'
import LogoS from './../Images/Danne.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import {
  faEnvelope,
  faBars,
} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'
import './index.css'

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="side-bar">
      <Link 
        className="logo"
        to="/"
        onClick={() => setShowNav(false)}>
        <img src={LogoS} alt="Logo" />
      </Link>
      <h1>Dan Axelsson</h1>
      <h2>Telefon: <a href='0729-xx xx xx'>0729-xx xx xx</a></h2>
      <h2>Språk: Svenska, Engelska</h2>
      <h2>E-post: <a href='mailto:daaxes@kedax.se'>daaxes@kedax.se</a></h2>
      <nav className={showNav ? 'mobile-show' : ''}>
      {/* Contact icon */}
        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      {/* LinkedIn icon */}
        <NavLink
          activeclassname="active"
          className="linkedin-link"
          to="https://www.linkedin.com/in/daaxes"
          target="_blank"
          rel="noreferrer"
          onClick={() => setShowNav(false)} 
        >
          <FontAwesomeIcon 
          icon={faLinkedin}
          color="#4d4d4e" />
        </NavLink>
      {/* GitHub Icon */}
        <NavLink
          activeclassname="active"
          className="github-link"
          to="https://github.com/Daaxes"
          target='_blank'
          rel='noreferrer'
          onClick={() => setShowNav(false)} 
          >
          <FontAwesomeIcon icon={faGithub}
            color="#4d4d4e" />
        </NavLink>

      </nav>
      <FontAwesomeIcon 
          onClick={() => setShowNav(true)}
          icon={faBars}
          color="#ffd700"
          size="3x"
          className='hamburger-icon' />
    </div>
  )
}

export default Sidebar

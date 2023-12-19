import React from 'react';
import phoenixImg from '../Images/phoenix.jpg';
import './index.css'


const Home = () => {
  return (
    <div className="container home-page">
        <div className="text-zone">
          <h1>Welcome to</h1>
          <h1>Phoenix Firecoding</h1>
          <h2>Front End Developer / JavaScript</h2>
        </div>
        <div className='image-zone'>
            <img src={phoenixImg} alt='PhoenixLogo'/>
        </div>
      </div>
  )
}

export default Home

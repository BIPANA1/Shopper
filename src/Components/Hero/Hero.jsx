import React from 'react';
import './Hero.css';
import hand from '../Assets/hand.png';
import hero4 from '../Assets/hero4.png';
import arrow from '../Assets/arrowpng.png'
const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h3>NEW ARRIVALS ONLY</h3>
        <div>
        <div className="hero-hand-icon">
          <p>new</p>
          <img src={hand} alt='hand icon' />
        </div>
        <p>collections</p>
        <p>for everyone</p>
      </div>
      <div className="hero-latest-btn">
        <div>Latest Collection</div>
        <img src={arrow} alt='' height={'20px'} width={'20px'}/>
      </div>
      </div>
      <div className="hero-right">
        <img src={hero4} alt='' />
      </div>
    </div>
  );
}

export default Hero;

import React from 'react'
import './Offers.css'
import hero2 from '../Assets/hero2.png'

const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={hero2} alt=""height={'255px'} width={'255px'}/>
      </div>
    </div>
  )
}

export default Offers

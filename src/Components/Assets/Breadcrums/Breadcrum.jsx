import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../arrowpng.png'

const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div className='breadcrum'>
      HOME <img src={arrow_icon} alt="" height={'25px'} width={'25px'} /> SHOP <img src={arrow_icon} alt="" height={'25px'} width={'25px'}  /> {product.category} <img src={arrow_icon} alt="" height={'25px'} width={'25px'}  />{product.name}
    </div>
  )
}

export default Breadcrum

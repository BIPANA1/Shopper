import React from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.jpg'

const ProductDisplay = (props) => {
    const {product} = props;
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
<div className="productdisplay-img-list">
    <img src={product.Image} alt=""  height={'135px'} width={'135px'}/>
    <img src={product.Image} alt=""  height={'135px'} width={'135px'}/>
    <img src={product.Image} alt=""  height={'135px'} width={'135px'}/>
    <img src={product.Image} alt=""  height={'135px'} width={'135px'}/>
</div>
<div className="productdisplay-img">
<img className='productdisplay-main-img' src={product.Image} alt=""  height={'385px'} width={'355px'} />
</div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
            <img src={star_icon} alt="" height={'10px'} width={'20px'} />
            <img src={star_icon} alt="" height={'20px'} width={'20px'} />
            <img src={star_icon} alt="" height={'20px'} width={'20px'} />
            <img src={star_icon} alt="" height={'20px'} width={'20px'} />
            <img src={star_icon} alt="" height={'20px'} width={'20px'} />
            <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old">
                ${product.old_price}
            </div>
            <div className="productdisplay-right-price-new">
                ${product.new_price}
            </div>
        </div>
        <div className="productdisplay-right-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum harum voluptatibus aut aliquam consequuntur. Expedita laudantium maiores ipsa quod sapiente.
        </div>
<div className="productdisplay-right-size">
    <h1>Select Size</h1>
    <div className="productdisplay-right-size">
    <div>S</div>
    <div>M</div>
    <div>L</div>
    <div>XL</div>
    <div>XXL</div>
    </div>
    </div>
    <button>ADD TO CART</button>
    <p className='productdisplay-right-category'><span>Category: </span></p>
    </div>
    </div>
  )
}

export default ProductDisplay

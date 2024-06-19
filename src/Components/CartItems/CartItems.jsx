import React, { useContext } from 'react'
import './CartItem.css'
import { ShopContext } from '../../Context/ShopContext'
import crossicon from '../Assets/cross.jpg'




const CartItems = () => {
    const {all_product,cartItems,removeFromCart} = useContext(ShopContext)
  return (
    <div className='cartitems'>
        <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
      <hr />
      {all_product.map((e)=>{
        if(cartItems[e.id]>0)
            {
               return  <div>
               <div className="cartitems-format cartitems-format-main">
                   <img src={e.Image} alt="" height={'155px'} width={'115px'} className='carticon-product-icon'/>
                   <p>{e.name}</p>
                   <p>${e.new_price}</p>
                   <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                   <p>{e.new_price*cartItems[e.id]}</p>
                   <img className='cartitems-remove-icon' src={crossicon} alt="" onClick={()=>{removeFromCart(e.id)}}  height={'25px'} width={'25px'}/>
               </div>
               <hr />
       
             </div>
            }
            return null;
      })}
      <div className="cartitems-down">
        <div className='cartitems-total'>
            <h1>cart Totals</h1>
        </div>
        <div className="cartitems-total-item">
            <p>Subtotal</p>
            <p>${0}</p>
        </div>
        <hr />
        <div className="cartitems-total-items">
            <p>Shipping fee</p>
            <p>Free</p>
        </div>
        <hr />
        <div className="cartitems-total-item">
            <h3>Total</h3>
            <h3>${0}</h3>
        </div>
      </div>
      <button>Proceed to checkout</button>
      <div className="cartitems-promocode">

</div>
           </div>
     
  )
}

export default CartItems

import React, { useContext} from 'react'
import { PRODUCTS } from '../../../products'
import { ShopContext } from '../../../context/shopContext'
import { CartItem } from './CartItem'
import './cart.css'
import { useNavigate } from 'react-router-dom'

export const Cart = () => {
  
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const total = getTotalCartAmount();

  const navigate = useNavigate();

  return <div className='cart'>
    <div>
      <h1>Your cart items</h1>
    </div>
    <div className="cartItems">
      {PRODUCTS.map((product) => {

        if (cartItems[product.id] !== 0) {
          return <CartItem data={product} />
        }

      })}
    </div>
    {total > 0 ?(
    <div className="checkout">
      <p>Subtotal: ${total}</p>
      <button onClick={() => navigate('/shop')}>Continue shopping</button>
      <button> Checkout </button>
    </div>
    ):(<h1>Your cart is empty</h1>)
}
  </div>
}

export default Cart
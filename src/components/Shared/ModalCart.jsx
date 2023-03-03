import React from 'react'
import { useSelector } from 'react-redux'
import ItemModal from './ItemModal';
import "./styles/modalCart.css"

const ModalCart = ({isCart}) => {
    
   const {cart}= useSelector(state=>state);
  return (
    <div className='modal__cart' style={{right: `${isCart ? "0%" : "-100%"}`}}>
        <h3>Your Cart:</h3>
        <div className='modal__cart--box'>
        
            {
                cart?.length === 0 ? <div className="cart__empty">
                   <div className="cart__empty--img">
                    <img src="./img/empty-cart.png" alt="" />
                    </div>
                    <p>Your cart is empty...</p>
                  </div>
                :
                cart?.map(item=>(
                    <ItemModal key={item.id} item={item}></ItemModal>
                ))
            }
        </div>

        <div className='modal__cart--total'>
            <div className='modal__total'>
              <span>Total</span>
              <p>$ {(cart?.reduce((acc,cv)=> acc + cv.quantity * cv.product.price, 0)).toFixed(2)}</p>
            </div>
            <button className='modal__cart--btn'>Checkout</button>
        </div>

    </div>
  )
}

export default ModalCart
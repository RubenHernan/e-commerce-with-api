import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../components/Cart/CartItem'

const Cart = () => {
 
   const { cart} = useSelector(state=>state)
  return (
    <div>
        <div>
            {
                cart?.map( prod => (
                    <CartItem key={prod.id} prod={prod}></CartItem>
                ))
            }
        </div>
    </div>
  )
}

export default Cart
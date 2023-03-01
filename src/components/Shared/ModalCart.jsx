import React from 'react'
import { useSelector } from 'react-redux'
import ItemModal from './ItemModal';
import "./styles/modalCart.css"

const ModalCart = () => {
    
   const {cart}= useSelector(state=>state);
 console.log(cart);
  return (
    <div className='modal__cart'>
        <div>
            {
                cart?.map(item=>(
                    <ItemModal key={item.id} item={item}></ItemModal>
                ))
            }
        </div>

    </div>
  )
}

export default ModalCart
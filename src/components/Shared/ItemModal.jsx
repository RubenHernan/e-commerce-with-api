import React, { useState } from 'react'
import "./styles/itemModal.css"

const ItemModal = ({item}) => {

    const [cont, setCont] = useState(1);

    const handleMinus = () =>{
        if  (cont > 1) setCont(cont- 1);
    }

    const handlePlus = () =>{
        setCont(cont+ 1);
    }

  return (
    <div className='container__items'>   
    <div className='modal__item--info'>
        <div className='modal__img'>
            <img src={item.product.images[0].url} alt="Photo" />
        </div>
        <div className='modal__text'>
            <div className='modal__title'>
                <p>{item.product.title}</p>
                <i class='bx bx-trash'></i>
            </div>
            <div>
                <div className='card__count'>
                    <div className='card__counter'>
                        <button onClick={handleMinus}>-</button><span>{cont}</span><button onClick={handlePlus}>+</button>
                  </div>
                </div>
            </div>
        </div>
    </div>
    <div className='modal__subtotal'>
        <p><span>Subtotal: $</span>{cont*item.product.price}</p>
    </div>
    </div>
  )
}

export default ItemModal
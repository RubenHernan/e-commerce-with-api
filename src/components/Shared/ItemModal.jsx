import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getCartThunk } from '../../store/slices/cart.slice'
import config from '../../utils/getConfig'
import "./styles/itemModal.css"

const ItemModal = ({item}) => {

    const dispatch = useDispatch();

    const deleteItem = () => {
            const url = `https://e-commerce-api-v2.academlo.tech/api/v1/cart/${item.id}`
            axios.delete(url, config)
                .then(res => {
                    dispatch(getCartThunk());
                })
                .catch(err =>  console.log(err))
    }

    const handleMinus = () =>{
        if( item.quantity > 1){
        const url = `https://e-commerce-api-v2.academlo.tech/api/v1/cart/${item.id}`
        axios.put(url, {quantity: item.quantity - 1},config)
         .then(res => {
            dispatch(getCartThunk());
         })
         .catch(err =>  console.log(err))
        }else if( item.quantity === 1){
            deleteItem();
         }
    }

    const handlePlus = () =>{
        const url = `https://e-commerce-api-v2.academlo.tech/api/v1/cart/${item.id}`
        axios.put(url, {quantity: item.quantity + 1},config)
         .then(res => dispatch(getCartThunk()))
         .catch(err =>  console.log(err))
    }

    const handleDelete = () => deleteItem()


  return (
    <div className='container__items'>   
    <div className='modal__item--info'>
        <div className='modal__img'>
            <img src={item.product.images[0].url} alt="Photo" />
        </div>
        <div className='modal__text'>
            <div className='modal__title'>
                <p>{item.product.title}</p>
                <i onClick={handleDelete} className='bx bx-trash'></i>
            </div>
            <div>
                <div className='card__count'>
                    <div className='card__counter'>
                        <button onClick={handleMinus}>-</button><p>{item.quantity}</p><button onClick={handlePlus}>+</button>
                  </div>
                </div>
            </div>
        </div>
    </div>
    <div className='modal__subtotal'>
        <p><span>Subtotal: $</span>{(item.quantity*item.product.price).toFixed(2)}</p>
    </div>
    </div>
  )
}

export default ItemModal
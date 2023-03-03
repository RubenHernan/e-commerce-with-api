import axios from 'axios';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCartThunk } from '../../store/slices/cart.slice';
import config from '../../utils/getConfig';
import "./styles/cardProduct.css"

const CardProduct = ({product}) => {
const navigate= useNavigate();
const dispatch = useDispatch();

const {cart}= useSelector(state=>state)
const handleClick = () => {
    navigate(`/product/${product.id}`)
 
}

const handleAddCart = e => {
  const data = {
    "quantity": 1,
    "productId": product.id
  }

  e.stopPropagation();
  const url = "https://e-commerce-api-v2.academlo.tech/api/v1/cart";
  axios.post(url, data , config)
    .then(res => {
      console.log(res);
      dispatch(getCartThunk())
    })
    .catch(err => {
      console.log(err);
      if(err.response.data.error = "Product already added to cart"){

        const obj = cart.filter( item => item.productId === product.id )
        const url = `https://e-commerce-api-v2.academlo.tech/api/v1/cart/${obj[0].id}`
        axios.put(url, {quantity: +obj[0].quantity + 1},config)
         .then(res => dispatch(getCartThunk()))
         .catch(err =>  console.log(err))
      }
    })
}


  return (
    <article className='card' onClick={(handleClick)}>
      <div className='border'></div>
      <div className='border'></div>
      <div className='border'></div>
      <div className='border'></div>
        <header className='card__header'>
            <img src={product.images[0].url}></img>
        </header>
        <div className='card__body'>
          <div className='card__body--box'>
            <h3>{product.brand}</h3>
            <span>{product.title}</span>
          </div>
          <div className='card__body--box'>
            <h3>Price</h3>
            <span>${product.price}</span>
          </div>
        </div>
        <div className='card__btn'>
          <button onClick={handleAddCart}><i className='bx bx-plus'></i></button>
        </div>
    </article>
  )
}

export default CardProduct
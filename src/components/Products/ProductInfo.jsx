import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCartThunk } from '../../store/slices/cart.slice';
import config from '../../utils/getConfig';
import SliderProduct from './SliderProduct';
import "./styles/productInfo.css"

const ProductInfo = ({product}) => {
const [cont, setCont] = useState(1);
const {cart} = useSelector(state => state);
const dispatch = useDispatch();
const handleMinus = () =>{
    if  (cont > 1) setCont(cont- 1);
}

const handlePlus = () =>{
    setCont(cont+ 1);
}

const handleAddCart = e => {
  const data = {
    "quantity": cont,
    "productId": product.id
  }

  const url = "https://e-commerce-api-v2.academlo.tech/api/v1/cart";
  axios.post(url, data , config)
    .then(res => {
      console.log(res);
      dispatch(getCartThunk())
    })
    .catch(err => {
      if(err.response.data.error = "Product already added to cart"){

        const obj = cart.filter( item => item.productId === product.id )
        const url = `https://e-commerce-api-v2.academlo.tech/api/v1/cart/${obj[0].id}`
        axios.put(url, {quantity: +obj[0].quantity + cont},config)
         .then(res => dispatch(getCartThunk()))
         .catch(err =>  console.log(err))
      }
    })
}

  return (

    <div className='info'>
      <div className='info__menu'>
        <Link to={"/"}>Home</Link>
        <i className='bx bx-chevrons-right'></i>
        <p>{product?.title}</p>
      </div>
    <div className='info__body'>
     <SliderProduct product={product}></SliderProduct>
      <div className='info__details'>
        <div className='card__body'>
            <div className='card__body--box'>
              <h3>{product?.brand}</h3>
              <span className='info__title'>{product?.title}</span>
            </div>
            <div className='card__body--info'>
              <div className='card__item'>
                <h3>Price</h3>
                <span className='info__price'>${product?.price}</span>
              </div>
              <div className='card__item'>
                <h3>Quantity</h3>
                <div className='card__count'>
                    <div className='card__counter'>
                        <button onClick={handleMinus}>-</button><p>{cont}</p><button onClick={handlePlus}>+</button>
                  </div>
                </div>
              </div>
            </div>
            <div className='info__button'>
              <button onClick={handleAddCart}>Add to cart <i className='bx bx-cart'></i></button>
            </div>
          </div>
          <div className='info__description'>
            {product?.description}
          </div>
      </div>
    </div>

    </div> 
  )
}

export default ProductInfo
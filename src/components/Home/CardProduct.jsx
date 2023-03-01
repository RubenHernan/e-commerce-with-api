import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./styles/cardProduct.css"

const CardProduct = ({product}) => {
const navigate= useNavigate();

const handleClick = () => {
 navigate(`product/${product.id}`)
}

const handleAddCart = e => {
  e.stopPropagation();
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
          <button onClick={handleAddCart}><i class='bx bx-plus'></i></button>
        </div>
    </article>
  )
}

export default CardProduct
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./styles/productInfo.css"

const ProductInfo = ({product}) => {
console.log(product);
const [counter, setCounter] = useState(1);

  return (

    <div className='info'>
      <div className='info__menu'>
        <Link to={"/"}>Home</Link>
        <i className='bx bx-chevrons-right'></i>
        <p>{product?.title}</p>
      </div>
    <div className='info__body'>
      <div className='info__img'>
        <img src={product?.images[0].url} alt="" />
        {/* <i class='bx bx-chevron-right' ></i> */}
      </div>
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
                        <button onClick={handleMinus}>-</button><span>{counter}</span><button onClick={handlePlus}>+</button>
                  </div>
                </div>
              </div>
            </div>
            <div className='info__button'>
              <button>Add to cart <i className='bx bx-cart'></i></button>
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
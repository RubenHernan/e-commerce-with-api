import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardProduct from '../components/Home/CardProduct'
import { getProductsByName } from '../store/slices/products.slice'
import "./styles/home.css"

const Home = () => {

    const dispatch = useDispatch();
    const {  products } = useSelector(reducer => reducer)

   const handleSubmit = e => {
      e.preventDefault();
      const value = e.target.search.value.trim().toLowerCase();
      dispatch(getProductsByName(value));
   } 

  return (
    <div className='home__products'>
      <form onSubmit={handleSubmit} className='home__form'>
        <input className='home__input' type="text" id="search" placeholder='What are you looking for?'/>
        <button className='home__btn'><i className='bx bx-search'></i></button>
      </form>
      <div className='list__products'>
        {
          products?.map(product=> (
            <CardProduct key={product.id} product={product}></CardProduct>
          ))
        }
      </div>
    </div>
  )
}

export default Home
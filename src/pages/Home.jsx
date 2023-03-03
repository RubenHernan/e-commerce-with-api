import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardProduct from '../components/Home/CardProduct'
import Filters from '../components/Home/Filters'
import { getProductsByName } from '../store/slices/products.slice'
import "./styles/home.css"

const Home = () => {

    const dispatch = useDispatch();
    const {  products } = useSelector(reducer => reducer)
    const [isFilter, setIsFilter] = useState(false)
    const [fromTo, setFromTo] = useState({from: 0, to:Infinity})
    const filterProductPrice = product => +product.price >= fromTo.from && +product.price <= fromTo.to
   const handleSubmit = e => {
      e.preventDefault();
      const value = e.target.search.value.trim().toLowerCase();
      dispatch(getProductsByName(value));
   } 

   const handleFilter = () => {
    setIsFilter(true);
   }

  return (
    <div className='home'>
      <Filters isFilter={isFilter} setIsFilter={setIsFilter} setFromTo={setFromTo}></Filters>
      <div className='home__products'> 
          <div className='home__filters'>
              <form onSubmit={handleSubmit} className='home__form'>
                <input className='home__input' type="text" id="search" placeholder='What are you looking for?'/>
                <button className='home__btn'><i className='bx bx-search'></i></button>
              </form>
              <div className='filter__btn display__filter'>
              
                <p onClick={handleFilter}><span className='bar__filter'></span><i className='bx bx-filter-alt' ></i> Filters</p>
              </div>
          </div>
          <div className='list__products'>
            {
              products?.filter(filterProductPrice).length === 0 ? <div className="notFound cart__empty">
              <div className="cart__empty--img">
               <img src="./img/empty.png" alt="" />
               </div>
               <p>Not results...</p>
             </div>
           :

              products?.filter(filterProductPrice).map(product=> (
                <CardProduct key={product.id} product={product}></CardProduct>
              ))
            }
          </div>
      </div>
    </div>
  )
}

export default Home
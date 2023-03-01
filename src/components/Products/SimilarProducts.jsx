import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

// import Swiper core and required modules
import { Navigation, Pagination, FreeMode } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';



import CardProduct from '../Home/CardProduct'
import "./styles/similarProducts.css"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const SimilarProducts = ({product}) => {

    const [filterProducts, setFilterProducts] = useState()


const { products } = useSelector(reducer=>reducer)

useEffect(() => {

    if(products && product){
  setFilterProducts(products?.filter(prod => prod.category.id === product.category.id  /*&& prod.id !== product.id*/))}
}, [products,product])



  return (
    <div>
  <p className='similar__title'>Discover similar items</p>
  <Swiper
        slidesPerView={"auto"}
         navigation={true}
        modules={[ Pagination, Navigation]}
        className="mySwiper"
    >
        {
                filterProducts?.map(prod => {
                    if(prod.id !== product.id){
                        return<SwiperSlide className='swi'><CardProduct key={prod.id} product={prod} /></SwiperSlide>
                    }
                    
                })
            }

    </Swiper>
      

    </div>
  )
}

export default SimilarProducts
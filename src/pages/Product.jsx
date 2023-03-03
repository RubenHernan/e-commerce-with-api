import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductInfo from '../components/Products/ProductInfo';
import SimilarProducts from '../components/Products/SimilarProducts';

const Product = () => {

   const {id} = useParams();

   const [product, setProduct] = useState()

useEffect(() => {
    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`
axios.get(url)
.then(res => setProduct(res.data))
.catch(err=>console.log(err))
}, [id])


  return (
    <div>
      <ProductInfo product={product} />
      <SimilarProducts product={product}></SimilarProducts>
    </div>
  )
}

export default Product
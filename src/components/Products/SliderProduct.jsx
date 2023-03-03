import React, { useState } from 'react'
import "./styles/sliderProduct.css"

const SliderProduct = ({product}) => {
   const [imgSelected, setImgSelected] = useState(0) 

    const styleMov = {
        transform: `translateX(calc(-${imgSelected}/${product?.images.length} * 100%))`,
        width: `${product?.images.length * 100}%`
    }

    const handleRight = () =>{
        if(imgSelected + 1 > product.images.length - 1){
            setImgSelected(0)
        }else{
            setImgSelected(imgSelected + 1)
        }
    }

    const handleLeft = () =>{
        if(imgSelected -1 < 0){
            setImgSelected(product.images.length-1)
        }else{
            setImgSelected(imgSelected - 1)
        }
    }


  return (
    <div className='product__slider'>
        <div className='product__slider--mov' style={styleMov}>

            {
                product?.images.map(img => (
                    <div key={img.id} className="product__slider--img">
                        <img src={img.url} alt="" />
                    </div>  
                ))
            }
            
        </div>
        <i onClick={handleRight} className='slider__arrow slider__arrow--r bx bx-chevron-right'></i>
        <i onClick={handleLeft} className='slider__arrow bx bx-chevron-left'></i>

    </div>
  )
}

export default SliderProduct
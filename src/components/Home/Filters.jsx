import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getProductsByName } from '../../store/slices/products.slice'
import "./styles/filters.css" 

const Filters = ({isFilter,setIsFilter,setFromTo}) => {

   const dispatch = useDispatch();
   const [dropPrice, setDropPrice] = useState(true)
   const [dropCategory, setDropCategory] = useState(true)
    const [category, setCategory] = useState()
  useEffect(() => {
    const url = "https://e-commerce-api-v2.academlo.tech/api/v1/categories"

    axios.get(url)
.then(res=> {
    setCategory(res.data);
    console.log(res)})
.catch(err => console.log(err));


  }, [])

  const handleCategory = id => {
    dispatch(getProductsByName(id, true));
  }

  const handlePriceDrop = () => {
    setDropPrice(!dropPrice)
  }

  const handleCategoryDrop = () =>{
    setDropCategory(!dropCategory)
  }

  const handleClose = () =>{
    setIsFilter(false)
  }

  const handleSubmit = e =>{
    e.preventDefault();
    const from = Number(e.target.from.value.trim())
    const to = Number(e.target.to.value.trim())

    if(from && to){
        setFromTo({from,to})
    }else if(from && !to){
        setFromTo({from,to:Infinity})
    }else if(!from && to){
        setFromTo({ from: 0, to})
    }else{
        setFromTo({ from: 0, to:Infinity})
    }
    }
  
  

  return (
    <div className='filter__container' style={{ left: `${isFilter ? "0%" : "-130%"}`}} >
        <div className='filter__title'><h2>Filters</h2><i onClick={handleClose} className='bx bx-x'></i></div>
        <div className='filter__box'>
            <div className='filter__bx'>
                <div className='filter__arr' onClick={handlePriceDrop}><span>Price</span><i className='bx bx-chevron-down' ></i></div>
   
               <form onSubmit={handleSubmit} className='filter__form' style={{ height: `${dropPrice ? "150px" : "0px"}`}}> 
                    <div className='form__group'>
                        <label htmlFor="from">From</label>
                        <input name="from" type="number"></input>
                    </div>    
                    <div className='form__group'>
                        <label htmlFor="to">To</label>
                        <input name="to" type="number"></input>
                    </div>   
                    <div className='filter__btn'>
                        <button>Filter price</button>
                    </div> 

               </form>
        
            </div>

            <div className='filter__bx'>
                <div className='filter__arr' onClick={handleCategoryDrop}><span>Category</span><i className='bx bx-chevron-down' ></i></div>
   
               <ul className='filter__cat' style={{ height: `${dropCategory ? "150px" : "0px"}`}}> 
                  {
                    category?.map( cat => (
                        <li onClick={() => handleCategory(cat.id)} key={cat.id}>{cat.name}</li>
                     ) )
                  }
               </ul>
        
            </div>
        </div>
    </div>
  )
}

export default Filters
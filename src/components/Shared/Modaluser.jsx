import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { setCart } from '../../store/slices/cart.slice';
import { getAllProductsThunk } from '../../store/slices/products.slice';
import "./styles/modalUser.css"

const Modaluser = ({user ,setUser}) => {

const {cart} = useSelector(state => state)
  
const navigate = useNavigate();
const dispatch = useDispatch();

const handleLogOut = () => {
  localStorage.clear();
  dispatch(setCart());
  navigate("/")
  dispatch(getAllProductsThunk());
  setUser(false);
  window.location.reload(true);
}

  return (
    <div className='modal__user' style={{display: `${user ? "flex" : "none"}`}} >
        <p><span>User: </span>{localStorage.getItem("name")}</p>
        <div className='modal__user--btn'>
            <Link onClick={handleLogOut}>Log out <i className='bx bx-power-off'></i></Link>
        </div>
    </div>
  )
}

export default Modaluser
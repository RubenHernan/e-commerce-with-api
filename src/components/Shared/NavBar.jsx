import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ModalCart from './ModalCart';
import "./styles/navBar.css"

const NavBar = () => {

  const navigate = useNavigate();

  const handleClickHome = () =>{
    navigate("/");
  }

  return (
    <>
    <nav className='nav'>
      <div className='nav__logo'>
        <h1 onClick={handleClickHome}>
          LOGO
        </h1>
        </div>
        <ul className='nav__menu'>
            {
              localStorage.getItem("token") 
              ? <li><a>User</a></li>
              : <li><Link to="/user/login">Login</Link><span className='bar'></span></li>
            }
      
            <li><Link to="/purchases">Purchases</Link><span className='bar'></span></li>
            <li><Link to="/cart">Cart</Link><span className='bar'></span></li>
        </ul>
    </nav>
    <ModalCart></ModalCart>
    </>
  )
}

export default NavBar
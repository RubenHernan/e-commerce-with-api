import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ModalCart from './ModalCart';
import Modaluser from './Modaluser';
import "./styles/navBar.css"

const NavBar = () => {

  const navigate = useNavigate();
  const [isCart, setIsCart] = useState(false);
  const [user, setUser] = useState(false);

  const handleClickHome = () =>{
    navigate("/");
  }

  const handleCart = () => {
    if(localStorage.getItem('token')){
   setIsCart(!isCart);
   setUser(false)
    }else{
      setIsCart(false);
    }
  }

  const handleUser = () => {
    if(localStorage.getItem('token')){
      setUser(!user);
      setIsCart(false);
    }else{
      setUser(false);
    }
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

              ? <><li><Link onClick={handleUser}>User</Link><span className='bar'></span><Modaluser user={user} setUser={setUser}></Modaluser></li>
                  <li><Link onClick={handleCart}>Cart</Link><span className='bar'></span></li>
                </> 
              :<> <li><Link to="/user/login">Login</Link><span className='bar'></span></li>
              <li><Link to="/user/login">Cart</Link><span className='bar'></span></li>
              </>
            }
      
            {/* <li><Link to="/purchases">Purchases</Link><span className='bar'></span></li> */}

  
        </ul>
    </nav>
    <ModalCart isCart={isCart}></ModalCart>
    </>
  )
}

export default NavBar
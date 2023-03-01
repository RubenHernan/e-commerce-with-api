import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
// import { setIsLogin } from '../store/slices/isLogin.slice';
import { defaultValues } from '../utils/defaultValues';
import "./styles/login.css"

const Login = () => {

  const navigate =  useNavigate();
  const dispatch = useDispatch();
  // const {isLogin} = useSelector(reducer=>reducer);

  const submit = data => {
    const url = "https://e-commerce-api-v2.academlo.tech/api/v1/users/login";
    axios.post(url,data)
      .then(res => {
        localStorage.setItem('token',res.data.token);
        localStorage.setItem('name', `${res.data.user.firstName} ${res.data.user.lastName}`);
        // dispatch(setIsLogin(true));
        navigate("/");
        console.log(res)})
      .catch(err => {console.log(err);
      localStorage.clear();})

      reset(defaultValues);
  }

  const { reset,handleSubmit,register } = useForm();


  if(isLogin){
    return <h1>LOGIN!!</h1>
  }


  return (
    <div className='login'>
      <form onSubmit={handleSubmit(submit)} className='login__form'>
        <h2 className='login__title'>Login</h2>
        <div className='form__box'>
          <input {...register('email')} required="required" type="text" id='email' />
          <label htmlFor="email">Email</label>
          <span className="bar__form"></span>
          <i className='bx bx-envelope'></i>
        </div>
        <div className='form__box'>
          <input {...register('password')} required="required" type="password" id='password' />
          <label htmlFor="password">Password</label>
          <span className="bar__form"></span>
          <i className='bx bx-key'></i>
        </div>
        <div className='form__box'>
          <button className='form__btn'>Login</button>
        </div>
        <div className='form__box'>
           <span className='form__span'>Don't have an account? <Link to={"user/register"}>Register</Link></span> 
        </div>
      </form>
    </div>
  )
}

export default Login
import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom';
import { defaultValues } from '../utils/defaultValues';

const Register = () => {

   const { register, handleSubmit,reset } = useForm();
  const navigate = useNavigate();

    const submit = data => {
        const url = "https://e-commerce-api-v2.academlo.tech/api/v1/users"
        axios.post(url,data)
            .then(res=> {
                navigate("/")
                console.log(res.data)})
            .catch(err => console.log(err))
        reset(defaultValues)
    }

  return (
    <div className='login'>
        <form  className='login__form' onSubmit={handleSubmit(submit)}>
        <h2 className='login__title'>Register</h2>
            <div className='form__box' >
                <input {...register('firstName')} required="required" type="text" id='firstName' />
                <label htmlFor="firstName">First Name</label>
                <span className="bar__form"></span>
            </div>
            <div className='form__box'>
                <input {...register('lastName')} required="required" type="text" id='lastName' />
                <label htmlFor="lastName">Last Name</label>
                <span className="bar__form"></span>
            </div>
            <div className='form__box'>
                <input {...register('email')} required="required" type="text" id='email' />
                <label htmlFor="email">Email</label>
                <span className="bar__form"></span>
            </div>
            <div className='form__box'>
                <input {...register('password')}  required="required" type="password" id='password' />
                <label htmlFor="password">Password</label>
                <span className="bar__form"></span>
            </div>
            <div className='form__box'>
                <input {...register('number')} required="required" type="number" id='phone' />
                <label htmlFor="phone">Phone</label>
                <span className="bar__form"></span>
            </div>
            <div className='form__box'>
                <button className='form__btn'>Register</button>
            </div>
                <div className='form__box'>
                <span className='form__span'>You already have a account?...<Link to={"/user/login"}> Login</Link></span> 
            </div>
        </form>
    </div>
  )
}

export default Register
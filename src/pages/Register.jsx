import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'
import { defaultValues } from '../utils/defaultValues';

const Register = () => {

   const { register, handleSubmit,reset } = useForm();


    const submit = data => {
        const url = "https://e-commerce-api-v2.academlo.tech/api/v1/users"
        axios.post(url,data)
            .then(res=> console.log(res.data))
            .catch(err => console.log(err))
        reset(defaultValues)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <input {...register('firstName')} type="text" id='firstName' />
                <label htmlFor="firstName">First Name</label>
            </div>
            <div>
                <input {...register('lastName')} type="text" id='lastName' />
                <label htmlFor="lastName">Last Name</label>
            </div>
            <div>
                <input {...register('email')} type="email" id='email' />
                <label htmlFor="email">Email</label>
            </div>
            <div>
                <input {...register('password')} type="password" id='password' />
                <label htmlFor="password">Password</label>
            </div>
            <div>
                <input {...register('number')}  type="number" id='phone' />
                <label htmlFor="phone">Phone</label>
            </div>
        </form>
    </div>
  )
}

export default Register
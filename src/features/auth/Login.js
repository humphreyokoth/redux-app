import React,{useState,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'

export const Login = () => {
  const dispatch = useDispatch()
 const [formData,setFormData]= useState({
   email:'',
   password:''
 })

 const handleChange = e =>{
    setFormData(prev =>({
      ...prev,
      [e.target.name]:e.target.value
    }))
 }
 const handleSubmit =e=>{
   e.preventDefault()
   dispatch(loginUser(formData));
 }
  return (
    <div>

        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor='email'>Email</label>
            <input type = 'email' name='email'
              value={formData.email}
              onChange={handleChange}
            />
            <label htmlFor='password'>Password</label>
            <input type = 'password' name='password'
              value={formData.password}
              onChange={handleChange}
            />
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}



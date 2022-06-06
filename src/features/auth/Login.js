import React from 'react'

export const Login = () => {
  return (
    <div>

        <h1>Login</h1>
        <form>
            <label htmlFor='email'>Email</label>
            <input type = 'email' name='email'/>
            <label htmlFor='password'>Password</label>
            <input type = 'password' name='password'/>
        </form>
    </div>
  )
}

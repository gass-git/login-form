import React from 'react'
import { handleChange, handleLogin } from '../handlers'

export default function loginForm(state: any, dispatch: React.Dispatch<any>) {
  return (
    <form>
        <label htmlFor='usernam'>
            Username
            <input 
            type='text' 
            name='username' 
            onChange={(e) => handleChange(e, dispatch)} 
            value={state.username} 
            />
        </label>

        <label htmlFor='password'>
            Password
            <input 
            type='password' 
            name='password' 
            onChange={(e) => handleChange(e, dispatch)} 
            value={state.password} 
            />
        </label>

        <button onClick={(e) => handleLogin(e, dispatch)}>
            Login
        </button>
    </form>
  )
}

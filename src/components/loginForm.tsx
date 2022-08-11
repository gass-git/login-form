import React, {useContext} from 'react'
import { handleChange, handleLogin } from '../handlers'
import {ctx} from '../App'

export default function LoginForm() {
  const {state, dispatch} = useContext(ctx)

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

import React, { useContext } from 'react'
import { handleChange, handleLogin } from '../../handlers'
import { ctx } from '../../App'
import s from './loginForm.module.css'
import Alert from '../alert/alert'

export default function LoginForm(): JSX.Element {
  const { state, dispatch } = useContext(ctx)

  return (
    <form className={s.form_box}>

      {state.errorMsg.length !== 0 ? <Alert /> : null}
      
      <label htmlFor='username'>Username</label>
      <input
        type='text'
        name='username'
        onChange={(e) => handleChange(e, dispatch)}
        value={state.username}
      />

      <label htmlFor='password'>Password</label>
      <input
        type='password'
        name='password'
        onChange={(e) => handleChange(e, dispatch)}
        value={state.password}
      />

      <button onClick={(e) => handleLogin(e, dispatch)}>
        Login
      </button>
    </form>
  )
}

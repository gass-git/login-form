import React, {useReducer} from 'react'
import {appReducer, initialState} from './state'
import Dashboard from './components/dashboard'
import LoginForm from './components/loginForm'

export default function App(): JSX.Element {
  const [state, dispatch] = useReducer(appReducer, initialState)

  return (
    <section>
      {
        state.loggedIn ? 
          <Dashboard state={state} dispatch={dispatch}/>
          :
          <LoginForm state={state} dispatch={dispatch}/>
      }
    </section>
  )
}
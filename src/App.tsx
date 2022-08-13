import React, { useReducer, createContext } from 'react'
import { appReducer, initialState } from './state'
import Dashboard from './components/dashboard/dashboard'
import LoginForm from './components/loginForm/loginForm'

const ctx = createContext<any>(null)

function App(): JSX.Element {
  const [state, dispatch] = useReducer(appReducer, initialState)

  return (
    <ctx.Provider value={{ state, dispatch }}>
      {
        state.loggedIn ? <Dashboard /> : <LoginForm />
      }
    </ctx.Provider>
  )
}

export { ctx, App }
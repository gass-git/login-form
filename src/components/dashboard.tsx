import React, {useContext} from 'react'
import {handleLogout} from '../handlers'
import {ctx} from '../App'

export default function Dashboard() {
  const {state, dispatch} = useContext(ctx)
  
  return (
    <div>
        <h2>Welcome {state.username}! You are logged in.</h2>
        <button onClick={() => handleLogout(dispatch)}>
            Logout
        </button>
    </div>
  )
}

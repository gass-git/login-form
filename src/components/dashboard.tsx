import React from 'react'
import { handleLogout } from '../handlers'

export default function dashboard(state: any, dispatch: any) {
  return (
    <div>
        <h2>Welcome {state.username}! You are logged in.</h2>
        <button onClick={() => handleLogout(dispatch)}>
            Logout
        </button>
    </div>
  )
}

import { readFileSync } from 'fs'
import React, {useReducer} from 'react'

type State = typeof initialState

type Action = 
  | {type: 'submit' | 'logout'}
  | {type: 'update username'; username: string}
  | {type: 'update password'; password: string}
  
const initialState = {
  username: '', 
  password: '', 
  loggedIn: false, 
  errorMsg: ''
}

const credential = {username: 'gabriel', password: '123'}

function appReducer(state: State, action: Action){
  switch(action.type){
    case 'update username': return { 
      ...state, username: action.username 
    }

    case 'update password': return { 
      ...state, password: action.password 
    }

    case 'submit':
      if(state.username === credential.username){
        if(state.password === credential.password){
          return { ...state, loggedIn: true, errorMsg:'' }
        }
        else return { ...state, errorMsg: 'the password is not correct' }
      }
      else return { ...state, errorMsg: 'the username is not correct' }

    case 'logout': return {
      ...state, loggedIn: false
    }  

    default: return state
  }
}

export default function App(): JSX.Element {
  const [state, dispatch] = useReducer(appReducer, initialState)

  function handleSubmit(e: React.FormEvent): void{
    dispatch({type:'submit'})
    e.preventDefault()
  }

  function handleLogout(): void{
    dispatch({type:'logout'})
  }

  function handleChange(e: React.FormEvent): void{
    let target = e.target as HTMLInputElement

    if(target.name === 'username'){
      dispatch({type: 'update username', username: target.value})
    }

    else if(target.name === 'password'){
      dispatch({type: 'update password', password: target.value})
    }
  }

  return (
    <section>
      {
        state.loggedIn ? 
          <div>
            <h2>Welcome {state.username}! You are logged in.</h2>
            <button onClick={() => handleLogout()}>
              Logout
            </button>
          </div>
          :
          <form>
            <label htmlFor='usernam'>
              Username
              <input type='text' name='username' onChange={(e) => handleChange(e)} />
            </label>

            <label htmlFor='password'>
              Password
              <input type='password' name='password' onChange={(e) => handleChange(e)} />
            </label>

            <button onClick={(e) => handleSubmit(e)}>
              Submit
            </button>
          </form>
      }
    </section>
  )
}
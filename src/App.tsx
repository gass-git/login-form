import React, {useReducer} from 'react'

type State = typeof initialState

const initialState = {username: '', password: '', loggedIn: false, errorMsg: ''}

const credential = {username: 'gabriel', password: '123'}

function appReducer(state: any, action: any){
  switch(action.type){
    case 'update username': return { 
      ...state, username: action.username 
    }

    case 'update password': return { 
      ...state, password: action.password 
    }

    case 'submit':
      if(state.username === credential.username){
        if(state.password === credential.password) return { ...state, loggedIn: true }
        else return { ...state, errorMsg: 'the password is not correct' }
      }
      else return { ...state, errorMsg: 'the username is not correct' }

    default: return state
  }
}

export default function App(): JSX.Element {
  const [state, dispatch] = useReducer(appReducer, initialState)

  function handleSubmit(): void{
    dispatch({type:'submit'})
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
      <form>
        <label htmlFor='usernam'>
          Username
          <input type='text' name='username' onChange={(e) => handleChange(e)} />
        </label>

        <label htmlFor='password'>
          Password
          <input type='password' name='password' />
        </label>

        <button onClick={() => handleSubmit()}>Submit</button>
      </form>
    </section>
  )
}
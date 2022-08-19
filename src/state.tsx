type StateType = typeof initialState

type Action = 
  | {type: 'login' | 'logout'}
  | {type: 'update username'; username: string}
  | {type: 'update password'; password: string}
  | {type: 'erase error message'}

const initialState = {
  username: '', 
  password: '', 
  loggedIn: false, 
  errorMsg: ''
}

const credential = {username: 'gabriel', password: '123'}

function appReducer(state: StateType, action: Action){
  switch(action.type){
    case 'update username': return { 
      ...state, username: action.username 
    }

    case 'update password': return { 
      ...state, password: action.password 
    }

    case 'login':
      if(state.username === credential.username){
        if(state.password === credential.password){
          return { 
            ...state, 
            loggedIn: true,
            errorMsg:'' 
          }
        }
        else return { 
          ...state, 
          errorMsg: 'the password is not correct',
          username: '',
          password: ''  
        }
      }
      else return { 
        ...state, 
        errorMsg: 'the username is not correct',
        username: '',
        password: '' 
      }

    case 'logout': return {
      ...state, 
      loggedIn: false
    }  

    case 'erase error message': return {
      ...state,
      errorMsg: ''
    }

    default: return state
  }
}

export {appReducer, initialState}
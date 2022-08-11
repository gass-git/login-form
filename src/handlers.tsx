import React from 'react'

function handleLogin(e: React.FormEvent, dispatch: React.Dispatch<any>): void{
    dispatch({type:'login'})
    e.preventDefault()
}

function handleLogout(dispatch: React.Dispatch<any>): void{
    dispatch({type:'logout'})
}

function handleChange(e: React.FormEvent, dispatch: React.Dispatch<any>): void{
    let target = e.target as HTMLInputElement

    if(target.name === 'username'){
        dispatch({type: 'update username', username: target.value})
    }

    else if(target.name === 'password'){
        dispatch({type: 'update password', password: target.value})
    }
}

export {handleLogin, handleLogout, handleChange}
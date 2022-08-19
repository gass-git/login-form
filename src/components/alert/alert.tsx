import React, {useContext} from 'react'
import s from './alert.module.css'
import { ctx } from '../../App'

export default function Alert() {
  const {dispatch} = useContext(ctx)

  return (
    <section className={s.container}>
        <span
          className={s.cross} 
          onClick={() => dispatch({type: 'erase error message'})}
          >
            X
          </span>
        Login error
    </section>
  )
}

import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import sass from './main.module.scss'

function Main(props) {

  return (
    <div className={sass.main}>
       <div className={sass.top}>
           <button>{props.title}</button>
           <button>{props.title2}</button>
           <Outlet/>
       </div>
    </div>
  )
}

export default Main
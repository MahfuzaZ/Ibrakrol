import React from 'react'
import sass from './left.module.scss'
import logo from '../../Image/logo.svg'
import circle from '../../Image/circle.png'
function Left() {
  return (
    <div className={sass.left}>
        <img className={sass.logo} src={logo} alt="" />
        <img className={sass.circle} src={circle} alt="" />
    </div>
  )
}

export default Left
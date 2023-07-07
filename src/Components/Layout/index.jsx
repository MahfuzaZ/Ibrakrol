import React from 'react'
import Left from '../Left'
import sass from './layout.module.scss'

function Layout({children}) {
  return (
    <div className={sass.layout}>
          <div className={sass.left}>
          <Left/>
          </div>
          <div className={sass.right}>
             {children}
          </div>
    </div>
  )
}

export default Layout
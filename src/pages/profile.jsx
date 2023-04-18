import React from 'react'
import style from '../styles/Profile.module.scss'
import Award1 from '@/ViewComponent/Award1/Award1'

const profile = () => {
  return (
    <div className={style.profile}>
        <div className={style.border}>
            <Award1 />
        </div>
    </div>
  )
}

export default profile
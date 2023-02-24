import React from 'react'
import styles from './Banner.module.scss'

export default function Banner({imageUrl}) {
  return (
    <div 
        className={styles.capa}
        style={{backgroundImage: `url('${imageUrl}')`}}
    ></div>
  )
}

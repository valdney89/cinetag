import React from 'react'
import styles from './TitleSection.module.scss'

export default function TitleSection({children}) {
  return (
    <div className={styles.texto}>
        <h1>
            {children}
        </h1>
    </div>
  )
}

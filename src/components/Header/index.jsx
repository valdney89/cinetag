import React from 'react'
import styles from './Header.module.scss'

import logo from './logo.png'
import HeaderLink from 'components/HeaderLink'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className={styles.cabecalho}>
        <Link to="/">
            <img src={logo} alt="logo do cinetag" />
        </Link>
        <nav>
            <HeaderLink url="/">
                Home
            </HeaderLink>
            <HeaderLink url="/favoritos">
                Favoritos
            </HeaderLink>
        </nav>
    </header>
  )
}

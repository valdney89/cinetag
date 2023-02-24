import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HeaderLink.module.scss';

export default function HeaderLink({url, children}) {
  return (
    <Link to={url} className={styles.link}>
        {children}
    </Link>
  )
}

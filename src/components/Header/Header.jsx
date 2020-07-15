import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

export default function Header() {
    return (
        <header className={styles.header}>
            <h1>COVID-TRACKER</h1>
            <Link className={ styles.LinkStyle } to="/">Home</Link> | <Link className={ styles.LinkStyle }
            to="/about">About</Link>
        </header>
    )
}

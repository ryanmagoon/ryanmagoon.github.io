import React from 'react'
import ReactDOM from 'react-dom'
import { Link as ScrollLink } from 'react-scroll'
import Link from 'gatsby-link'

import { Letter, Work } from '../../components'

import styles from './header.module.css'

const Header = ({ siteTitle }) => (
  <div className={styles.headWrapper}>
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <ul id="primary-menu" className={styles.menu}>
          <li className={styles.li}>
            <a className={styles.link} href="/">
              Home
            </a>
          </li>
          <li className={styles.li}>
            <ScrollLink
              className={styles.link}
              to="work"
              smooth={true}
              offset={50}
              duration={500}
            >
              Work
            </ScrollLink>
          </li>
          <li className={styles.li}>
            <a className={styles.link} href="#about">
              About
            </a>
          </li>
        </ul>
      </nav>
      <h1 className={styles.h1}>Ryan Magoon</h1>
      <div className={styles.line}>
        <span className={styles.emoji}>🦄</span>
        <p className={styles.p}>Design + Code</p>
      </div>
      <div className={styles.line}>
        <span className={styles.emoji}>🌆</span>
        <p className={styles.p}>Raleigh, NC</p>
      </div>
    </header>
    <Letter />
  </div>
)

export default Header

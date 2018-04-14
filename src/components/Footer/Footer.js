import React from 'react'

import { footer, text } from './footer.module.css'

const Footer = () => (
  <footer className={footer}>
    <span className={text}>
      &copy;&thinsp;{new Date().getFullYear()} Ryan Magoon. All Rights Reserved.
    </span>
  </footer>
)

export default Footer

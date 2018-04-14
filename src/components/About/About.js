import React, { Fragment } from 'react'
import { Element } from 'react-scroll'

import Hobbies from './Hobbies/Hobbies'
import Me from './Me/Me'
import TechILove from './TechILove/TechILove'

const About = () => (
  <Element name="about">
    <Me />
    <Hobbies />
    <TechILove />
  </Element>
)

export default About

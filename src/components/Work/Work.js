import React, { Fragment } from 'react'
import { Element } from 'react-scroll'

import FindMySpot from './FindMySpot/FindMySpot'
import NCAHEC from './NCAHEC/NCAHEC'

import styles from './work.module.css'

const work = () => (
  <Element name="work">
    <FindMySpot />
    <NCAHEC />
  </Element>
)

export default work

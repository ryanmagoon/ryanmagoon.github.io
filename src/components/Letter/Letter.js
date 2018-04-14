import React from 'react'

import { h2, letter, letterContent, p, signature } from './letter.module.css'

const Letter = () => (
  <section className={letter}>
    <div className={letterContent}>
      <h2 className={h2}>From the Desk of Ryan Magoon</h2>
      <p className={p}>Hey there!</p>
      <p className={p}>
        I'm Ryan, and I've been a code ninja for small and large companies since
        2012, with a focus on full-stack javascript development for the past two
        years.
      </p>
      <p className={p}>
        I code to create magical, delightful experiences, and I'm looking to be
        part of a team either working on a product or in an agency setting so I
        can do that at scale.
      </p>
      <p className={p}>
        I'm also available for hire as an independent consultant for web
        development and design.
      </p>
      <p className={p}>
        I believe in inclusion as a first principle of software design and
        development. If disabled people can't use your software just as well as
        able-bodied people, it's not worth shipping.
      </p>
      <p className={p}>
        The most important qualities of a software developer are resilience,
        perserverance, empathy, and passion. I've got each in spades. You'll
        notice it from the moment you meet me, and you'll see it in anything I
        make for you and your business.
      </p>
      <p className={p}>
        Please consider me for your next project or hire. You'll be glad you
        did.
      </p>

      <p className={signature}>Ryan Magoon</p>
      <p className={p}>
        P.S. Here are some of the things I've been working on...
      </p>
    </div>
  </section>
)

export default Letter

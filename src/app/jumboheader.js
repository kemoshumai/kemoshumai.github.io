"use client";

import { useEffect, useState } from 'react'
import styles from './jumboheader.module.css'

export default function JumboHeader() {

  const [displayPositionVh,setDisplayPositionVh] = useState(0);

  const onScroll = e => {
    setDisplayPositionVh(window.scrollY/window.innerHeight);
  }

  useEffect(() => {
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [])

  return (
    <div className={styles.main}>
      <img className={styles.background} src="/background.png" alt="" />
      <h1
        style={
          {
            transform: `translate(0,${displayPositionVh/1.5*300}vh)`,
            opacity: 1-(displayPositionVh/0.5)
          }
        }
      >Kemoshumai's works</h1>
      <div className={styles.accent_line}></div>
      <img
        className={styles.frontcharacter}
        src="/rusk_chan_normal_face.png"
        alt="" 
        style={
          {
            transform: `translate(${displayPositionVh/1.5*200}vw,0)`
          }
        }
      />
      <div className={styles.phrase}
        style={
          {
            transform: `translate(0, ${displayPositionVh/1.5*-100}px)`,
            opacity: displayPositionVh/1.2
          }
        }
      >
        <p>- CONTINUE -</p>
      </div>
    </div>
  )
}

import React from 'react'
import { getImageUrl } from './utils'
import styles from'./Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'am Sai Teja</h1>
        <p className={styles.description}>As a Java full stack developer, I excel in creating engaging user interfaces using Java, Spring Boot, HTML, CSS, Bootstrap, JavaScript and ReactJS. I'm skilled at solving problems, ensuring responsive design, and managing version control systems. With a collaborative approach and strong communication skills, I'm ready to contribute to a company's goals. I'm flexible with working hours and open to relocation for the right opportunity.</p>
        <a href="mailto:saikodam99@gmail.com" className={styles.contactBtn}>Contact Me</a>
      </div>
      <img src={getImageUrl("assets/Hero.png")} className={styles.heroImg}></img>
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  )
}

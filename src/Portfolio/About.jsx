import React from 'react'
import styles from'./About.module.css'
import { getImageUrl } from './utils'


export default function About() {
  return (
    <section id="about" className={styles.container}>
      <h1 className={styles.title}>About</h1>
      <div className={styles.content}>
            <p>My name is Sai Teja, and I am from Bhupalpally, Telangana. I graduated from JBIET in 2021 with a specialization in Civil Engineering, achieving an aggregate of 80%.

After graduation, I dedicated my time to preparing for government job exams. Although I was unable to crack the exams, this journey taught me the values of dedication, learning, self-motivation, and time management.

Following this phase, I transitioned to the software field to challenge myself further. I have since acquired skills in HTML, CSS, JavaScript, React, Java, and SQL. I am now eager to apply these skills and qualities to a new professional opportunity.</p>

<h2 className={styles.title}>SKILLS</h2>
         <div className={styles.skills}>
         <img src={getImageUrl("assets/Html.png")} className={styles.skillImg}></img>
         <img src={getImageUrl("assets/Css.png")} className={styles.skillImg}></img>
         <img src={getImageUrl("assets/Reactt.png")} className={styles.skillImg}></img>
  
         </div>
      </div>
    </section>
  )
}

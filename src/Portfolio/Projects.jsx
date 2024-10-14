import styles from'./Projects.module.css'
import React from 'react'
import { GoDotFill } from "react-icons/go";

const Projects = () => {
  return (
    <section id="experience" className={styles.container}>
         <h2 className={styles.Heading}>WORK-EXPERIENCE</h2>
         <h3 className={styles.role}> <GoDotFill /> Java Fullstack Developer</h3>
         <div className={styles.content}>
          <div className={styles.companyinfo}>
         <h4 className={styles.company}>Yoktha-Technologies </h4>
         <h4>March 2024 – Aug 2024</h4>
         </div>
         <p> I completed my Java Full Stack Developer internship at Yoktha Technologies, where I was tasked with creating an online library system for borrowing books. 
          I developed the website using Eclipse Enterprise, utilizing JSP for the HTML and CSS content, and enhanced its interactivity with JavaScript for real-time search and dynamic updates. 
          I also implemented servlets for database connections and managed the SQL database to handle user accounts, inventory, and transactions. The result was a user-friendly, fully functional full-stack website. 
        </p>
         </div>
    </section>
  )
}

export default Projects

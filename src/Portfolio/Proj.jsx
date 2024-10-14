import React from 'react'
import styles from'./Proj.module.css'
import { GoDotFill } from "react-icons/go";

const Proj = () => {
  return (
    
    <section id="projects" className={styles.container}>
         <h2 className={styles.Heading}>PROJECT'S</h2>
        <div className={styles.block}>
         <h3 className={styles.title}> <GoDotFill /> Movie Serach Application</h3>
         <div className={styles.content}>
          <p>
          Developed the project using HTML, CSS, and JavaScript for the frontend and Java for the backend. The frontend displays movies and shows from the TMDB API, 
          with features to view details and search by name. The backend fetches data via HttpURLConnection, parses JSON responses into objects, and provides movie and show details for display.
          </p>
        </div>
         </div>
         <div className={styles.block}>
         <h3 className={styles.title}> <GoDotFill /> Ecommerce Webpage</h3>
         <div className={styles.content}>
          <p>
          Created and developed an interactive e-commerce shopping website, Employed HTML, CSS and Bootstrap to craft engaging and user-friendly interfaces.
          </p>
        </div>
         </div>
         <div className={styles.block}>
         <h3 className={styles.title}> <GoDotFill /> To-Do-List</h3>
         <div className={styles.content}>
          <p>
          I created a to-do list application using React that allows users to schedule their daily tasks and efficiently manage their schedules.
          </p>
        </div>
         </div>
    </section>
    
  );
}

export default Proj

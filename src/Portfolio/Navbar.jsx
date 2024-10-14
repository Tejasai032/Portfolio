import React , {useState} from 'react'
import styles from'./Navbar.module.css'
//import Img from '../assets/image-16.png'
import { getImageUrl } from './utils'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
        <a className={styles.title} href='/'>Portfolio</a>
        <div className={styles.menu}>
        <img className={styles.menuBtn} src={
          menuOpen 
          ? getImageUrl("assets/image-17.png")
          : getImageUrl("assets/image-16.png")
          }
           alt="Menu Button" onClick={() => setMenuOpen(!menuOpen)}>
           </img>
            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
            onClick={() => setMenuOpen(false)}>
                <li><a href='#about'>About</a></li>
                <li><a href='#experience'>Experience</a></li>
                <li><a href='#projects'>Projects</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>
        </div>
    </nav>
  );
}

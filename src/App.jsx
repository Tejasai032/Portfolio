import styles from './App.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Portfolio from "./Portfolio"
import Navbar from "./Portfolio/Navbar"
import Hero from './Portfolio/Hero';
import About from './Portfolio/About';
import Projects from './Portfolio/Projects';
import Proj from './Portfolio/Proj';
import { Contact } from './Portfolio/Contact';


function App() {
  
  return (
   <>
   <div className={styles.App}>
   <Navbar/>
   <Hero/>
   <About/>
   <Projects/>
   <Proj/>
   <Contact/>
   </div>
    
   </>
  )
}

export default App

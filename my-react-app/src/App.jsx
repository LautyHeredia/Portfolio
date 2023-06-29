// import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Components/Home/Home'
import styles from './app.module.css'
import NavBar from './Components/navBar/NavBar'
import AboutMe from './Components/AboutMe/AboutMe'
import Projects from './Components/Projects/Projects'
import ContactMe from './Components/Contact/ContactMe'

function App() {
  return (
    <>
      <div className={styles.pageDefaultDiv}>
       <Router>
          <NavBar />
         <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/AboutMe" element={<AboutMe />} />
             <Route path="/Projects" element={<Projects />} />
             <Route path="/ContactMe" element={<ContactMe />} />
         </Routes>
       </Router>
      </div>
    </>
  )
}

export default App

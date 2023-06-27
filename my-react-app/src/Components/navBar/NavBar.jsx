import { Link } from "react-router-dom";
import styles from './navBar.module.css'

export default function NavBar () {
    return (
      <div className={styles.divConteiner}>
        <Link to={'/'} className={styles.link1}>Home</Link>
        <Link to={'/AboutMe'} className={styles.link2}>About Me</Link>
        <Link to={'/Projects'} className={styles.link3}>Projects</Link>
        <Link to={'/ContactMe'} className={styles.link4}>Contact Me</Link>
      </div>
    )
}
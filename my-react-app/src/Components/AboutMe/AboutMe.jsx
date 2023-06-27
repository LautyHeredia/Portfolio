import styles from './aboutMe.module.css'
import image from '../../media/InagenParaHenryCard.jpg.jpeg'
// import {FaReact, FaRedux, FiDatabase, DiGit, FaGitHub, FaJs, FaJava, FaNodeJs} from 'react-icons/fa'
import { SiCss3, SiExpress, SiGit, SiGithub, SiHtml5, SiJavascript, SiMongodb, SiNodedotjs, SiPostgresql, SiReact, SiRedux, SiSequelize } from 'react-icons/si'

export default function AboutMe () {
    return (
        <div className={styles.conteinerAbout}>
          <div className={styles.conteinerRow}>
            <div className={styles.conteinerImage}>
                <img src={image} alt='MeImage' className={styles.image}/>
                <div className={styles.conteinerIcons}>
                    <span className={styles.icons}><SiMongodb className={styles.icon1}/></span>
                    <span className={styles.icons}><SiJavascript className={styles.icon2}/></span>
                    <span className={styles.icons}><SiGithub className={styles.icon3}/></span>
                    <span className={styles.icons}><SiSequelize className={styles.icon4}/></span>
                    <span className={styles.icons}><SiReact className={styles.icon5}/></span>
                    <span className={styles.icons}><SiRedux className={styles.icon6}/></span>
                    <span className={styles.icons}><SiNodedotjs className={styles.icon7}/></span>
                    <span className={styles.icons}><SiGit className={styles.icon8}/></span>
                    <span className={styles.icons}><SiPostgresql className={styles.icon9}/></span>
                    <span className={styles.icons}><SiExpress className={styles.icon10}/></span>
                    <span className={styles.icons}><SiCss3 className={styles.icon11}/></span>
                    <span className={styles.icons}><SiHtml5 className={styles.icon12}/></span>
                </div>
            </div>
            <div className={styles.conteinerP}>
                <p className={styles.p}>Hi, my name is Lautaro Heredia. 🫡</p>
                <p className={styles.p}>I&apos;am studing Engeneer of Computation. 📒</p>
                <p className={styles.p}>I&apos;am graduated in Henry with Full Stack Developer.</p>
                <p className={styles.p}>I&apos;am living in Argentina and I have 20 years old.</p>
                <p className={styles.p}>I&apos;am oriented in the Back-End, but I don&apos;t have a problem with Full Stack</p>
                <p className={styles.p}>My love in this life is programming and design web apps. 💻</p>
                <p className={styles.p}>My hobbies in the days is programming in times off, and play Volleyball 2hs sometimes.</p>
            </div>
            <div>
           </div>
          </div>
        </div>
    )
}
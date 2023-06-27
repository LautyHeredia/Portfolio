import styles from './home.module.css'
import imagen from '../../media/InagenParaHenryCard.jpg.jpeg'
import cv from '../../media/CV_2023042603142219_230527_141146.pdf'

export default function Home () {
   return (
      <div className={styles.divConteiner}>
        <p className={styles.p}>Hi 👋 I&apos;am Lautaro Heredia</p>
        <h2 className={styles.h21}>📒 Studing in University with &quot; Engeneer Of Computation &quot;</h2>
        <h3 className={styles.h22}>🎓 Graduated by Henry with &quot; Full Stack Developer &quot;</h3>
        <a href={cv} download={'YourCv.pdf'} className={styles.cvDownload}>Download CV</a>
        <div className={styles.ConteinerImg}>
         <img src={imagen} alt='MyImage' width={'30%'} height={'15%'} className={styles.img}/>
        </div>
       </div>
   ) 
}
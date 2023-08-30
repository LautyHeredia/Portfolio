import styles from './home.module.css'
import imagen from '../../media/InagenParaHenryCard.jpg.jpeg'
import cv from '../../media/CV_2023042603142219_230527_141146.pdf'

export default function Home () {
   return (
      <div className={styles.divConteiner}>
         <div className={styles.divConteiner3}>
                   {/* <div className={styles.ConteinerImg}> */}
                      <img src={imagen} alt='MyImage' width={'40%'} height={'25%'} className={styles.img}/>
                   {/* </div> */}
         </div>
         <div className={styles.divConteiner2}>
            <div className={styles.divConteinerH21}>
               <h2 className={styles.h21}>📒 Studing in University: &quot; Engeneer Of Computation &quot;</h2>
             </div>
              <div className={styles.divConteinerP}>
               <p className={styles.p}>Hi 👋 I&apos;am Lautaro Heredia</p>
                </div>
                 <div className={styles.divConteinerH22}>
                  <h3 className={styles.h22}>🎓 Graduated by Henry with &quot; Full Stack Developer &quot;</h3>
                   </div>
            <a href={cv} download={'YourCv.pdf'} className={styles.cvDownload}>Download CV</a>
         </div>
      </div>
   ) 
}
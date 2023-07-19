import styles from './projects.module.css'
import image1 from '../../media/Captura de pantalla 2023-06-01 204655.png'
import image2 from '../../media/Captura de pantalla 2023-06-01 204529.png'
// import {useState} from 'react'
// import { CSSTransition } from 'react-transition-group';

export default function Projects () {
//     const [showBox, setShowBox] = useState(true);

//   const handleAnimationEnd = () => {
//     setShowBox(false);
//   };
    return (
        <div className={styles.conteinerDiv}>
            {/* <CSSTransition
                in={showBox}
                timeout={2000}
                classNames={{
                  enter: styles.boxEnter,
                  enterActive: styles.boxEnterActive,
                  exit: styles.boxExit,
                  exitActive: styles.boxExitActive,
                }}
                onExited={() => setShowBox(true)}
                unmountOnExit
            >
                <div id='box' className={styles.conteinerTitle} onAnimationEnd={handleAnimationEnd}>
                   <h2 className={styles.h2Title}>My personal projects</h2>
                </div>
            </CSSTransition> */}
             <div className={styles.conteinerDivImg1}>
                <img src={image1} alt='Image1' className={styles.img1}/>
                <div className={styles.projectOne}>
                    <h2 className={styles.h2P1}>In this project, I have created an e-commerce that looks for information of the cards in an Api, shows the information of these and lets them add them to favorites .</h2>
                 {/* <div className={styles.projectOne2}> */}
                   <a href='https://rick-and-morty-lauty.netlify.app/' className={styles.h3P1}>Go</a>
                 {/* </div> */}
                </div>
             </div>
             <div className={styles.conteinerDivImg2}>
                <img src={image2} alt='Image2' className={styles.img2}/>
                <div className={styles.projectTwo}>
                    <h2 className={styles.h2P2}>In this project we have created an e-commerce that seeks to attract companies, institutions, organizations, people from all over the world to help people who need it most, we work together for an ONG in Peru.</h2>
                    {/* <div className={styles.projectTwo2}> */}
                        <a href='https://educacionsanitaria.org/' className={styles.h3P2}>Go</a>
                    {/* </div> */}
                </div>
             </div>
        </div>
    )
}
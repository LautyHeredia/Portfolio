import styles from './contactMe.module.css'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { SiGmail, SiInstagram } from 'react-icons/si';
import image from '../../media/InagenParaHenryCard.jpg.jpeg'

export default function ContactMe () {
    const phoneNumber = '+542915767762';
    const emailDirection = 'lautaro12heredia@gmail.com'

    const handleEmailClick = () => {
        const url1 = `mailto:${emailDirection}`
        window.location.href = url1;
    }

    const handleWhatsappClick = () => {
        const url = `https://wa.me/${phoneNumber}`;
        window.open(url, '_blank') 
    }

    return (
        <div className={styles.conteinerContact}>
            <div className={styles.contactMeConteiner}>
                <h2 className={styles.h2}>Contact Me</h2>
            </div>
            <div className={styles.containerImage}>
                <img src={image} alt='MeImage' className={styles.image}/>
            </div>
            <div className={styles.conteinerRedes}>
                <a href='https://www.instagram.com/lauti_heredia_edu/' className={styles.h3Icons}><SiInstagram className={styles.icon}/></a>
                <a href='https://www.linkedin.com/in/lautaro-eduardo-heredia-179109237/' className={styles.h3Icons}><FaLinkedin className={styles.icon1}/></a>
                <a href='https://github.com/LautyHeredia' className={styles.h3Icons}><FaGithub className={styles.icon2}/></a>
            <div className={styles.h3Numbers}>
                <a href='#' onClick={handleEmailClick} className={styles.h3Icons}><SiGmail className={styles.icon3}/></a>
                <a href='#' onClick={handleWhatsappClick} className={styles.h3Icons}><FaWhatsapp className={styles.icon4}/></a>
            </div>
            </div>
        </div>
    )
}
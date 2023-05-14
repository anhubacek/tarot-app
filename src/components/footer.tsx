

import styles from "../styles/footer.module.scss"
import linkedin from "../assets/linkedin.png"
import site from "../assets/sitio-web.png"

export default function Footer() {
   
    return(
        <footer className={styles.footer}>
            
            <span className={styles.creator}>Creado por Andrea Hubacek</span>
            <a href="https://www.linkedin.com/in/andreahubacek/" target="_blank"> <img className={styles.icon} src={linkedin.src} /></a>
            <a href="https://andreahubacek.vercel.app/" target="_blank"><img className={styles.icon} src={site.src}/></a>
       </footer>
    )
}
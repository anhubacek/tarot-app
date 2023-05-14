import Footer from "@/components/footer"
import styles from "../styles/home.module.scss"

export default function Home() {
  return (
    <>
   <main className={styles.container}>
    <h1 className={styles.title}>Tirada de Tarot</h1>

    <div>
      <p>Elige una temática</p>
      <div>
        <button className={styles.topic}>Amor</button>
        <button  className={styles.topic}>Salud</button>
        <button className={styles.topic}>Finanzas</button>
        <button className={styles.topic}>Espiritualidad</button>
        <button className={styles.topic}>Trabajo</button>
      </div>

      <p>Tipo de tirada</p>
      <div>
        <button className={styles.type}>Una sola carta</button>
        <button className={styles.type}>Tres cartas</button>
        {/* <button className={styles.type}>Tirada completa</button> */}
  
      </div>
    </div>
    <button className={styles.action}>Ir a la lectura</button>
      </main>
      <Footer></Footer>
      </>
  )
}

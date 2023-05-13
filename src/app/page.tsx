import styles from "../styles/home.module.scss"

export default function Home() {
  return (
   <main className={styles.container}>
    <h1 className={styles.title}>Tirada de Tarot</h1>

    <div>
      <p>Elige una temática</p>
      <div>
        <button>Amor</button>
        <button>Salud</button>
        <button>Finanzas</button>
        <button>Espiritualidad</button>
        <button>Trabajo</button>
      </div>

      <p>Tipo de tirada</p>
      <div>
        <button>Una sola carta</button>
        <button>Tres cartas</button>
        <button>Tirada completa</button>
  
      </div>
    </div>
    <button>Ir a la lectura</button>
   </main>
  )
}

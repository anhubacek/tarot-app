"use client"
import Footer from "@/components/footer"
import { useEffect, useState } from "react"
import styles from "../../../styles/lecture.module.scss"

export default function Lecture({ params }: { params: { topic: string, type: string } }) {
    const [cards, setCards] = useState<any[]>([])
    
    useEffect(() => {
        if (params && params.type){
            
            fetch(`https://tarot-api-es.vercel.app/api/v1/random?n=${params.type}`).then(response => response.json()).then((data)=> setCards(data.cards))
        }
    }, [])
    
    return (
        <>
        <main className={styles.container}>
        <h1 className={styles.title}>Lectura de Tarot</h1>
        <h2 className={styles.subtitle}>{params.topic.slice(0,1).toUpperCase() +params.topic.slice(1,20) }</h2>

            {cards && params.type !== "7" &&
                <div className={styles["cards-container"]}>
                    {cards?.map((card: { image: string}) => {
                        return (
                            <img className={params.type === "3" ? styles["top-card"] :styles["unique-card"]} src={card.image} />
                     )
                 } )}

        </div>}
        </main>
           <Footer></Footer>
           </>
      
    )
}
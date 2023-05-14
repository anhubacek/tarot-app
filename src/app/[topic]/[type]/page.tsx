"use client"
import Footer from "@/components/footer"
import { useEffect, useState } from "react"
import styles from "../../../styles/lecture.module.scss"
import Link from 'next/link';

export default function Lecture({ params }: { params: { topic: string, type: string } }) {
    const [cards, setCards] = useState<any[]>([])
    
    useEffect(() => {
        if (params && params.type){
            
            fetch(`https://tarot-api-es.vercel.app/api/v1/random?n=${params.type}`).then(response => response.json()).then((data)=> setCards(data.cards))
        }
    }, [])

    const titles : any = {
        1: "Pasado remoto",
        2: "Pasado reciente",
        3: "Influencias actuales",
        4: "Obstáculos actuales",
        5: "Situación actual",
        6: "Influencias futuras",
        7: "Resultado final"
    }
    let initializer : number = 0
    
    return (
        <>
        <main className={styles.container}>
        <h1 className={styles.title}>Lectura de Tarot</h1>
        <h2 className={styles.subtitle}>{params.topic.slice(0,1).toUpperCase() +params.topic.slice(1,20) }</h2>

                {params.type === "1" &&
                      cards?.map((card: { image: string, name: string}) => {
                    
                        return (
                            <div className={styles["big-card-container"]}>
                            <p  className={styles["card-title"]}>{card.name}</p>
                                <div className={styles["one-card-container"]}>
                                
                            <img className={styles["one-card"]} src={card.image} />
                                    <p className={styles["card-text"]}>{card[params.topic.toLowerCase()]}</p>
                                    
                                </div>
                            </div>
                            
                        )
                    })

                }
         
                   { params.type !== "1" && <div className={styles["cards-container"]}>
                        {cards?.map((card: { image: string }) => {
                            return (
                                <img className={styles["top-card"]}  src={card.image} />
                            )
                        })}

                    </div>}
                {params.type !== "1" &&
                    <div>
                        {cards?.map((card: { image: string, name: string}) => {
                    
                            return (
                                <div className={styles["big-card-container"]}>
                                    <div className={styles["card-container"]}>
                                    <p  className={styles["card-title"]}>{card.name}</p>
                                      { params.type === "3" && <img className={styles["div-card"]} src={card.image} />}
                                        <p className={styles["card-text"]}>{card[params.topic.toLowerCase()]}</p>
                                        
                                    </div>
                                </div>
                                
                            )
                        })}
                    </div>}

                    
                
                
                <Link href={"/"} className={styles.back}>Volver al inicio</Link>
        </main>
           <Footer></Footer>
           </>
      
    )
}
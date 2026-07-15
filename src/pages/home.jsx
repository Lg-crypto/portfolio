import Header from "../components/header"
import styles from "./home.module.css"


export default function Home(){
    return(
        <div className={styles.background}>
            <section id="Home" className={styles.container}>
                <Header></Header>
                <div className={styles.container}>
                    <div className={styles.content}>
                        <h3 className={styles.pretitle}>Portfolio</h3>
                        <h1 className={styles.title}>HL_DEV</h1>
                        <h2 className={styles.subtitle}>FULLSTACK DEVELOPER</h2>
                        <div className={styles.button}>Saiba mais</div>
                    </div>
                    <div className="medias">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </section>
        </div>
    )
}
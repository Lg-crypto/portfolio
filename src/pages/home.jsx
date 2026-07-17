import Header from "../components/header"
import styles from "./home.module.css"
import githubImage from "../assets/github.png"
import instagramImage from "../assets/instagram.png"


export default function Home(){
    return(
        <div className={styles.background}>
            <section id="home" className={styles.container}>
                <Header></Header>
                <div className={styles.container}>
                    <div className={styles.content}>
                        <h3 className={styles.pretitle}>Portfolio</h3>
                        <h1 className={styles.title}>HL_DEV</h1>
                        <h2 className={styles.subtitle}>FULLSTACK DEVELOPER</h2>
                        <div className={styles.button}>Saiba mais</div>
                    </div>
                    <div className={styles.medias}>
                        <img draggable="none" src={githubImage} className={styles.media} ></img>
                        <img draggable="none" src={instagramImage} className={styles.media}></img>
                        {/* <img src={} className={styles.media}></img> */}
                    </div>
                </div>
            </section>
        </div>
    )
}
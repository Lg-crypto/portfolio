import styles from "./about.module.css"
import imgProfile from "../assets/profile.png"
import Graph from "../components/graph"

export default function About (){
    return (
        <section id="about" className={styles.container}>
            <div className={styles.content}>
                <div className={styles.aboutRow}>
                    <img 
                        src={imgProfile}
                        className={styles.profileImage} 
                        alt="Imagem de Perfil" 
                    />
                    <div className={styles.profileDescription}>
                        <h2 className={styles.title}>Sobre mim</h2>
                        <p className={styles.text}>
                              Olá! Meu nome é Halejandro e sou uma pessoa curiosa, criativa e sempre disposta a aprender. Tenho grande interesse por desenvolvimento web, especialmente com React e TypeScript, e gosto de criar interfaces modernas, intuitivas e bem estruturadas. Além da tecnologia, busco constantemente ampliar meus conhecimentos em diferentes áreas, encarando desafios como oportunidades de crescimento e procurando sempre evoluir, tanto pessoal quanto profissionalmente.
                        </p>
                    </div>
                </div>
                <div className={styles.profileNskillsRow}>
                    <div className={styles.profile}>
                        <h3 className={styles.miniTitle}>Perfil</h3>

                        <h4 className={styles.profileInfoName}>Nome</h4>
                        <p className={styles.profileInfoValue}>Francisco Halejandro</p>

                        <h4 className={styles.profileInfoName}>Nascimento</h4>
                        <p className={styles.profileInfoValue}>1 de Dezembro 2008</p>

                        <h4 className={styles.profileInfoName}>Email</h4>
                        <p className={styles.profileInfoValue}>halejandroalvesoliveira10@gmail.com</p>
                    </div>

                    <div className={styles.skills}>
                        <h3 className={styles.miniTitle}>Habilidades</h3>
                        <Graph description={"Back-end"} value={85}></Graph>
                        <Graph description={"Front-end"} value={90}></Graph>
                        <Graph description={"Web"} value={93}></Graph>
                        <Graph description={"design"} value={87}></Graph>
                        <Graph description={"UI/UX"} value={78}></Graph>
                    </div>
                </div>
            </div>
        </section>
    )
}
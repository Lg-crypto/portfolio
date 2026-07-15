import styles from "./header.module.css"

export default function Header () {
    return(
        <header className={styles.headerContainer}>
            <div className={styles.logo}>HL</div>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About me</a></li>
                    <li><a href="#projects">Projects</a></li>
                </ul>
            </nav>
        </header>
    )
}
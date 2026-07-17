import styles from "./header.module.css"
import { useState } from "react"

export default function Header () {
    const [open, setOpen] = useState(false);


    return(
        <>
            <div className={styles.overlay} style={{display: open ? "none" : "flex"}}></div>
            <header className={styles.headerContainer}>
                <div className={styles.logo}>HL</div>
                <div className={styles.menuIcon} onClick={()=> setOpen( open ? false : true )}>
                    <span className={`${styles.menuIconLine} + ${open ? styles.open : styles.closed}`} ></span>
                </div>
                <nav className={ open ? styles.closed : styles.open}>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About me</a></li>
                        <li><a href="#projects">Projects</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
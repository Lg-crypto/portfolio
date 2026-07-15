import styles from "./graph.module.css";

export default function Graph ({description, value}){
    return (
        <div className={styles.container}>
            <p className={styles.description}>{description}</p>
            <div className={styles.line}>
                <div className={styles.valueLine} style={{width:value+"%"}}></div>
            </div>
        </div>
    );
}
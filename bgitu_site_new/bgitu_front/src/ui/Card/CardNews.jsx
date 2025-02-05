import styles from "./CardNews.module.css"

export default function CardNews({image, text, link}) {
    return (
        <a href={link} className={styles.card}>
            <img src={image} alt="Card-image" className={styles.cardImage} />
            <p className={styles.cardText}>{text}</p>
        </a>
    )
}
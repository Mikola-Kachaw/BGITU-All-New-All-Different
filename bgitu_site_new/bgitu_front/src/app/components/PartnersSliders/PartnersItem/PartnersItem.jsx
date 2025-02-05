import styles from "./PartnersItem.module.css"

export default function PartnersItem({ href, logoSrc, altText }) {
    return (
        <a href={href} className={styles.linkButton}>
            <img src={logoSrc} alt={altText} className={styles.logo} />
        </a>
    )
}
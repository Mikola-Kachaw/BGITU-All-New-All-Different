import styles from "./IconCard.module.css";

export default function IconCard({src}) {
    return <img className={styles.icon} src={src} />;
}
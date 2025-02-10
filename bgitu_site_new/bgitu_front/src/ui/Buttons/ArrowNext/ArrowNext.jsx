import styles from "./ArrowNext.module.css"

export default function ArrowNext({onClick}) {
    return (
        <>
            <button className={styles.arrowNext} onClick={onClick}></button>
        </>
    )
}
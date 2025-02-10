import styles from "./ArrowPrev.module.css"

export default function ArrowPrev({onClick}) {
    return (
        <>
            <button className={styles.arrowPrev} onClick={onClick}></button>
        </>
    )
}
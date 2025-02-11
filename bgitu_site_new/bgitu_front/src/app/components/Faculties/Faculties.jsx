import styles from "./Faculties.module.css"
import FacultiesItem from "./FacultiesItem/FacultiesItem";

export default function Faculties() {
    return (
        <div className={styles.faculties}>
            <h1 className={styles.title}>ВЫБЕРИ СВОЙ ФАКУЛЬТЕТ</h1>
            <div className={styles.flexBox}>
                <FacultiesItem bg="radial-gradient(at top left, #E877AE, #7C73F3)" href="/iee">
                    Инженерно-экономический институт
                </FacultiesItem>
                <FacultiesItem bg="radial-gradient(at bottom left, #98E05F, #0DE3AC)" href="/iflate">
                    Институт лесного комплекса, ландшафтной архитектуры, транспорта и экологии
                </FacultiesItem>
                <FacultiesItem bg="radial-gradient(at bottom right, #FACC22, #F83600)" href="/ci">
                    Строительный институт
                </FacultiesItem>
                <FacultiesItem bg="radial-gradient(at top right, #88D0CF, #2727D5)" href="/mc">
                    Много-профильный колледж
                </FacultiesItem>
            </div>
        </div>
    )
}
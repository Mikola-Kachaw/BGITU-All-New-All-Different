import styles from './Buildings.module.css'

export default function Buildings() {
    return (
        <>
            <h1 className={styles.title}>НАШИ ЗДАНИЯ</h1>
            <div className={styles.box}>
                <div className={styles.listBuildings}>
                    <div className={styles.building}>
                        <a href="/" className={styles.titleBuilding}>Первый корпус</a>
                        <p className={styles.adressBuilding}>проспект станке димитрова, д.3</p>
                    </div>
                    <div className={styles.building}>
                        <a href="/" className={styles.titleBuilding}>Первый корпус</a>
                        <p className={styles.adressBuilding}>проспект станке димитрова, д.3</p>
                    </div>
                    <div className={styles.building}>
                        <a href="/" className={styles.titleBuilding}>Первый корпус</a>
                        <p className={styles.adressBuilding}>проспект станке димитрова, д.3</p>
                    </div>
                    <div className={styles.building}>
                        <a href="/" className={styles.titleBuilding}>Первый корпус</a>
                        <p className={styles.adressBuilding}>проспект станке димитрова, д.3</p>
                    </div>
                    <div className={styles.building}>
                        <a href="/" className={styles.titleBuilding}>Первый корпус</a>
                        <p className={styles.adressBuilding}>проспект станке димитрова, д.3</p>
                    </div>
                    <div className={styles.building}>
                        <a href="/" className={styles.titleBuilding}>Первый корпус</a>
                        <p className={styles.adressBuilding}>проспект станке димитрова, д.3</p>
                    </div>
                </div>
                <div className={styles.map}>

                </div>
            </div>
        </>
    )
}
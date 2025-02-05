import styles from './BuildingItem.module.css'

export default function BuildingItem({title, address, onClick}) {
    return (
        <div className={styles.building}>
            <a href="#" className={styles.titleBuilding} onClick={(e) => { e.preventDefault(); onClick(); }}>
                {title.toUpperCase()}
            </a>
            <p className={styles.adressBuilding}>{address.toUpperCase()}</p>
        </div>
    )
}
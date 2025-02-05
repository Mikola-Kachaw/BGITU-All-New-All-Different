import { useState } from "react";
import BuildingItem from './BuildingItem/BuildingItem'
import styles from './Buildings.module.css'
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

const buildings = [
    { title: "Первый корпус", address: "проспект станке димитрова, д.3", coords: [53.249236, 34.342387] },
    { title: "второй корпус", address: "проспект Ленина, д.26", coords: [53.244284, 34.365752] },
    { title: "Профком бгиту", address: "проспект Ленина, д.26", coords: [53.244284, 34.365752] },
    { title: "Общежитие №1", address: "проспект Станке Димитрова, д.1а", coords: [53.249338, 34.343923] },
    { title: "Общежитие №4", address: "проспект Станке Димитрова, д.3Б", coords: [53.247425, 34.343734] },
    { title: "Общежитие №5", address: "проспект Станке Димитрова, д.1Б", coords: [53.247657, 34.34669] }
];

export default function Buildings() {
    const [selectedCoords, setSelectedCoords] = useState([53.252090, 34.371660]);

    return (
        <>
            <h1 className={styles.title}>НАШИ ЗДАНИЯ</h1>
            <div className={styles.box}>
                {/* Список зданий */}
                <div className={styles.listBuildings}>
                    {buildings.map((building, index) => (
                        <BuildingItem
                            key={index}
                            title={building.title}
                            address={building.address}
                            onClick={() => setSelectedCoords(building.coords)} // При клике меняем координаты
                        />
                    ))}
                </div>
                <div className={styles.mapContainer}>
                    <YMaps>
                        <Map state={{ center: selectedCoords, zoom: 16 }} className={styles.map}>
                            <Placemark geometry={selectedCoords} />
                        </Map>
                    </YMaps>
                </div>
            </div>
        </>
    )
}
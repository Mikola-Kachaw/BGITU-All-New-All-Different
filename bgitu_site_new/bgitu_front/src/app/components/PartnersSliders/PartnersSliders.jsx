import PartnersItem from "./PartnersItem/PartnersItem"
import Marquee from "react-marquee-slider";
import styles from "./PartnersSliders.module.css"

const partners = {
    PublicServices: {href: "https://gosuslugi.ru", logoSrc: "public/assets/IconSliders/Госуслуги.png"},
    MinistryOfEducation: {href: "https://minobrnauki.gov.ru", logoSrc: "public/assets/IconSliders/HighEducation.png"},
    AcademyOfArchitecture: {href: "https://raasn.ru", logoSrc: "public/assets/IconSliders/Paach.png"},
    YandexLyceum: {href: "https://lyceum.yandex.ru", logoSrc: "public/assets/IconSliders/ЯндексЛицей.png"},
    PalaceOfCreativity: {href: "https://dpgaidar.mskobr.ru", logoSrc: "public/assets/IconSliders/P5.png"},
};

const partnersTwo = {
    VSU: {href: "https://www.vsu.ru", logoSrc: "public/assets/IconSliders/ВГУ.png"},
    InYourOwnWords: {href: "https://своимисловами.рф", logoSrc: "public/assets/IconSliders/gramota.png"},
    AssociationOfUniversities: {href: "http://hea.vsu.ru", logoSrc: "public/assets/IconSliders/АссоциацияВузов.png"},
    CenterOfTourismAndExcursions: {href: "https://turizm-32.ru", logoSrc: "public/assets/IconSliders/Туризм.png"},
    MAPRYAL: {href: "https://ru.mapryal.org", logoSrc: "public/assets/IconSliders/Мапрял.png"},
};

export default function PartnersSliders() {
    return (
        <div className={styles.carouselContainer}>
            <div className={styles.marqueeWrapper}>
                <Marquee velocity={60} direction="rtl">
                    {Object.entries(partners).map(([name, { logoSrc, href }]) => (
                        <div key={name} className={styles.marqueeItem}>
                            <PartnersItem href={href} logoSrc={logoSrc} altText={name} />
                        </div>
                    ))}
                </Marquee>
            </div>

            <div className={styles.marqueeWrapper}>
                <Marquee velocity={60} direction="ltr">
                    {Object.entries(partnersTwo).map(([name, { logoSrc, href }]) => (
                        <div key={name} className={styles.marqueeItem}>
                            <PartnersItem href={href} logoSrc={logoSrc} altText={name} />
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    )
}
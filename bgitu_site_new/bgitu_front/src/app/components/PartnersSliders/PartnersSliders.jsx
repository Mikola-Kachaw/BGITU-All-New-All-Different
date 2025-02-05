import PartnersItem from "./PartnersItem/PartnersItem"
import Marquee from "react-marquee-slider";
import styles from "./PartnersSliders.module.css"

const partners = {
    PublicServices: {href: "https://gosuslugi.ru", logoSrc: "https://data.nalog.ru/cdn/image/734188/original.jpg"},
    MinistryOfEducation: {href: "https://minobrnauki.gov.ru", logoSrc: "https://avatars.mds.yandex.net/i?id=12ae6296e31b85a0c51e29cd84356f206bbf7a53-4549902-images-thumbs&n=13"},
    AcademyOfArchitecture: {href: "https://raasn.ru", logoSrc: "https://ice.spbstu.ru/userfiles/files/30087677_2060558660856657_3318884979542327296_n.jpg"},
    YandexLyceum: {href: "https://lyceum.yandex.ru", logoSrc: "https://www.mirea.ru/upload/medialibrary/b8d/pnqv9dubcrn1t4bdbrg2s15l8zi0n851/lyceum_logo_b64692c23b-_1_.png"},
    PalaceOfCreativity: {href: "https://dpgaidar.mskobr.ru", logoSrc: "https://dpgaidar.mskobr.ru/files/attach_files/www.rvb.ru.png"},
};

const partnersTwo = {
    VSU: {href: "https://www.vsu.ru", logoSrc: "https://avatars.mds.yandex.net/i?id=1ab6b38730288c8d59451f35e29a12a9_l-9634884-images-thumbs&n=13"},
    InYourOwnWords: {href: "https://своимисловами.рф", logoSrc: "https://avatars.mds.yandex.net/i?id=72f2a26cd0d8bafa1edf40d65380fb558895669b-9303200-images-thumbs&n=13"},
    AssociationOfUniversities: {href: "http://hea.vsu.ru", logoSrc: "https://avatars.mds.yandex.net/i?id=0a153b4cad8cb476534ecf789848c705_l-4599887-images-thumbs&n=13"},
    CenterOfTourismAndExcursions: {href: "https://turizm-32.ru", logoSrc: "https://dobro.ru/_next/image?url=https%3A%2F%2Fstorage.yandexcloud.net%2Fdobro-static%2Fprod%2Fimages%2F201f77b8-caf5-588c-c95b-5a97845ec3fe.png&w=640&q=75"},
    MAPRYAL: {href: "https://ru.mapryal.org", logoSrc: "https://russkiymir.ru/upload/medialibrary/865/865f0ad01a913d57354e890a548d2421.jpg"},
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
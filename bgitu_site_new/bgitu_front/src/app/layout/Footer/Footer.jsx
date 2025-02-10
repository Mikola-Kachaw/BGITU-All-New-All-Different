import styles from "./Footer.module.css"
import logo from "/assets/Logo_BGITU.png";

const links = [
    { name: "Справочник контактов подразделений", url: "/" },
    { name: "Сведения о доходах", url: "/about" },
    { name: "Карта сайта", url: "/services" },
    { name: "Часто задаваемые вопросы", url: "/contact" },
    { name: "Наши контакты", url: "/news" },
    { name: "Анкетирование в рамках процедуры внутренней оценки качества образования", url: "/faq" },
    { name: "Горячие линии", url: "/support" },
];

const texts = [
    "Время работы: 8:30-18:00",
    "Адрес: г. Брянск, проспект Станке Димитрова, 3",
    "E-mail: mail@bgitu.ru",
    "Телефон приемной ректора: +7 (4832) 74-60-08",
    "Телефон приемной комиссии: +7 (4832) 64-99-12",
    "Разработка сайта: ООО «Пролекс-групп»",
];

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.logoContainer}>
                <img src={logo} alt="БГИТУ" className={styles.logoImg} />
                <div className={styles.textContainer}>
                    <span>БРЯНСКИЙ ГОСУДАРСТВЕННЫЙ</span>
                    <span>ИНЖЕНЕРНО-ТЕХНОЛОГИЧЕСКИЙ</span>
                    <span>УНИВЕРСИТЕТ</span>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.column}>
                    {links.map((link, index) => (
                        <a key={index} href={link.url}>
                            {link.name}
                        </a>
                    ))}
                </div>
                <div className={styles.column2}>
                    {texts.map((text, index) => (
                        <div key={index}>{text}</div>
                    ))}
                </div>
            </div>
            <div className={styles.copyright}>
                Copyright © 2025 Все права защищены.
            </div>
        </footer>
    )
}
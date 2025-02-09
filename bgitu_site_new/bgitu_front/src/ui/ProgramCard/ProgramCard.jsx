import ButtonCard from "./ButtonCard/ButtonCard";
import IconCard from "./IconCard/IconCard";
import styles from "./ProgramCard.module.css";

export default function ProgramCard({smallText, title, content, bgButton, hrefButton, icon}) {
    return (
        <div className={styles.card}>
            <div className={styles.main}>
                <p className={styles.smallText}>{smallText}</p>
                <p className={styles.title}>{title}</p>
                <div className={styles.content}>
                    {content.map((line, index) => (
                        <p key={index} className={styles.textLine}>
                            {line}
                        </p>
                    ))}
                </div>
            </div>
            <div className={styles.footer}>
                <div className={styles.buttons}>
                    <ButtonCard bg={bgButton} activeBg="" href={hrefButton}>Поступить</ButtonCard>
                    <ButtonCard href="/">Подробнее</ButtonCard>
                </div>
                <IconCard src={icon} />
            </div>
        </div>
    )
}
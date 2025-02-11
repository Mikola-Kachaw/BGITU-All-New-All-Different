import ProgramCard from "../../../../ui/ProgramCard/ProgramCard.jsx";
import classes from "./mainFaculty.module.css";

export const MainFaculty = ({colorScheme, facultyData}) => {
    return (
        <main className={classes.MainFaculty} style={{backgroundImage: colorScheme.backgroundImage, color: colorScheme.color}}>
            <div className={classes.centerText}>
                <h1 className={classes.mainTitle}>
                    {facultyData.name}
                </h1>
                <p className={classes.mainDescription}>
                    {facultyData.shortDescription}
                </p>
            </div>
            <div className={classes.educationalPrograms}>
                <h2 className={classes.sectionTitle}>
                    Образовательные программы
                </h2>
                <div className={classes.educationalProgramsList}>
                    {facultyData.educationalPrograms.map((program, index) => (
                        <ProgramCard
                            key={index}
                            smallText={program.levelEducation}
                            title={program.name}
                            content={[`${program.form} – ${program.duration}`]}
                            bgButton={colorScheme.buttonStyle.backgroundColor}
                            hrefButton="/"
                            icon={program.icon}
                        />
                    ))}
                </div>
            </div>
            <div className={classes.mainBottom}>
                <h2 className={`${classes.sectionTitle} ${classes.centerText}`}>
                    ПРИЕМНАЯ КОМИССИЯ
                </h2>
                <div className={classes.mainBottomContent}>
                    <p className={classes.mainBottomText}>
                        <strong>
                            Режим работы:
                        </strong>
                        <span>
                            Понедельник - Пятница; 9:00-17:00
                        </span>
                    </p>
                    <p className={classes.mainBottomText}>
                        <strong>
                            Адрес:
                        </strong>
                        <span>
                            {facultyData.contacts.address}
                        </span>
                    </p>
                    <p className={classes.mainBottomText}>
                        <strong>
                            Телефон:
                        </strong>
                        <span>
                            {facultyData.contacts.phone}
                        </span>
                    </p>
                    <p className={classes.mainBottomText}>
                        <strong>
                            Email:
                        </strong>
                        <span>
                            {facultyData.contacts.email}
                        </span>
                    </p>
                </div>
            </div>
        </main>
    )
}
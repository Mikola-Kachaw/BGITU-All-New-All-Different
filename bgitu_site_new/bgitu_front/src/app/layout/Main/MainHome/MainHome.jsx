import classes from "./MainHome.module.css"
import {News} from "../../../components/News/News.jsx";
import Buildings from "../../../components/Buildings/Buildings.jsx";
import PartnersSliders from "../../../components/PartnersSliders/PartnersSliders.jsx";
import {VKWidget} from "../../../components/UniversityLife/UniversityLife.jsx";

export const MainHome = () => {
    return (
        <main>
            <section className={`${classes.container} ${classes.mainMessage}`}>
                <h1>
                    ПОСТУПАЙ ПРАВИЛЬНО–
                    ПОСТУПАЙ В <span className={classes.textBlue}>БГИТУ</span>
                </h1>
            </section>
            <News/>
            <Buildings/>
            <VKWidget/>
            <PartnersSliders/>
        </main>
    )
}

import classes from "./Main.module.css"
import {News} from "../../components/News/News.jsx";
import {HorizontalScroll} from "../../components/HorizontalScroll/HorizontalScroll.jsx";

export const Main = () => {
    return (
        <main>
            <section className={`${classes.container} ${classes.mainMessage}`}>
                <h1>
                    ПОСТУПАЙ ПРАВИЛЬНО–
                    ПОСТУПАЙ В <span className={classes.textBlue}>БГИТУ</span>
                </h1>
            </section>
            <News/>
        </main>
    )
}

import ArrowNext from "../../../ui/Button/ArrowNext";
import ArrowPrev from "../../../ui/Button/ArrowPrev";
import Buildings from "../../../ui/Button/Buildings";
import Button from "../../../ui/Button/Button";
import MenuButton from "../../../ui/Button/MenuButton";

export const TestPage = () => {
    return (
        <>
            <>
                <h1>
                    Test Page
                </h1>
                <a href="/">Назад</a>
                <div></div>
                <Button url="/test">абитуриентам</Button>
                <Button url="/test">школьникам</Button>
                <Button url="/test">студентам</Button>
                <Button url="/test">выпускникам</Button>
                <Button url="/test">аспирантам</Button>
                <Button url="/test">наука</Button>
                <Button url="/test">университет</Button>
                <Button bg="#1968AB" cl="white" bc="#1968AB" url="/test">войти в эос</Button>
                <div></div>
                <MenuButton />
                <div></div>
                <ArrowNext />
                <ArrowPrev />
            </>
            <Buildings />
        </>
    )
}
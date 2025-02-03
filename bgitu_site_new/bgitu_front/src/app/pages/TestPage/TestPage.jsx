import ArrowNext from "../../../ui/Buttons/ArrowNext/ArrowNext";
import ArrowPrev from "../../../ui/Buttons/ArrowPrev/ArrowPrev";
import Buildings from "../../components/Buildings/Buildings";
import LinkStyleButton from "../../../ui/Buttons/LinkStyleButton/LinkStyleButton";
import MenuButton from "../../../ui/Buttons/MenuButton/MenuButton";

export const TestPage = () => {
    return (
        <>
            <>
                <h1>
                    Test Page
                </h1>
                <a href="/">Назад</a>
                <div></div>
                <LinkStyleButton url="/test">абитуриентам</LinkStyleButton>
                <LinkStyleButton url="/test">школьникам</LinkStyleButton>
                <LinkStyleButton url="/test">студентам</LinkStyleButton>
                <LinkStyleButton url="/test">выпускникам</LinkStyleButton>
                <LinkStyleButton url="/test">аспирантам</LinkStyleButton>
                <LinkStyleButton url="/test">наука</LinkStyleButton>
                <LinkStyleButton url="/test">университет</LinkStyleButton>
                <LinkStyleButton bg="#1968AB" cl="white" bc="#1968AB" url="/test">войти в эос</LinkStyleButton>
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
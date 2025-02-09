import ArrowNext from "../../../ui/Buttons/ArrowNext/ArrowNext";
import ArrowPrev from "../../../ui/Buttons/ArrowPrev/ArrowPrev";
import Buildings from "../../components/Buildings/Buildings";
import LinkStyleButton from "../../../ui/Buttons/LinkStyleButton/LinkStyleButton";
import MenuButton from "../../../ui/Buttons/MenuButton/MenuButton";
import CardNews from "../../../ui/Card/CardNews";
import UniversityLife from "../../components/UniversityLife/UniversityLife";
import PartnersSliders from "../../components/PartnersSliders/PartnersSliders";
import Footer from "../../layout/Footer/Footer";
import Faculties from "../../components/Faculties/Faculties";
import ProgramCard from "../../../ui/ProgramCard/ProgramCard";

const flex = {
    padding: "134px 134px 0",
    display: "flex",
    justifyContent: "center",
    gap: "60px"
}

export const TestPage = () => {
    return (
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
            <div style={flex}>
                <CardNews 
                    image="https://jcement.ru/upload/iblock/ea5/BGITU-logo.png" 
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis." 
                    link="https://example.com" 
                />
                <CardNews 
                    image="https://i3.photo.2gis.com/images/geo/62/8725724292229816_2ea9.jpg" 
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis." 
                    link="https://example.com" 
                />
                <CardNews 
                    image="https://avatars.mds.yandex.net/i?id=f93e2410171440c81c60377a0edcf40b_l-5273789-images-thumbs&n=13" 
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis." 
                    link="https://example.com" 
                />
            </div>
            <Buildings />
            <UniversityLife />
            <Faculties />
            <div style={{ padding: "100px 30px", display: "flex", flexWrap: "wrap", gap: "30px", backgroundColor: "#E877AE"}}>
                <ProgramCard
                    smallText="Бакалавриат"
                    title="Информатика и вычислительная техника"
                    content={["Очно – 4 года"]}
                    bgButton="#7C73F3"
                    hrefButton="#"
                    icon="public/assets/IconProgram/logo_IT.png"
                />
                <ProgramCard
                    smallText="Бакалавриат"
                    title="Производство и применение строительных материалов, изделий и конструкций"
                    content={["Очно – 4 года", "Заочно – 5 лет", "Очно-заочно – 5 лет"]}
                    bgButton="#FF3900"
                    hrefButton="#"
                    icon="public/assets/IconProgram/helmet.png"
                />
                <ProgramCard
                    smallText="Магистратура"
                    title="Лесное дело"
                    content={["Очно – 2 года", "Заочно – 2.3 лет"]}
                    bgButton="#0EE3AC"
                    hrefButton="#"
                    icon="public/assets/IconProgram/leaf.png"
                />
                <ProgramCard
                    smallText="Среднее профессиональное образование"
                    title="Техническое обслуживание и ремонт двигателей, систем и агрегатов автомобилей"
                    content={["Очно:", "После 11 классов – 2.10 лет", "После 9 классов - 3.10 лет"]}
                    bgButton="#2728D5"
                    hrefButton="#"
                    icon="public/assets/IconProgram/cogwheel.png"
                />
            </div>
            <PartnersSliders />
            <Footer />
        </>
    )
}
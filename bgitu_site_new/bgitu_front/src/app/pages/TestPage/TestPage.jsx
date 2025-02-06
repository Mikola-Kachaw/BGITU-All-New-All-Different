import ArrowNext from "../../../ui/Buttons/ArrowNext/ArrowNext";
import ArrowPrev from "../../../ui/Buttons/ArrowPrev/ArrowPrev";
import Buildings from "../../components/Buildings/Buildings";
import LinkStyleButton from "../../../ui/Buttons/LinkStyleButton/LinkStyleButton";
import MenuButton from "../../../ui/Buttons/MenuButton/MenuButton";
import CardNews from "../../../ui/Card/CardNews";
import UniversityLife from "../../components/UniversityLife/UniversityLife";
import PartnersSliders from "../../components/PartnersSliders/PartnersSliders";
import Footer from "../../layout/Footer/Footer";

const flex = {
    padding: "134px 134px 0",
    display: "flex",
    justifyContent: "center",
    gap: "60px"
}

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
            <PartnersSliders />
            <Footer />
        </>
    )
}
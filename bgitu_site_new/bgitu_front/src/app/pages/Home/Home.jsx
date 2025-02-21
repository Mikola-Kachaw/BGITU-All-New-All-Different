import {Header} from "../../layout/Header/Header.jsx";
import {useEffect} from "react";
import {MainHome} from "../../layout/Main/MainHome/MainHome.jsx";
import Footer from "../../layout/Footer/Footer.jsx";

export const Home = ({titlePage = "БГИТУ"}) => {
    useEffect(() => {
        document.title = titlePage
    }, [titlePage]);


    return (
        <>
            <Header/>
            <MainHome/>
            <Footer/>
        </>
    )
}

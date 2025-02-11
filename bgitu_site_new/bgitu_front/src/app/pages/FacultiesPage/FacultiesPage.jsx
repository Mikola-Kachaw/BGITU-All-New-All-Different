import {useEffect} from "react";
import {Header} from "../../layout/Header/Header.jsx";
import Footer from "../../layout/Footer/Footer.jsx";
import {MainFaculties} from "../../layout/Main/MainFaculties/MainFaculties.jsx";

export const FacultiesPage = ({titlePage = "БГИТУ"}) => {
    useEffect(() => {
        document.title = titlePage
    }, [titlePage]);

    return (
        <>
            <Header/>
            <MainFaculties/>
            <Footer/>
        </>
    )
}

import {useEffect} from "react";
import {Header} from "../../layout/Header/Header.jsx";
import Footer from "../../layout/Footer/Footer.jsx";
import {MainFaculty} from "../../layout/Main/MainFaculty/MainFaculty.jsx";

export const Faculty = ({titlePage = "БГИТУ", colorScheme, facultyData}) => {

    useEffect(() => {
        document.title = titlePage;
    }, [titlePage]);

    return (
        <>
            <Header/>
            <MainFaculty colorScheme={colorScheme} facultyData={facultyData}/>
            <Footer/>
        </>
    )
}
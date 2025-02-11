import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Home} from "../../app/pages/Home/Home.jsx";
import {TestPage} from "../../app/pages/TestPage/TestPage.jsx";
import {FacultiesPage} from "../../app/pages/FacultiesPage/FacultiesPage.jsx";
import {Faculty} from "../../app/pages/Faculty/Faculty.jsx";
import { tempDataFaculty } from "../../tempData/tempData.js"; // Импортируем данные

export const PublicRouter = () => {
    // Функция для поиска данных по имени факультета
    const getFacultyData = (name) => {
        return tempDataFaculty.find(faculty => faculty.name === name);
    };

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home titlePage="Главная"/>} />
                    <Route path="/faculties" element={<FacultiesPage titlePage="Факультеты"/>}/>
                    <Route
                        path="/iee"
                        element={
                            <Faculty
                                titlePage="Инженерно-экономический институт"
                                colorScheme={{
                                    backgroundImage: "linear-gradient(#7C73F3, #E877AE)",
                                    color: "#fff",
                                    buttonStyle: {
                                        backgroundColor: "#7C73F3",
                                        color: "#fff",
                                        hover: {
                                            backgroundColor: "#E877AE",
                                        }
                                    }
                                }}
                                facultyData={getFacultyData("Инженерно-экономический институт")} // Передаем данные
                            />
                        }
                    />
                    <Route
                        path="/ci"
                        element={
                            <Faculty
                                titlePage="строительный институт"
                                colorScheme={{
                                    backgroundImage: "linear-gradient(#F83600, #FACC22)",
                                    color: "#fff",
                                    buttonStyle: {
                                        backgroundColor: "#FF3900",
                                        color: "#fff",
                                        hover: {
                                            backgroundColor: "#FACB22",
                                        }
                                    }
                                }}
                                facultyData={getFacultyData("строительный институт")} // Передаем данные
                            />
                        }
                    />
                    <Route
                        path="/iflate"
                        element={
                            <Faculty
                                titlePage="институт лесного комплекса, ландшафтной архитектуры, транспорта и экологии"
                                colorScheme={{
                                    backgroundImage: "linear-gradient(#0DE3AC, #98E05F)",
                                    color: "#fff",
                                    buttonStyle: {
                                        backgroundColor: "#0EE3AC",
                                        color: "#fff",
                                        hover: {
                                            backgroundColor: "#97E060",
                                        }
                                    }
                                }}
                                facultyData={getFacultyData("институт лесного комплекса, ландшафтной архитектуры, транспорта и экологии")} // Передаем данные
                            />
                        }
                    />
                    <Route
                        path="/mc"
                        element={
                            <Faculty
                                titlePage="Многопрофильный колледж"
                                colorScheme={{
                                    backgroundImage: "linear-gradient(#2727D5, #88D0CF)",
                                    color: "#fff",
                                    buttonStyle: {
                                        backgroundColor: "#2728D5",
                                        color: "#fff",
                                        hover: {
                                            backgroundColor: "#88D0CF",
                                        }
                                    }
                                }}
                                facultyData={getFacultyData("Многопрофильный колледж")} // Передаем данные
                            />
                        }
                    />
                    <Route path="/test" element={<TestPage/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
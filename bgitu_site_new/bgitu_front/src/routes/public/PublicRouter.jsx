import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Home} from "../../app/pages/Home/Home.jsx";
import {TestPage} from "../../app/pages/TestPage/TestPage.jsx";

export const PublicRouter = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home titlePage="Главная"/>} />
                    <Route path="/test" element={<TestPage/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

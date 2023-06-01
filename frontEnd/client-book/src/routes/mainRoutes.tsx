import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/homePage";
import { MainPage } from "../pages/mainPage";

export function MainRoutes () {
    return (
        <Routes>
            <Route path="/" element={ <HomePage/> } />
            <Route path="/main" element={ <MainPage/> } />
        </Routes>
    )
}
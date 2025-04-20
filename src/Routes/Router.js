import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/Home/Home";



export const Router = (props) => (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>} />

    </Routes>
</BrowserRouter>
);
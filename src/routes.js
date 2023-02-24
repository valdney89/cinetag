import Home from "pages/Home";
import Favoritos from "pages/Favoritos";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Player from "pages/Player";
import PageDefault from "pages/PageDefault";

export default function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageDefault />}>
                    <Route index element={<Home />}></Route>
                    <Route path="favoritos" element={<Favoritos />}></Route>
                    <Route path="video/:id" element={<Player />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
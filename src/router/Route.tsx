import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../views/home/Home";
import Nosotros from "../views/Nosotros/Nosotros";
import Contacto from "../views/Contacto/Contacto";
import Blog from "../views/Blog/Blog";
import TerminosYCondiciones from "../views/Privacidad/TerminosYCondiciones";
import Privacidad from "../views/Privacidad/Privacidad";
import MainLayout from "../layouts/MainLayout";

export default function AppRouter() {
    return (
    <BrowserRouter>
        <Routes>
            <Route element={<MainLayout/>}>
                <Route path="/" element={<Home />} />
                <Route path="/nosotros" element={<Nosotros />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/Terms" element={<TerminosYCondiciones/>}/>
                <Route path="/Privacy" element={<Privacidad/>}/>
                </Route>
        </Routes>
    </BrowserRouter>
  );
}
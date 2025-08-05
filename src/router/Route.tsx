import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../views/home/Home";
import Nosotros from "../views/Nosotros/Nosotros";
import Contacto from "../views/Contacto/Contacto";
import Blog from "../views/Blog/Blog";
import TerminosYCondiciones from "../views/Privacidad/TerminosYCondiciones";
import Privacidad from "../views/Privacidad/Privacidad";
import MainLayout from "../layouts/MainLayout";
import Servicios from "../views/Servicios/Servicios";
import Blog1 from "@/components/Blogs/Blog1";
import Blog2 from "@/components/Blogs/Blog2";

export default function AppRouter() {
    return (
    <BrowserRouter>
        <Routes>
            <Route element={<MainLayout/>}>
                <Route path="/" element={<Home />} />
                <Route path="/nosotros" element={<Nosotros />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/servicios" element={<Servicios/>}/>
                <Route path="/Terms" element={<TerminosYCondiciones/>}/>
                <Route path="/Privacy" element={<Privacidad/>}/>
                <Route path="/blog/entrada-1" element={<Blog1/>}/>
                <Route path="/blog/entrada-2" element={<Blog2/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  );
}
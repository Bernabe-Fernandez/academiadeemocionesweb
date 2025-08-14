import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../views/home/Home";
import Nosotros from "../views/Nosotros/Nosotros";
import Contacto from "../views/Contacto/Contacto";
import Blog from "../views/Blog/Blog";
import TerminosYCondiciones from "../views/Privacidad/TerminosYCondiciones";
import Privacidad from "../views/Privacidad/Privacidad";
import MainLayout from "../layouts/MainLayout";
import Servicios from "../views/Servicios/Servicios";
import BlogPost from "@/components/Blogs/BlogPost";
import ScrollToTop from "@/helpers/ScrollToTop";

export default function AppRouter() {
    return (
    <BrowserRouter>
        <ScrollToTop/>
        <Routes>
            <Route element={<MainLayout/>}>
                <Route path="/" element={<Home />} />
                <Route path="/nosotros" element={<Nosotros />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/servicios" element={<Servicios/>}/>
                <Route path="/Terms" element={<TerminosYCondiciones/>}/>
                <Route path="/Privacy" element={<Privacidad/>}/>
                <Route path="/blog/:slug" element={<BlogPost/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  );
}
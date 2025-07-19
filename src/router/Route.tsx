import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../views/home/Home";
import Nosotros from "../views/Nosotros/Nosotros";
import Contacto from "../views/Contacto/Contacto";
import Blog from "../views/Blog/Blog";

export default function AppRouter() {
    return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}
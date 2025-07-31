import Portada from "@/components/Home/Portada";
import useDocumentTitle from "../../Hooks/useDocumentTitle"
import Conocenos from "@/components/Home/Conocenos";
import Servicios from "@/components/Home/Servicios";
import CursosDestacados from "@/components/Home/CursosDestacados";
import BlogDestacados from "@/components/Home/BlogDestacados";
import EquipoDestacado from "@/components/Home/EquipoDestacado";
import Contactanos from "@/components/Home/Contactanos";



export default function Home() {
    useDocumentTitle('Inicio');
  return (
    <>      
      
      <Portada/>
      <Conocenos/>
      <Servicios/>
      <CursosDestacados/>
      <BlogDestacados/>
      <EquipoDestacado/>
      <Contactanos/>
    </>
  )
}

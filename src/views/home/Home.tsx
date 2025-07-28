import Portada from "@/components/Home/Portada";
import useDocumentTitle from "../../Hooks/useDocumentTitle"
import Conocenos from "@/components/Home/Conocenos";
import Servicios from "@/components/Home/Servicios";
import CursosDestacados from "@/components/Home/CursosDestacados";



export default function Home() {
    useDocumentTitle('Inicio');
  return (
    <>      
      
      <Portada/>
      <Conocenos/>
      <Servicios/>
      <CursosDestacados/>
    </>
  )
}

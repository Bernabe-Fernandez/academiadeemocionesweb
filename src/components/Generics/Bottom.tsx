import { Link } from "react-router-dom"


type BottomProps = {
    color: string,
    enlace: string,
    texto: string,
    color_hover: string,
}

export default function Bottom({color, enlace, texto, color_hover} : BottomProps) {
  return (
    <Link to={`/${enlace}`} className={`p-3 my-2 mx-12 rounded-xl ${color} text-azulPrimario-800 font-bold hover:text-gray-100 hover:${color_hover}`}>
        {texto}
    </Link>
  )
}

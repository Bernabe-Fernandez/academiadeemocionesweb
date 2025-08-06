import { Link } from "react-router-dom"


type BottomProps = {
    color: string,
    enlace: string,
    texto: string,
    color_hover: string,
}

export default function Bottom({color, enlace, texto, color_hover} : BottomProps) {
  return (
    <Link to={`/${enlace}`} className={`p-2 mt-2 mb-5 mx-6 text-sm lg:text-base lg:p-3 lg:my-2 lg:mx-12 rounded-xl ${color} text-azulPrimario-800 font-bold hover:text-gray-100 hover:${color_hover}`}>
        {texto}
    </Link>
  )
}

import { toast } from "react-toastify";

export const mostrarNotificacion = (mensaje: string, tipo: string) => {
  return toast[tipo as "success" | "error" | "info" | "warning"](mensaje, {
    position: "top-right",
    autoClose: 3000,
  });
};

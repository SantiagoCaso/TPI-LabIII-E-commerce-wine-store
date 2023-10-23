import React from "react";
import { toast } from "react-toastify";

const succesedMessage = (message) => {
  toast.success(message, {
    position: "top-right", // Posición de la notificación
    autoClose: 3000, // Duración en milisegundos antes de que se cierre automáticamente (opcional)
    hideProgressBar: false, // Mostrar barra de progreso (opcional)
    closeOnClick: true, // Cerrar la notificación al hacer clic (opcional)
    pauseOnHover: true, // Pausar la notificación al pasar el mouse por encima (opcional)
  });
};
const warnMessage = (message) => {
  toast.warn(message, {
    position: "top-right", // Posición de la notificación
    autoClose: 3000, // Duración en milisegundos antes de que se cierre automáticamente (opcional)
    hideProgressBar: false, // Mostrar barra de progreso (opcional)
    closeOnClick: true, // Cerrar la notificación al hacer clic (opcional)
    pauseOnHover: true, // Pausar la notificación al pasar el mouse por encima (opcional)
  });
};
const errorMessage = (message) =>
  toast.error(message, {
    position: "top-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });

export { succesedMessage };
export { warnMessage };
export { errorMessage };

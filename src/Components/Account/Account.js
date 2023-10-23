import React, { useState, useContext } from "react";
import { ThemeContext } from "../Theme/useContext";
import firebase from "firebase/app";
import {
  getAuth,
  sendEmailVerification,
  sendPasswordResetEmail,
  updateEmail,
  updateProfile,
} from "firebase/auth";
import { Button, ToastContainer } from "react-bootstrap";
import "./Account.css";
import { toast } from "react-toastify";

const Account = () => {
  const { theme } = useContext(ThemeContext);
  const [name, setName] = useState("");
  const [newEmail, setEmail] = useState("");
  const [inputData, setInputData] = useState("hide");
  const auth = getAuth();
  const user = auth.currentUser;

  const nameHandler = async () => {
    try {
      await updateProfile(user, {
        displayName: name,
      });
      succesedMessage();
      console.log("Nombre de usuario actualizado con éxito");
    } catch (error) {
      console.error("Error al actualizar el nombre de usuario:", error);
    }
  };

  const emailHandler = async () => {
    try {
      await sendEmailVerification(user);
      console.log("new email: " + user.email);
    } catch (error) {
      console.error(error);
    }
  };

  const passwordHandler = async () => {
    try {
      await sendPasswordResetEmail(user, user.email);
      console.log("Correo de restablecimiento de contraseña enviado");
    } catch (error) {
      console.log(error);
      console.log("No se pudo enviar el mail");
    }
  };

  const handleShow = () => setInputData(inputData === "show" ? "hide" : "show");

  const succesedMessage = () => {
    toast.success("Updated name", {
      position: "top-right", // Posición de la notificación
      autoClose: 3000, // Duración en milisegundos antes de que se cierre automáticamente (opcional)
      hideProgressBar: false, // Mostrar barra de progreso (opcional)
      closeOnClick: true, // Cerrar la notificación al hacer clic (opcional)
      pauseOnHover: true, // Pausar la notificación al pasar el mouse por encima (opcional)
    });
  };

  return (
    <>
      {user ? (
        <div className={theme}>
          <h1>User Data</h1>
          <div id="user-name">
            <h3>Name: {user.displayName === null ? name : user.displayName}</h3>
            {user.displayName === null ? (
              <>
                <p>Set user name: </p>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <Button onClick={nameHandler}>Set name</Button>
              </>
            ) : (
              <div className="div-user-flex">
                <div className={inputData + "-set-new-data"}>
                  <p>Set new name: </p>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <Button onClick={nameHandler}>Set new name</Button>
                </div>
              </div>
            )}
          </div>
          <div id="user-email">
            <h3>Email: {user.email}</h3>
          </div>
          <div className="div-user-flex">
            <h3>Id:</h3> <p>{user.uid}</p>
          </div>
          <div id="user-password">
            <h3>Password: ********</h3>
            <div className={inputData + "-set-new-data"}>
              <p>Solicitar restablecer contraseña</p>
              <Button onClick={passwordHandler}>New Password</Button>
            </div>
          </div>
          <Button onClick={handleShow}>Change user data</Button>
          <br></br>
        </div>
      ) : (
        <h2>You are not registered</h2>
      )}
    </>
  );
};

export default Account;

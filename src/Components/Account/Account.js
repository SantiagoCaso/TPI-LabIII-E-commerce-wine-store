import React, { useState, useContext } from "react";
import { ThemeContext } from "../Theme/useContext";
import firebase from "firebase/app";
import { getAuth, updateProfile } from "firebase/auth";
import { Button, ToastContainer } from "react-bootstrap";
import "./Account.css";
import { errorMessage, succesedMessage } from "../Tostify/MessagesToastify";

const Account = () => {
  const { theme } = useContext(ThemeContext);
  const [name, setName] = useState("");
  const [inputData, setInputData] = useState("hide");
  const auth = getAuth();
  const user = auth.currentUser;

  //Cambiar el nombre de usuario

  const nameHandler = async () => {
    try {
      await updateProfile(user, {
        displayName: name,
      });
      succesedMessage("Updated name");
      console.log("Nombre de usuario actualizado con éxito");
    } catch (error) {
      console.error("Error al actualizar el nombre de usuario:", error);
    }
  };

  const handleShow = () => setInputData(inputData === "show" ? "hide" : "show");

  return (
    <>
      {user ? (
        <div className={theme}>
          <h1>Your account data</h1>
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
            <h3>Id:</h3> {user.uid}
          </div>
          <div id="user-password">
            <h3>Password: ********</h3>
          </div>
          <Button onClick={handleShow}>Change user data</Button>
          <br></br>
        </div>
      ) : (
        <div>
          <h2>You are not registered</h2>
        </div>
      )}
    </>
  );
};

export default Account;

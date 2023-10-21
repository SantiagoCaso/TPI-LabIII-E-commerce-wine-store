import React, { useState, useContext } from "react";
import { ThemeContext } from "../Theme/useContext";
import firebase from "firebase/app";
import { getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";

const Account = () => {
  const { theme } = useContext(ThemeContext);
  const [name, setName] = useState("");
  const auth = getAuth();
  const user = auth.currentUser;

  const nameHandler = async () => {
    try {
      await updateProfile(user, {
        displayName: name,
      });
      console.log("Nombre de usuario actualizado con éxito");
    } catch (error) {
      console.error("Error al actualizar el nombre de usuario:", error);
    }
  };

  return (
    <>
      {user ? (
        <div className={theme}>
          <h1>User Data</h1>
          <h3>
            Name: {name === null ? user.displayName : name}
            {user.displayName === null ? (
              <>
                <p>Set user name: </p>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <button onClick={nameHandler}>Set name</button>
              </>
            ) : (
              user.displayName
            )}
          </h3>

          <h3>Email: {user.email}</h3>
          <h3>Id: {user.uid}</h3>
          <h3>Password: ********</h3>
          <br></br>
        </div>
      ) : (
        <h2>You are not registered</h2>
      )}
    </>
  );
};

export default Account;

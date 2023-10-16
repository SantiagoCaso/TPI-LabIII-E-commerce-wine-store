import React, { useReducer, useState } from "react";

const Account = ({ email, name, password }) => {
  const initialState = {
    name: name,
    email: email,
    password: password,
  };

  const userReducer = (state, action) => {
    switch (action.type) {
      case "SET_NAME":
        return { ...state, name: action.payload };
      case "SET_EMAIL":
        return { ...state, email: action.payload };
      case "SET_PASSWORD":
        return { ...state, password: action.payload };
      default:
        return state;
    }
  };

  const [user, dispatch] = useReducer(userReducer, initialState);

  const handleNameChange = (e) => {
    dispatch({ type: "SET_NAME", payload: e.target.value });
  };

  const handleEmailChange = (e) => {
    dispatch({ type: "SET_EMAIL", payload: e.target.value });
  };

  const handlePasswordChange = (e) => {
    dispatch({ type: "SET_PASSWORD", payload: e.target.value });
  };

  const [showInputEmail, setInputEmail] = useState(false);
  const changeInputEmail = () => {
    setInputEmail(!showInputEmail);
  };

  return (
    <div>
      {showInputEmail ? (
        <h2>
          Email: {email}
          <button onClick={changeInputEmail}>Change Email</button>
        </h2>
      ) : (
        <h2>
          <input type="text" value={user.email} onChange={handleNameChange} />
          <button onClick={changeInputEmail}>Save</button>
        </h2>
      )}

      <h2>
        <button>Change password</button>
      </h2>
    </div>
  );
};

export default Account;

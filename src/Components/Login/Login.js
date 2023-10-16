import Form from "react-bootstrap/Form";
import React from "react";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { auth } from "../Firebase/Firebase";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useState, useRef, useEffect, useContext } from "react";
import { firebaseConfig } from "../Firebase/Firebase";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { ThemeContext } from "../Theme/useContext";
import { UserContext } from "./userContext";
import Account from "../Account/Account";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const inputRef = useRef(null); // Para que al caragar el componente haga foco sobre el primer input
  const navigate = useNavigate(); // Para que cambie de componente si el usuario ingreso con exito
  const [showPassword, setShowPassword] = useState(false);
  const { userType, setUserType } = useContext(UserContext); // Para definir que tipo de usuario ingresó

  const { theme } = useContext(ThemeContext);

  const succesedMessage = () => {
    toast.success("Succesed login!", {
      position: "top-right", // Posición de la notificación
      autoClose: 3000, // Duración en milisegundos antes de que se cierre automáticamente (opcional)
      hideProgressBar: false, // Mostrar barra de progreso (opcional)
      closeOnClick: true, // Cerrar la notificación al hacer clic (opcional)
      pauseOnHover: true, // Pausar la notificación al pasar el mouse por encima (opcional)
    });
  };

  const errorMessage = () =>
    toast.error("Failed to login.", {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  //Cambiar de visible a no visible el input de password
  const changeShowPasswordHandler = () => {
    setShowPassword(!showPassword);
  };

  // Logiarse o crear cuenta con google
  async function loginGoogle() {
    const googleProvider = new GoogleAuthProvider();
    await loginWithGoogle(googleProvider);
  }

  async function loginWithGoogle(googleProvider) {
    try {
      const respuesta = await signInWithPopup(auth, googleProvider);
      if (
        respuesta.user.email === "cubo3x3.cubo2x2@gmail.com" ||
        respuesta.user.email === "moravallejos03@gmail.com"
      ) {
        setUserType("Admin");
        console.log("Welcome Admin");
        localStorage.setItem("loggedUser", JSON.stringify(respuesta.user.uid));
        console.log(
          "Id del usuario logiado actual: " + localStorage.getItem("loggedUser")
        );
      } else {
        setUserType("User");
        console.log("Welcome User");
        localStorage.setItem("loggedUser", JSON.stringify(respuesta.user.uid));
        console.log(
          "Id del usuario logiado actual: " + localStorage.getItem("loggedUser")
        );
      }
      succesedMessage();
      navigate("/products");
    } catch (error) {
      errorMessage();
      console.log(error);
    }
  }

  //Login Manual

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      const user = userCredential.user;
      console.log("Usuario logiado con EXITO " + user.email);
      if (
        user.email === "cubo3x3.cubo2x2@gmail.com" ||
        user.email === "moravallejos03@gmail.com"
      ) {
        setUserType("Admin");
        console.log("Welcome Admin");
        localStorage.setItem("loggedUser", JSON.stringify(user.uid));
        console.log(
          "Id del usuario logiado actual: " + localStorage.getItem("loggedUser")
        );
      } else if (user.uid === null) {
        errorMessage();
      } else {
        setUserType("User");
        console.log("Welcome User");
        localStorage.setItem("loggedUser", JSON.stringify(user.uid));
        console.log(
          "Id del usuario logiado actual: " + localStorage.getItem("loggedUser")
        );
      }
      succesedMessage();
      navigate("/products");
    });
  };

  // Para que al caragar el componente haga foco sobre el primer input
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className={theme}>
      <Form className="div-form-login-container">
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label className="form-label">Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            ref={inputRef}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <div className="form-control-password">
            <Form.Control
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              onClick={changeShowPasswordHandler}
              id="show-password-button"
            >
              {showPassword ? (
                <AiFillEyeInvisible className="show-password-icon" />
              ) : (
                <AiFillEye className="show-password-icon" />
              )}
            </Button>
          </div>
        </Form.Group>
        <Button onClick={handleSubmit} variant="primary">
          Login
        </Button>
        <Form.Text className="text-muted2">
          Don't you have an account?
          <Link as={Link} to="/createAnAccount" style={{ color: "white" }}>
            Create one!
          </Link>
        </Form.Text>
        <Account email={email} password={password} />
        <h3 style={{ color: "black" }}>{userType}</h3>
        <Button onClick={loginGoogle} variant="primary">
          Login with Google
        </Button>
      </Form>
    </div>
  );
}

export default Login;

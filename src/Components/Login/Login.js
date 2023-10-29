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
import Account from "../Account/Account";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { errorMessage, succesedMessage } from "../Tostify/MessagesToastify";

function Login() {
  const inputRef = useRef(null); // Para que al caragar el componente haga foco sobre el primer input
  const navigate = useNavigate(); // Para que cambie de componente si el usuario ingreso con exito
  const [showPassword, setShowPassword] = useState(false);

  const { theme } = useContext(ThemeContext);

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
        respuesta.user.email === "santiagoignaciocaso@gmail.com" ||
        respuesta.user.email === "moravallejos03@gmail.com"
      ) {
        console.log("Welcome Admin");
        succesedMessage("Welcome Admin");
      } else {
        succesedMessage("Welcome User");
      }
      navigate("/products");
    } catch (error) {
      console.log(error);
      if (error.code === "auth/invalid-login-credentials") {
        errorMessage("Incorrect email or password");
      }
    }
  }

  //Login Manual

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Usuario logiado con EXITO " + user.email);
        navigate("/products");
        if (user && user.email === "javier@gmail.com") {
          succesedMessage("Succesed login! Welcome Admin");
        } else {
          succesedMessage("Succesed login! Welcome User");
        }
        navigate("/products");
      })
      .catch((error) => {
        console.log(error);
        if (error.code === "auth/invalid-login-credentials") {
          errorMessage("Incorrect email or password");
        }
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
        <Button onClick={loginGoogle} variant="primary">
          Login with Google
        </Button>
      </Form>
    </div>
  );
}

export default Login;

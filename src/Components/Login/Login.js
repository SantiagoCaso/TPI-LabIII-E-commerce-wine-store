import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { auth } from "../Firebase/Firebase";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useState, useRef, useEffect } from "react";
import { firebaseConfig } from "../Firebase/Firebase";

function Login() {
  const [userType, setUserType] = useState(""); // Para definir que tipo de usuario ingresó
  const inputRef = useRef(null); // Para que al caragar el componente haga foco sobre el primer input
  const navigate = useNavigate(); // Para que cambie de componente si el usuario ingreso con exito

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
      } else {
        setUserType("User");
        console.log("Welcome User");
      }
      navigate("/products");
    } catch (error) {
      console.log(error);
    }
  }

  //Login Manual

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const respuesta = await signInWithEmailAndPassword(auth, email, password);
      // El inicio de sesión fue exitoso, puedes redirigir al usuario a otra página
      console.log("Inicio de sesion EXITOSO usuario: " + respuesta);
      navigate("/products");
    } catch (error) {
      console.error("Error al iniciar sesión", error);
    }
  };

  // Para que al caragar el componente haga foco sobre el primer input
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <Form className="div-form-login-container" onSubmit={handleSubmit}>
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
        <Form.Control
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary">Login</Button>{" "}
      <Form.Text
        className="text-muted2"
        style={{ marginBottom: "500px", color: "gray" }}
      >
        Don't you have an account?
        <Link as={Link} to="/createAnAccount" style={{ color: "white" }}>
          {" "}
          Create one!
        </Link>
      </Form.Text>
      <h3 style={{ color: "black" }}>{userType}</h3>
      <Button onClick={loginGoogle} variant="primary">
        Login with Google
      </Button>{" "}
    </Form>
  );
}

export default Login;

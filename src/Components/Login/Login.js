import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./Login.css";
import { auth } from "../Firebase/Firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";

function Login({theme}) {
  const [userType, setUserType] = useState();

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
        setUserType(respuesta.user.email);
        console.log("Welcome Admin");
      } else {
        console.log("Welcome User");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={theme}>
    <Form className="div-form-login-container">
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label className="form-label">Name</Form.Label>
        <Form.Control type="name" placeholder="Enter your name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter Password" />
      </Form.Group>
      <Button variant="primary">Login</Button>{" "}
      <Form.Text
        className="text-muted2">
        Don't you have an account?
        <Link as={Link} to="/createAnAccount" style={{ color: "white" }}>
          {" "}
          Create one!
        </Link>
      </Form.Text>
      <Button onClick={loginGoogle} variant="primary">
        Login with Google
      </Button>{" "}
    </Form>
    </div>
  );
}

export default Login;

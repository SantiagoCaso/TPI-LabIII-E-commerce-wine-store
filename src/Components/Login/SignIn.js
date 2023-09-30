import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./SignIn.css";
import { useState } from "react";
import { auth, firebaseConfig } from "../Firebase/Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

function CreateAnAccount() {
  //Login Manual

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  //Cambiar de visible a no visible el input de password
  const changeShowPasswordHandler = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, password, name);
      // El inicio de sesión fue exitoso, puedes redirigir al usuario a otra página
    } catch (error) {
      console.error("Error al iniciar sesión", error);
    }
  };

  return (
    <Form className="div-form-sign-in-container" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{ marginTop: "10px" }}>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p style={{ color: "gray" }}>
          {" "}
          We'll never share your email with anyone else.{" "}
        </p>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="name"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <div className="form-control-password">
          <Form.Control
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={changeShowPasswordHandler} id="show-password-button">
            {showPassword ? (
              <AiFillEyeInvisible className="show-password-icon" />
            ) : (
              <AiFillEye className="show-password-icon" />
            )}
          </Button>
        </div>
        <p style={{ color: "gray" }}> Create a password. </p>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Label>I'm 21 or older</Form.Label>
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" style={{ marginBottom: "200px" }}>
        Create account
      </Button>
    </Form>
  );
}

export default CreateAnAccount;

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./SignIn.css";
import { useContext, useEffect, useRef, useState } from "react";
import { auth } from "../Firebase/Firebase";
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import Account from "../Account/Account";
import { ThemeContext } from "../Theme/useContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  errorMessage,
  succesedMessage,
  warnMessage,
} from "../Tostify/MessagesToastify";
import { useNavigate } from "react-router-dom";

function CreateAnAccount() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const auth = getAuth();
  const user = auth.currentUser;
  const navigate = useNavigate();
  const nameRef = useRef();
  const passwordRef = useRef(null);
  const emailRef = useRef(null);
  const { theme } = useContext(ThemeContext);

  // checkBox para confirmación de edad
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  //Cambiar de visible a no visible el input de password

  const changeShowPasswordHandler = () => {
    setShowPassword(!showPassword);
  };

  // Crear usuario nuevo y registrarlo en Authentication de Firebase + valiaciones del form

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (emailRef.current.value.length === 0) {
      emailRef.current.focus();
      emailRef.current.style.border = "solid red";
      emailRef.current.style.outline = "none";
      warnMessage("Set a email");
    } else if (
      passwordRef.current.value.length > 0 &&
      passwordRef.current.value.length < 5
    ) {
      passwordRef.current.focus();
      passwordRef.current.style.border = "solid red";
      passwordRef.current.style.outline = "none";
      warnMessage("Password should be at least 6 characters");
    } else if (passwordRef.current.value.length === 0) {
      passwordRef.current.focus();
      passwordRef.current.style.border = "solid red";
      passwordRef.current.style.outline = "none";
      warnMessage("Set a password");
    } else if (isChecked === false) {
      warnMessage("You have to be 21 years old or older");
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          succesedMessage("Welcome! New user created");
          console.log("Usuario creado con éxito:", user);
          navigate("/account");
        })
        .catch((error) => {
          // Ocurrió un error al crear la cuenta, puedes manejar el error aquí
          errorMessage("Failed to create account");
          console.error("Error al crear la cuenta:", error);
        });
    }
  };

  // Para que al caragar el componente haga foco sobre el primer input
  useEffect(() => {
    emailRef.current.focus();
  }, []);

  return (
    <div className={theme}>
      <Form className="div-form-sign-in-container" onSubmit={handleSubmit}>
        <h2>Create Account</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="form-label">Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="p">We'll never share your email with anyone else.</p>
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
              onChange={(e) => {
                passwordRef.current.style.borderColor = "";
                passwordRef.current.style.outline = "";
                setPassword(e.target.value);
              }}
              ref={passwordRef}
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
          <p style={{ color: "gray" }}> Create a password. </p>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>I'm 21 or older</Form.Label>
          <Form.Check
            type="checkbox"
            label="Check me out"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          style={{ marginBottom: "200px" }}
        >
          Create account
        </Button>
      </Form>
    </div>
  );
}

export default CreateAnAccount;

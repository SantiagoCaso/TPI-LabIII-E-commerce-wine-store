import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <Form className="div-form-login-container">
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label style={{ marginTop: "10px"}}>Name</Form.Label>
        <Form.Control type="name" placeholder="Enter your name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter Password" />
      </Form.Group>
      <Button variant="primary">Login</Button>{" "}
      <Form.Text className="text-muted2" style={{ marginBottom: "500px", color: "gray"}}>
        Don't you have an account?
        <Link as={Link} to="/createAnAccount" style={{ color: "white"}}>
          {" "}
          Create one!
        </Link>
      </Form.Text>
    </Form>
  );
}

export default Login;

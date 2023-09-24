import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./SignIn.css";

function CreateAnAccount() {
  return (
    <Form className="div-form-sign-in-container">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{ marginTop: "10px"}}>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <p style={{ color: "gray"}}> We'll never share your email with anyone else. </p>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" placeholder="Enter Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter password" />
        <p style={{ color: "gray"}}> Create a password. </p>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Label>I'm 21 or older</Form.Label>
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" style={{ marginBottom: "200px"}}>
        Create account
      </Button>
    </Form>
  );
}

export default CreateAnAccount;

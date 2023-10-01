import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./SignIn.css";

function CreateAnAccount({theme}) {
  return (
    <div className={theme}>
    <Form className="div-form-sign-in-container">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label clasName="form-label">Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <p className="p"> We'll never share your email with anyone else. </p>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" placeholder="Enter Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter password" />
        <p className="p"> Create a password. </p>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Label>I'm 21 or older</Form.Label>
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" clasName="button-account" style={{ marginBottom: "200px"}}>
        Create account
      </Button>
    </Form>
    </div>
  );
}

export default CreateAnAccount;

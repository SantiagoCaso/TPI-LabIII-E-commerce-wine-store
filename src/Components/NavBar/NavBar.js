import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import CartOffCanvas from "../Cart/CartOffCanvas";
import { BsFillPersonFill } from "react-icons/bs";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { BiLogIn } from "react-icons/bi";
import { PiWineFill } from "react-icons/pi";
import "./NavBar.css";

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/WineStore">
            WineStore <PiWineFill />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/products">
              Products
            </Nav.Link>
          </Nav>
          <DropdownButton id="dropdown-basic-button" title="Sign in">
            <Dropdown.Item as={Link} to="/login">
              Sing in <BiLogIn />
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/createAnAccount">
              Create an account <BsFillPersonFill />
            </Dropdown.Item>
          </DropdownButton>
          <CartOffCanvas />
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;

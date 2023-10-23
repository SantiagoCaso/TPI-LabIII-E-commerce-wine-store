import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import CartOffCanvas from "../Cart/CartOffCanvas";
import { BsFillPersonFill } from "react-icons/bs";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { BiLogIn, BiLogOut, BiSolidUser } from "react-icons/bi";
import { PiWineFill } from "react-icons/pi";
import "./NavBar.css";
import { useEffect, useState } from "react";
import ButtonToggleTheme from "../Theme/ButtonToggleTheme";
import { OrderContextProvider } from "../Order/OrderContext";
import { Button } from "react-bootstrap";
import { GrCart } from "react-icons/gr";
import { getAuth, signOut } from "firebase/auth";
import { warnMessage, errorMessage } from "../Tostify/MessagesToastify";

const Logout = async () => {
  const auth = getAuth();
  try {
    if (auth !== null) {
      await signOut(auth);
      console.log("El usuario cerró sesión");
      warnMessage("Logout");
    } else if (auth === null) {
      errorMessage("unlogged user");
      console.log("No hay ningun usuario logiado");
    }
  } catch (error) {
    console.log(error);
  }
};
function ColorSchemesExample() {
  return (
    <>
      <OrderContextProvider>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/WineStore">
              WineStore <PiWineFill color="" />
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
              <Dropdown.Item onClick={Logout} as={Link} to="/WineStore">
                Logout <BiLogOut />
              </Dropdown.Item>
            </DropdownButton>
            <Button variant="primary" as={Link} to="/cart">
              <GrCart />
            </Button>
            <Button variant="primary" as={Link} to="/account" id="btn-account">
              <BiSolidUser />
            </Button>
            <ButtonToggleTheme />
          </Container>
        </Navbar>
      </OrderContextProvider>
    </>
  );
}

export default ColorSchemesExample;

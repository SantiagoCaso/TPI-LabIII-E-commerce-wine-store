import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import CartOffCanvas from "../Cart/CartOffCanvas";
import { BsFillPersonFill } from "react-icons/bs";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { BiLogIn, BiLogOut } from "react-icons/bi";
import { PiWineFill } from "react-icons/pi";
import "./NavBar.css";
import { useEffect, useState } from "react";
import ButtonToggleTheme from "../Theme/ButtonToggleTheme";
import { Button } from "react-bootstrap";

const Logout = () => {
  localStorage.removeItem("loggedUser");
  console.log(
    "El Id del usuario logiado es: " + localStorage.getItem("loggedUser")
  );
};

// Intento para que el DropdownButton muestre las opciones dependiendo si el usuario está logeado o no
// Pienso que hay que hacerlo con useContexte del user

// function DropdownHandler() {
//   const [userLogged, setUserLogged] = useState(null);

//   if (userLogged === null) {
//     return (
//       <DropdownButton id="dropdown-basic-button" title="Sign in">
//         <Dropdown.Item as={Link} to="/login">
//           Sing in <BiLogIn />
//         </Dropdown.Item>
//         <Dropdown.Item as={Link} to="/createAnAccount">
//           Create an account <BsFillPersonFill />
//         </Dropdown.Item>
//       </DropdownButton>
//     );
//   } else if (userLogged === true) {
//     return (
//       <DropdownButton id="dropdown-basic-button" title="Sign in">
//         <Dropdown.Item onClick={Logout} as={Link} to="/WineStore">
//           Logout <BiLogOut />
//         </Dropdown.Item>
//       </DropdownButton>
//     );
//   }
// }

function ColorSchemesExample() {
  return (
    <>
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
          <Button className="button-cart" as={Link} to="/CartPage"> Cart </Button>
          <CartOffCanvas />
          <ButtonToggleTheme />
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;

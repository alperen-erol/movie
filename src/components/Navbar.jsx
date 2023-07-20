import { Link } from "react-router-dom";
import avatar from "../assets/icons/avatar.png";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const NavBar = () => {
  const currentUser = { displayName: "alpi" };
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Movie App</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Dropdown data-bs-theme="dark">
            <Dropdown.Toggle
              id="dropdown-button-dark-example1"
              variant="secondary"
            >
              Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>
                {" "}
                <Link to="login">Login</Link>{" "}
              </Dropdown.Item>
              <Dropdown.Item>
                {" "}
                <Link to="register">Register</Link>{" "}
              </Dropdown.Item>
              <Dropdown.Item> Logout </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";

import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

const NavBar = () => {
  const {currentUser,logOut} = useContext(AuthContext)
  const handleLogout = ()=>{
   logOut()
    
  }
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand ><Link className=" text-decoration-none" to="/">Movie App</Link></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Dropdown data-bs-theme="dark" className="dropdownmenu">
            <Dropdown.Toggle
              id="dropdown-button-dark-example1"
              variant="secondary"
              className=" text-capitalized "
            >
              {currentUser.displayName}
            </Dropdown.Toggle>

            <Dropdown.Menu >
              <Dropdown.Item>
                {" "}
                <Link className=" text-decoration-none" to="login">Login</Link>{" "}
              </Dropdown.Item>
              <Dropdown.Item>
                {" "}
                <Link className=" text-decoration-none" to="register">Register</Link>{" "}
              </Dropdown.Item>
              <Dropdown.Item onClick={()=>handleLogout()}> Logout </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

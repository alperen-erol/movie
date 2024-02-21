import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

const NavBar = () => {
  const { currentUser, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut();
    window.location.reload();
  };
  return (
    <>
      <div className="navbarr">
        <Link to="/" >Movie App</Link>
        <div className="dropdown">
          <button className="dropbtn">{currentUser?currentUser.displayName:"Not Logged In"}</button>
          <div className="dropdown-content">
          {currentUser ? <a onClick={handleLogout}>Logout</a> : (<><Link to="login">Login</Link>
          <Link to="register">Register</Link></>)}
      
            
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;

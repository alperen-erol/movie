import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { toastSuccessNotify } from "../helpers/ToastNotify";
const NavBar = () => {
  const { currentUser, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut();
    toastSuccessNotify("Succesfully Logged Off");
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

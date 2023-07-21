import { ToastContainer } from "react-toastify";
import Navbar from "./components/NavBar";
import AuthContextProvider from "./context/AuthContext";
import Register from "./pages/Register";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    
      <AuthContextProvider>
        <AppRouter />  
        <ToastContainer/>
      </AuthContextProvider>
    
  );
}

export default App;

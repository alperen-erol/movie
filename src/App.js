import { ToastContainer } from "react-toastify";
import Navbar from "./components/NavBar";
import AuthContextProvider from "./context/AuthContext";
import Register from "./pages/Register";
import AppRouter from "./router/AppRouter";
import MovieContextProvider from "./context/MovieContext";

function App() {
  return (
    
      <AuthContextProvider>
        <MovieContextProvider>
        <AppRouter />  
        <ToastContainer/>
        </MovieContextProvider>
      </AuthContextProvider>
    
  );
}

export default App;

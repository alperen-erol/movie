import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/NavBar";
import Login from "../pages/Login";
import Main from "../pages/Main";
import MovieDetail from "../pages/MovieDetail";
import Register from "../pages/Register";
// import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    
      <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="" element={<MovieDetail />} />
      </Routes>
    
      </>
  );
};

export default AppRouter;

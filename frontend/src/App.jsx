// import React from "react";
import Home from "../components/Home";
import Toy from '../components/Toy';
import { Routes, Route } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Navbar from "../components/NavBar";
import AddToy from "../components/AddToy";


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/addtoy" element={ <AddToy /> } />
        <Route path="/details/:id" element={ <Toy /> } />
        <Route path="*" element={ <ErrorPage /> } />
      </Routes>
    </div>
  );
};

export default App;

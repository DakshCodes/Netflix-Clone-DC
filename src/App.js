import React from "react";
import Nav from "./component/Nav";
import "../src/index.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LogIn from '../src/pages/Login';
import SignIn from '../src/pages/Signup';
import Account from '../src/pages/Account';

function App() {
  return (
    <>

      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/signup' element={<SignIn />} />
        <Route
          path='/account'
          element={
            <Account />
          }
        />
      </Routes>

    </>
  );
}

export default App;
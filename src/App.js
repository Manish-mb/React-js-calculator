import './mycomponents/App.css';
import React from "react";
import Calculator from "./mycomponents/Calculator";
import ProfileState from "./ProfileState";


import {
 BrowserRouter,
 Routes,
 Route
 } from "react-router-dom"; 
// import Calculator from "./mycomponents/Calculator";

function App() {
 return(
 <>


     {
      <Calculator/>
     }
   </>
  );
  }

export default App;
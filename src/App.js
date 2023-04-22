import React from "react";
import {
    Routes,
    Route,
    useNavigate
  } from "react-router-dom";
import Reg from "./Reg";

const App = () => {
    const navigate = useNavigate();
  return (
   
      <Routes>
        <Route path="/" element={<Reg />}>
        </Route>
      </Routes>
  
  )
}

export default App
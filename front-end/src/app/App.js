import React from "react";
import "bootstrap/dist/css/bootstrap-grid.css"
import HomePage from "../pages/Home";
import ManageCar from "../pages/Admin/ManageCar/ManageCar";
import { Route } from "react-router-dom";
import {Routes} from "react-router";

function App() {
/*  return <Layout/>;*/

  return (
      <HomePage/>
/*      <div className="App">
          <h1>Welcome to React Router!</h1>
          <Routes>
              <Route path="/" element={<HomePage/>} />
              <Route path="car" element={<ManageCar />} />
          </Routes>
      </div>*/
  );
}
export default App;

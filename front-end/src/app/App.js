import React from "react";
import Layout from "../pages/Layouts/Layout";
import {BrowserRouter as Router, Route } from 'react-router-dom'
import ListEmployeeComponent from '../pages/Customer/ListEmployeeComponent';
import HeaderComponent from '../pages/Customer/HeaderComponent';
import FooterComponent from '../pages/Customer/FooterComponent';
import CreateEmployeeComponent from '../pages/Customer/CreateEmployeeComponent';
import ViewEmployeeComponent from '../pages/Customer/ViewEmployeeComponent';
import Switch from "@mui/material/Switch";
import UpdateEmployeeComponent from "../pages/Customer/UpdateEmployeeComponent";

function App() {
  return <Layout/>;
/*
  return (
      <div>
{/!*        <Router>
          <HeaderComponent />
          <div className="container">
            <Switch>
              <Route path = "/" exact component = {ListEmployeeComponent}></Route>
              <Route path = "/employees" component = {ListEmployeeComponent}></Route>
              <Route path = "/add-employee/:id" component = {CreateEmployeeComponent}></Route>
              <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}></Route>
               <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route>
            </Switch>
          </div>
          <FooterComponent />
        </Router>*!/}
      </div>

  );*/
}

export default App;

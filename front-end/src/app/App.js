import React from "react";
import "bootstrap/dist/css/bootstrap-grid.css"
import Layout from "../pages/Layouts/Layout";

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

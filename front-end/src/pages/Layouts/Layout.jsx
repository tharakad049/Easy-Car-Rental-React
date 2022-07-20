import React, { Fragment } from "react";
import HomePage from "../../pages/Home";
import HeaderComponent from "../Customer/HeaderComponent";
import {BrowserRouter as Router} from "react-router-dom";
import FooterComponent from "../Customer/FooterComponent";
import UpdateEmployeeComponent from "../Customer/UpdateEmployeeComponent";

const Layout = () => {
  return (
    <Fragment>
      {/*<HomePage />*/}
      <UpdateEmployeeComponent/>
    </Fragment>
  );
};

export default Layout;

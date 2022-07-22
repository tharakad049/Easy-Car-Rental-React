import React, { Fragment } from "react";
import HomePage from "../../pages/Home";
import Login from "../Session/Login";
import Register from "../Session/Register/register";
import AdminNavBar from "../../components/admin/NavBar";
import ManageCar from "../Admin/ManageCar/ManageCar";
import CustomerNavBar from "../../components/Customer/NavBar";
import RentalRequest from "../Admin/RentalRequest/RentalRequest";

const Layout = () => {
  return (
    <Fragment>
      {/*<HomePage />*/}   <RentalRequest/>
{/*     <Login/>*/}{/* <AdminNavBar/>*/}
{/*   <Register/>*/}
    </Fragment>
  );
};

export default Layout;

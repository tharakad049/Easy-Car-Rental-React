import React, { Fragment } from "react";
import AdminNavBar from "../../components/admin/NavBar";
import HomePage from "../Home";
import ManageCar from "../Admin/ManageCar/ManageCar";
import Login from "../Session/Login";
import CustomerNavBar from "../../components/Customer/NavBar";
import ManageCustomer from "../Admin/ManageCustomer/ManageCustomer";
import ManageDriver from "../Admin/ManageDriver/ManageDriver";
import RegisterCustomer from "../Session/Register/register";
import CarRequestPopUp from "../Admin/RentalRequest/RentalRequestPopupTable";


const Layout = () => {
  return (
    <Fragment className="container-fluid">
      {/*<HomePage />*/}   <HomePage/>
{/*     <Login/>*/}{/* <AdminNavBar/>*/}
{/*   <Register/>*/}
    </Fragment>
  );
};

export default Layout;

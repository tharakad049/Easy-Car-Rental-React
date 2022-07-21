import React, {Component} from "react";
import Button from "@material-ui/core/Button";
import {TbHome} from "react-icons/tb";
import {VscRequestChanges} from "react-icons/vsc";
import {AiFillCar} from "react-icons/ai";
import {FaUserEdit} from "react-icons/fa";
import MenuListComposition from "../ManuList";
import withStyles from "@material-ui/core/styles/withStyles";
import {styleSheet} from "./style";

class AdminNavBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props
        return (
            <div className={classes.navBar_container}>
                <div className={classes.logo_container}></div>
                <div className={classes.navBarButton_container}>
                    <Button style={{color: 'blue', borderColor: 'blue', borderRadius: '10px'}} variant="outlined"
                            color="danger" startIcon={<TbHome/>}>Home</Button>
                    <Button style={{color: 'blue', borderColor: 'blue', borderRadius: '10px'}} variant="outlined"
                            color="danger" startIcon={<VscRequestChanges/>}>Rental Request Manage</Button>
                    <Button style={{color: 'blue', borderColor: 'blue', borderRadius: '10px'}} variant="outlined"
                            color="danger" startIcon={<AiFillCar/>}>Car Manage</Button>
                    <Button style={{color: 'blue', borderColor: 'blue', borderRadius: '10px'}} variant="outlined"
                            color="danger" startIcon={<FaUserEdit/>}>Drivers Manage</Button>
                    <div style={{width: '10px'}}></div>
                    <MenuListComposition/>
                </div>
            </div>
        );
    };
}

export default withStyles(styleSheet)(AdminNavBar)
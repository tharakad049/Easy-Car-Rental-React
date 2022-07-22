import React, {Component} from "react";
import Button from "@material-ui/core/Button";
import {TbHome} from "react-icons/tb";
import {VscRequestChanges} from "react-icons/vsc";
import {AiFillCar} from "react-icons/ai";
import {FaUserEdit} from "react-icons/fa";
import withStyles from "@material-ui/core/styles/withStyles";
import {styleSheet} from "./style";

class CustomerNavBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props
        return (
            <div className={classes.navBar_container}>
                <div className={classes.navBarButton_container}>
                    <Button style={{color: 'black', borderColor: 'black', borderRadius: '10px'}} variant="outlined"
                            color="danger" startIcon={<TbHome/>}>Home</Button>
                    <Button style={{color: 'black', borderColor: 'black', borderRadius: '10px'}} variant="outlined"
                            color="danger" startIcon={<VscRequestChanges/>}>Update User Information</Button>
                    <Button style={{color: 'black', borderColor: 'black', borderRadius: '10px'}} variant="outlined"
                            color="danger" startIcon={<FaUserEdit/>}>Check Request Status</Button>
                    <Button style={{color: 'black', borderColor: 'black', borderRadius: '10px'}} variant="outlined"
                            color="danger" startIcon={<AiFillCar/>}>Rent A Car</Button>
                    <div style={{width: '10px'}}></div>
                </div>
            </div>
        );
    };
}

export default withStyles(styleSheet)(CustomerNavBar)
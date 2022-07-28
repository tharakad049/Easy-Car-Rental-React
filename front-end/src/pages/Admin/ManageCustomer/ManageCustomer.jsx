import React, {Component} from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import {styleSheet} from "./ManageCustomerStyle";
import Button from "@material-ui/core/Button";
import AdminNavBar from "../../../components/admin/NavBar/index";
import Divider from "@material-ui/core/Divider";
import Input from "@material-ui/core/Input";
import FormGroup from "@material-ui/core/FormGroup";
import CustomerService from "../../../service/CustomerService";
import TextField from "@material-ui/core/TextField";
import ViewAllCarPopUpTable from "../../../components/admin/ViewAllCarTablePopup/carTablePopup";
import Autocomplete from "@material-ui/lab/Autocomplete";

class ManageCustomer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            IDFrontImage: null,
            IDBackImage: null,

            IDFrontView: null,
            IDBackView: null,

            customerDerails :{
                id:'',
                email : '',
                nic : '',
                drivingLicence : '',
                address : '',
                contactNum: '',
                userName:'',
                password : '',
            },

            TextLabel: 'DRIVING LICENCE OR NIC NUMBER'
        }
    }

    registerCustomer = async () => {

        var customerDetails = {
            cusId: this.state.customerDerails.id,
            email: this.state.customerDerails.email,
            nicNumber: this.state.customerDerails.nic,
            drivingLicenseNumber: this.state.customerDerails.drivingLicence,
            address: this.state.customerDerails.address,
            contactNumber: this.state.customerDerails.contactNum,
            userName: this.state.customerDerails.userName,
            password: this.state.customerDerails.password,
        }


        let res = await CustomerService.registerCustomer(customerDetails);
        if (res.data.code == 200) {
            alert(res.data.message);

        } else {
            alert(res.data.message);
        }
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.mainContainer}>
                <AdminNavBar/>
                <div className={classes.state_Bar_container}></div>
                <div className={classes.form_Container}>
                    <div className={classes.form_backGround}>
                        <div className={classes.form_textFieldForm}>
                            <h4 style={{color: 'white'}}>MANAGE CUSTOMER</h4>
                        </div>
                        <Divider/>
                        <div className={classes.formDividerText2Container}>
                            <h5 style={{color: 'black'}}>Customer Details</h5>
                        </div>
                        <Divider/>

                        <div className={classes.formTextFieldContainer}>

                            <Input placeholder="Customer Id" type="text" value={this.state.customerDerails.id}
                                   onChange={(e) => {
                                       let data = this.state.customerDerails
                                       data.id = e.target.value
                                       this.setState({ data })
                                   }}/>
                            <Input placeholder="Email" type="text" value={this.state.customerDerails.email}
                                   onChange={(e) => {
                                       let data = this.state.customerDerails
                                       data.email = e.target.value
                                       this.setState({ data })
                                   }}/>

                            <Input placeholder="User Name" type="text"
                                   value={this.state.customerDerails.userName}
                                   onChange={(e) => {
                                       let data = this.state.customerDerails
                                       data.userName = e.target.value
                                       this.setState({ data })
                                   }}/>
                            <Input placeholder="Password" type="text"
                                   value={this.state.customerDerails.password}
                                   onChange={(e) => {
                                       let data = this.state.customerDerails
                                       data.password = e.target.value
                                       this.setState({ data })
                                   }}/>
                            <Input placeholder="Address" type="text"
                                   value={this.state.customerDerails.address}
                                   onChange={(e) => {
                                       let data = this.state.customerDerails
                                       data.address = e.target.value
                                       this.setState({ data })
                                   }}/>
                            <Input placeholder="Contact Number" type="text"
                                   value={this.state.customerDerails.contactNum}
                                   onChange={(e) => {
                                       let data = this.state.customerDerails
                                       data.contactNum = e.target.value
                                       this.setState({ data })
                                   }}/>

                            <Autocomplete
                                id="combo-box-demo"
                                options={[{title: 'Driving Licence'}, {title: 'NIC Number'}]}
                                getOptionLabel={(option) => option.title}
                                style={{width: 300}}
                                renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined"/>}
                                onChange={(event, value) => {

                                    switch (value.title) {
                                        case "NIC Number" :
                                            let data1 = this.state.customerDerails.drivingLicence='';
                                            this.setState({
                                                data1,
                                                TextLabel: "NIC NUMBER",

                                            });break;
                                        case  "Driving Licence" :
                                            let data2 = this.state.customerDerails.nic='';
                                            this.setState({
                                                data2,
                                                TextLabel: "Driving Licence",
                                            });break;
                                    }
                                    console.log(value.title)
                                }}
                            />
                            <TextField id="outlined-basic" label={this.state.TextLabel}
                                       variant="outlined"
                                       onChange={(e) => {
                                           switch (this.state.TextLabel) {
                                               case "NIC NUMBER" :
                                                   let data1 = this.state.customerDerails
                                                   data1.nic = e.target.value
                                                   this.setState({data1});break;

                                               case  "Driving Licence" :
                                                   let data2 = this.state.customerDerails
                                                   data2.drivingLicence = e.target.value
                                                   this.setState({data2});break;

                                           }
                                           console.log(this.state.customerDerails.nic+" NIC NUMBER")
                                           console.log(this.state.customerDerails.drivingLicence+ " DRIVING LICENCE");

                                       }}/>

                        </div>

                        <Divider/>

                        <div className={classes.formDividerText2Container}>
                            <h5 style={{color: 'black'}}>Front View</h5>
                            <h5 style={{color: 'black'}}>Back View</h5>
                        </div>
                        <Divider/>

                        <div className={classes.imageContainer}>
                            <div className={classes.imageDiv}
                                 style={{
                                     display: 'flex',
                                     alignItems: 'center',
                                     justifyContent: 'center',
                                     height: '75%',
                                     backgroundImage: "url(" + this.state.IDFrontView + ")",
                                     backgroundSize: 'cover'
                                 }}>
                            </div>
                            <div className={classes.imageDiv}
                                 style={{
                                     display: 'flex',
                                     alignItems: 'center',
                                     justifyContent: 'center',
                                     height: '75%',
                                     backgroundImage: "url(" + this.state.IDBackView + ")",
                                     backgroundSize: 'cover'
                                 }}>
                            </div>
                        </div>


                        <div className={classes.uploadButtonContainer}>
                            <div><input
                                style={{display: 'none'}}
                                accept="image/*"
                                className={classes.input}
                                id="contained-button-file01"
                                multiple
                                type="file"
                                onChange={(e) => {
                                    this.setState({
                                        IDFrontView: URL.createObjectURL(e.target.files[0]),
                                        IDFrontImage: e.target.files[0]
                                    })
                                }}/>
                                <label htmlFor="contained-button-file01">
                                    <Button variant="contained" color="primary" component="span">
                                        Upload Image
                                    </Button>
                                </label>
                            </div>
                            <div><input
                                style={{display: 'none'}}
                                accept="image/*"
                                className={classes.input}
                                id="contained-button-file02"
                                multiple
                                type="file"
                                onChange={(e) => {
                                    this.setState({
                                        IDBackView: URL.createObjectURL(e.target.files[0]),
                                        IDBackImage: e.target.files[0]
                                    })
                                }}/>
                                <label htmlFor="contained-button-file02">
                                    <Button variant="contained" color="primary" component="span">
                                        Upload Image
                                    </Button>
                                </label>
                            </div>
                        </div>

                    </div>

                    <div className={classes.sideButton_container}>
                        <div className={classes.search_container}>

                            <Button variant="contained" color="success"
                                    onClick={async () => {
                                        await this.registerCustomer();
                                    }}> Register Customer</Button>

                        </div>
                     </div>
                </div>
            </div>

        );
    }
}

export default withStyles(styleSheet)(ManageCustomer)
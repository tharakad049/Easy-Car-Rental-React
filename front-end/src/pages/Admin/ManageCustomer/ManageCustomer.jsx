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

class ManageCustomer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            frontImage: null,
            backImage: null,
            sideImage: null,
            interiorImage: null,

            frontView: null,
            backView: null,
            sideView: null,
            interiorView: null,

            customerDetails: {
                cusId: "",
                cusEmail: "",
                cusRegisterDate: "",
                cusName: "",
                cusNicNumber: "",
                cusLicenseNumber: "",
                cusAddress: "",
                cusContact: "",
            }
        }
    }
  /*  changeStateCarDetails(custId,cstEmail,custRegDate,custName,custNic,custLicense,custAddress,custContact,frontImage,backImage){
        this.setState({
            customerDetails : {
                cusId: custId,
                cusEmail: cstEmail,
                cusRegisterDate: custRegDate,
                cusName: custName,
                cusNicNumber: custNic,
                cusLicenseNumber: custLicense,
                cusAddress: custAddress,
                cusContact: custContact,
            },
            frontView : frontImage,
            backView : backImage,

        })
    }*/
/*    addCustomerImage = async (cusId) => {

        var bodyFormData = new FormData();
        bodyFormData.append('param' , this.state.frontImage);
        bodyFormData.append('param' , this.state.backImage);

        let res = await CustomerService.addCustomerImage(bodyFormData,cusId);
        if (res.data.code===200){alert(res.data.message)}else {
            alert(res.data.message);
        }
    }*/
/*
    addCustomer = async () =>{

        var customerDetails = {
            customerId : this.state.customerDetails.cusId,
            customerEmail  : this.state.customerDetails.cusEmail,
            customerRegDate : this.state.customerDetails.cusRegisterDate,
            customerName : this.state.customerDetails.cusName,
            customerNicNumber : this.state.customerDetails.cusNicNumber,
            customerLicenseNumber : this.state.customerDetails.cusLicenseNumber ,
            customerAddress : this.state.customerDetails.cusAddress,
            customerContact : this.state.customerDetails.cusContact,

        }
        let res = await CustomerService.addCustomer(customerDetails);
        if (res.data.code==200){
            alert(res.data.message);

            this.addCustomerImage(customerDetails.carId);

        }else {
            alert(res.data.message);
        }
    }*/
/*    updateCustomer = async () =>{
        var customerUpdateDetails = {
            customerId : this.state.customerDetails.cusId,
            customerEmail  : this.state.customerDetails.cusEmail,
            customerRegDate : this.state.customerDetails.cusRegisterDate,
            customerName : this.state.customerDetails.cusName,
            customerNicNumber : this.state.customerDetails.cusNicNumber,
            customerLicenseNumber : this.state.customerDetails.cusLicenseNumber ,
            customerAddress : this.state.customerDetails.cusAddress,
            customerContact : this.state.customerDetails.cusContact,
        }

        let res =await CustomerService.updateCustomer(customerUpdateDetails);
        if (res.status===200){
            let front=this.state.frontImage;
            let back=this.state.backImage;
            let list=[front,back]
            let viewList=["Front","Back"]

            for (var i=0; i<list.length; i++){
                if (list[i] != null){
                    let formData = new FormData();
                    formData.append('customerImage',list[i]);
                    await this.updateCustomerImage(formData, customerUpdateDetails.customerId, viewList[i]);
                }
            }

            alert('Customer Details Update SuccessFull..')
        }else {
            alert("Customer update Fail..")
        }
    }*/

/*    updateCustomerImage=async (data,cusId,view) =>{
        let response =await CustomerService.updateCustomerImage(data,cusId,view);
        if (response.status!=200){
            alert("Customer Image Update Fail")
        }
    }*/

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

                            {/*<TextField size={"small"} id="outlined-required" label="Customer Id" variant="outlined" value={this.state.carDetails.customerId}
                                       onChange={(e) => {let formData = this.state.customerDetails
                                           formData.cusId = e.target.value
                                           this.setState({ formData })
                                       }}/>
                            <TextField size={"small"} id="outlined-required" label="Email" variant="outlined" value={this.state.carDetails.customerEmail}
                                       onChange={(e) => {let formData = this.state.customerDetails
                                           formData.cusEmail = e.target.value
                                           this.setState({ formData })
                                       }}/>
                            <TextField size={"small"} id="outlined-required" label="Customer Name" variant="outlined" value={this.state.carDetails.customerName}
                                       onChange={(e) => {let formData = this.state.customerDetails
                                           formData.cusName = e.target.value
                                           this.setState({ formData })
                                       }}/>

                            <FormGroup className="form__group" size={"small"} id="outlined-required" label="Customer Register date" variant="outlined" value={this.state.carDetails.customerRegDate}
                                       onChange={(e) => {let formData = this.state.customerDetails
                                           formData.cusRegisterDate = e.target.value
                                           this.setState({ formData })
                                       }}>
                                <input type="date" placeholder="Customer Register date" required/>
                            </FormGroup>

                            <TextField size={"small"} id="outlined-required" label="Customer Nic Number" variant="outlined" value={this.state.carDetails.customerName}
                                       onChange={(e) => {let formData = this.state.customerDetails
                                           formData.cusNicNumber = e.target.value
                                           this.setState({ formData })
                                       }}/>

                            <TextField size={"small"} id="outlined-required" label="Customer License Number" variant="outlined" value={this.state.carDetails.customerName}
                                       onChange={(e) => {let formData = this.state.customerDetails
                                           formData.cusLicenseNumber = e.target.value
                                           this.setState({ formData })
                                       }}/>

                            <TextField size={"small"} id="outlined-required" label="Customer Address" variant="outlined" value={this.state.carDetails.customerName}
                                       onChange={(e) => {let formData = this.state.customerDetails
                                           formData.cusAddress = e.target.value
                                           this.setState({ formData })
                                       }}/>

                            <TextField size={"small"} id="outlined-required" label="Customer Contact" variant="outlined" value={this.state.carDetails.customerName}
                                       onChange={(e) => {let formData = this.state.customerDetails
                                           formData.cusContact = e.target.value
                                           this.setState({ formData })
                                       }}/>*/}
                            <Input placeholder="Customer Id" type="text" />
                            <Input placeholder="Email" type="text" />
                            <FormGroup className="form__group" size={"small"} id="outlined-required" label="Customer Register date" variant="outlined"
                                       >
                                <input type="date" placeholder="Customer Register date" required/>
                            </FormGroup>

                            <Input placeholder="Customer Name" type="text" />
                            <Input placeholder="Address" type="text" />
                            <Input placeholder="Contact Number" type="text" />
                            <Input placeholder="Identity CArd Number" type="text" />
                            <Input placeholder="Driving License Number" type="text" />

                        </div>

                        <Divider/>

                        <div className={classes.formDividerText2Container}>
                            <h5 style={{color: 'black'}}>ID Front View</h5>
                            <h5 style={{color: 'black'}}>License Front View</h5>
                            <h5 style={{color: 'black'}}>ID Back View</h5>
                            <h5 style={{color: 'black'}}>License Back View</h5>
                        </div>
                        <Divider/>

                        <div className={classes.imageContainer}>
                            <div className={classes.imageDiv}
                                 style={{
                                     display: 'flex',
                                     alignItems: 'center',
                                     justifyContent: 'center',
                                     height: '75%',
                                     backgroundImage: "url(" + this.state.frontImage + ")",
                                     backgroundSize: 'cover'
                                 }}>
                            </div>
                            <div className={classes.imageDiv}
                                 style={{
                                     display: 'flex',
                                     alignItems: 'center',
                                     justifyContent: 'center',
                                     height: '75%',
                                     backgroundImage: "url(" + this.state.backImage + ")",
                                     backgroundSize: 'cover'
                                 }}>
                            </div>
                            <div className={classes.imageDiv}
                                 style={{
                                     display: 'flex',
                                     alignItems: 'center',
                                     justifyContent: 'center',
                                     height: '75%',
                                     backgroundImage: "url(" + this.state.sideImage + ")",
                                     backgroundSize: 'cover'
                                 }}>
                            </div>
                            <div className={classes.imageDiv}
                                 style={{
                                     display: 'flex',
                                     alignItems: 'center',
                                     justifyContent: 'center',
                                     height: '75%',
                                     backgroundImage: "url(" + this.state.interiorImage + ")",
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
                                        frontImage: URL.createObjectURL(e.target.files[0])
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
                                        backImage: URL.createObjectURL(e.target.files[0])
                                    })
                                }}/>
                                <label htmlFor="contained-button-file02">
                                    <Button variant="contained" color="primary" component="span">
                                        Upload Image
                                    </Button>
                                </label>
                            </div>
                            <div><input
                                style={{display: 'none'}}
                                accept="image/*"
                                className={classes.input}
                                id="contained-button-file03"
                                multiple
                                type="file"
                                onChange={(e) => {
                                    this.setState({
                                        sideImage: URL.createObjectURL(e.target.files[0])
                                    })
                                }}
                            />
                                <label htmlFor="contained-button-file03">
                                    <Button variant="contained" color="primary" component="span">
                                        Upload Image
                                    </Button>
                                </label>

                            </div>
                            <div><input
                                style={{display: 'none'}}
                                accept="image/*"
                                className={classes.input}
                                id="contained-button-file04"
                                multiple
                                type="file"
                                onChange={(e) => {
                                    this.setState({
                                        interiorImage: URL.createObjectURL(e.target.files[0])
                                    })
                                }}
                            />
                                <label htmlFor="contained-button-file04">
                                    <Button variant="contained" color="primary" component="span">
                                        Upload Image
                                    </Button>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className={classes.sideButton_container}>
                        <div className={classes.search_container}>
                            <TextField
                                label="Search Here"
                                id="outlined-size-small"
                                variant="outlined"
                                size="small"

                                style={{borderRadius : '20px',width: '70%'}}
                            />
                            <Button variant="outlined" style={{color : 'green'}}>
                                Search
                            </Button>
                        </div>
                        <div className={classes.button_container}>
           {/*                 <Button variant="outlined" style={{color : 'green' , width : '30%'}}
                                    onClick={async () => {
                                        this.addCustomer();
                                    }}
                            >Save</Button>*/}
                            <Button variant="outlined" style={{color : 'blue', width : '30%'}}
                                    onClick={async () => {
                                        this.updateCustomer();
                                    }}
                            >Update</Button>
                            <Button variant="outlined" style={{color : 'red' , width : '30%'}}>Delete</Button>
                        </div>
                        
                        <div className={classes.clearButton_Container}>
                            <ViewAllCarPopUpTable/>
                            <Button variant="outlined" style={{color : 'back' , width : '95%'}}>Clear All</Button>
                        </div>
                     </div>
                </div>
            </div>

        );
    }
}

export default withStyles(styleSheet)(ManageCustomer)
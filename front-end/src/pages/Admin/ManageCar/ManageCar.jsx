import React, {Component} from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import {styleSheet} from "./ManeCarStyle";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Autocomplete from '@material-ui/lab/Autocomplete';
import AdminNavBar from "../../../components/admin/NavBar/index";
import Divider from "@material-ui/core/Divider";
import axios from "../../../axios";

class ManageCar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            frontImage: null,
            backImage: null,
            sideImage: null,
            interiorImage: null,

            frontView:null,
            backView:null,
            sideView:null,
            interiorView:null,

                carDetails : {
                    vehicleId : '',
                    vehicleType : '',
                    numofP : '',
                    transmissionType : '',
                    fuelType :'',
                    registerNum : '',
                    color : '',
                    pricesForDaily : '',
                    pricesForMonthly : '',
                    freeMileage : '',
                    priceForExtraKm : '',
                }
            }
        }

    render() {

        const type = [
            {title: 'Auto'},
            {title: "Manual"}];

        const {classes} = this.props;
        return (
            <div className={classes.mainContainer}>
                <AdminNavBar/>
                <div className={classes.state_Bar_container}></div>
                <div className={classes.form_Container}>
                    <div className={classes.form_backGround}>
                        <div className={classes.form_textFieldForm}>
                            <h4 style={{color: 'white'}}>MANAGE CARS</h4>
                        </div>
                        <Divider/>
                        <div className={classes.formDividerText2Container}>
                            <h5 style={{color: 'black'}}>Car Details</h5>
                        </div>
                        <Divider/>
                        <div className={classes.formTextFieldContainer}>
                            <TextField size={"small"} id="outlined-required" label="Car ID" variant="outlined"/>
                            <TextField size={"small"} id="outlined-required" label="Type" variant="outlined"/>
                            <TextField size={"small"} id="outlined-required" label="Num of Passengers" variant="outlined"/>
                            <Autocomplete id="combo-box-demo" size={"small"} options={[{title: 'Auto'}, {title: "Manual"}]} getOptionLabel={(option) => option.title} style={{width: 180}} renderInput={(params) => <TextField {...params} label="Transmission type." variant="outlined"/>}/>
                            <Autocomplete id="combo-box-demo" size={"small"} options={[{title: 'Auto'}, {title: "Manual"}]} getOptionLabel={(option) => option.title} style={{width: 136}} renderInput={(params) => <TextField {...params} label="Fuel type." variant="outlined"/>}/>
                            <TextField size={"small"} id="outlined-required" label="Registration Number"  style={{width: 200}} variant="outlined"/>
                            <TextField size={"small"} id="outlined-required" label="Color"  variant="outlined" style={{width: 200}}/>

                        </div>
                        <Divider/>
                        <div className={classes.formDividerTextContainer}>
                            <h5 style={{color: 'black'}}>Free mileage for the price and duration</h5>
                            <h5 style={{color: 'black'}}>Prices for the rent durations</h5>
                            <h5 style={{color: 'black'}}>Price for extra KM</h5>
                        </div>
                        <Divider/>
                        <div className={classes.formTextField2Container}>
                            <TextField style={{width: '17%'}} size={"small"} id="outlined-required" label="Daily" variant="outlined"/>
                            <TextField style={{width: '17%'}} size={"small"} id="outlined-required" label="Monthly" variant="outlined"/>
                            <TextField size={"small"} id="outlined-required" label="RS/=" variant="outlined"/>
                            <TextField size={"small"} id="outlined-required" label="KM" variant="outlined"/>
                        </div>
                        <Divider/>
                        <div className={classes.formDividerText2Container}>
                            <h5 style={{color: 'black'}}>Front View</h5>
                            <h5 style={{color: 'black'}}>Back View</h5>
                            <h5 style={{color: 'black'}}>Side View</h5>
                            <h5 style={{color: 'black'}}>Interior</h5>
                        </div>
                        <Divider/>

                        <div className={classes.imageContainer}>
                            <div className={classes.imageDiv}
                                 style={{
                                     display: 'flex',
                                     alignItems: 'center',
                                     justifyContent: 'center',
                                     height: '75%',
                                     backgroundImage: "url(" + this.state.frontView + ")",
                                     backgroundSize: 'cover'
                                 }}>
                            </div>
                            <div className={classes.imageDiv}
                                 style={{
                                     display: 'flex',
                                     alignItems: 'center',
                                     justifyContent: 'center',
                                     height: '75%',
                                     backgroundImage: "url(" + this.state.backView + ")",
                                     backgroundSize: 'cover'
                                 }}>
                            </div>
                            <div className={classes.imageDiv}
                                 style={{
                                     display: 'flex',
                                     alignItems: 'center',
                                     justifyContent: 'center',
                                     height: '75%',
                                     backgroundImage: "url(" + this.state.sideView + ")",
                                     backgroundSize: 'cover'
                                 }}>
                            </div>
                            <div className={classes.imageDiv}
                                 style={{
                                     display: 'flex',
                                     alignItems: 'center',
                                     justifyContent: 'center',
                                     height: '75%',
                                     backgroundImage: "url(" + this.state.interiorView + ")",
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
                                        frontImage: e.target.files[0],
                                        frontView: URL.createObjectURL(e.target.files[0])
                                    })
                                }}/>
                                <label htmlFor="contained-button-file01">
                                    <Button variant="contained" color="primary" component="span">
                                        Upload
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
                                        backImage: e.target.files[0],
                                        backView: URL.createObjectURL(e.target.files[0])
                                    })
                                }}/>
                                <label htmlFor="contained-button-file02">
                                    <Button variant="contained" color="primary" component="span">
                                        Upload
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
                                        sideImage: e.target.files[0],
                                        sideView: URL.createObjectURL(e.target.files[0])
                                    })
                                }}
                            />
                                <label htmlFor="contained-button-file03">
                                    <Button variant="contained" color="primary" component="span">
                                        Upload
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
                                        interiorImage: e.target.files[0],
                                        interiorView: URL.createObjectURL(e.target.files[0])
                                    })
                                }}
                            />
                                <label htmlFor="contained-button-file04">
                                    <Button variant="contained" color="primary" component="span">
                                        Upload
                                    </Button>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className={classes.search_container}>
                        <Button variant="contained" color="success"
                                onClick={async () => {

                                    var carDetails = {
                                        vehicleId : this.state.carDetails.vehicleId,
                                        brand  : this.state.carDetails.vehicleType,
                                        numOfPassenger : this.state.carDetails.numofP,
                                        transmissionType : this.state.carDetails.transmissionType,
                                        fuelType : this.state.carDetails.fuelType,
                                        priceOfRentDurationDaily : this.state.carDetails.pricesForDaily ,
                                        priceOfRentDurationMonthly : this.state.carDetails.pricesForMonthly,
                                        freeMileageForPriceAndDuration : this.state.carDetails.freeMileage,
                                        priceOfExtraKm : this.state.carDetails.priceForExtraKm,
                                        registerNumber : this.state.carDetails.registerNum,
                                        color : this.state.carDetails.color,
                                        state : 'Parking'
                                    }
                                    console.log(this.state.carDetails.type);

                                    axios({
                                        url: 'easy/v1/car/addCar',
                                        method: 'post',
                                        contentType : 'application/json',
                                        data: carDetails,
                                    })
                                        .then(function (response) {
                                            console.log(response);
                                            alert("Car  added Complete");
                                        })
                                        .catch(function (error) {
                                            console.log(error);
                                            alert("Car  add fail..")
                                        });
/*
                                    var bodyFormData = new FormData();

                                    bodyFormData.append('param' , this.state.frontImage);
                                    bodyFormData.append('param' , this.state.backImage);
                                    bodyFormData.append('param' , this.state.sideImage);
                                    bodyFormData.append('param' , this.state.interiorImage);

                                    axios({
                                        method: 'post',
                                        url: 'easy/v1/car/addCarImage?carId=C001',
                                        headers: { "Content-Type": "multipart/form-data" },
                                        data : bodyFormData

                                    })
                                        .then(function (response) {
                                            console.log(response);
                                            alert("Car Image added Complete");
                                        })
                                        .catch(function (error) {
                                            console.log(error);
                                            alert("Car image add fail..")
                                        });*/
                                }}>
                            Upload Images
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styleSheet)(ManageCar)
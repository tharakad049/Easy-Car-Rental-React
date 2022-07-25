import React, {Component} from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import {styleSheet} from "./ManeCarStyle";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Autocomplete from '@material-ui/lab/Autocomplete';
import AdminNavBar from "../../../components/admin/NavBar/index";
import Divider from "@material-ui/core/Divider";
import axios from "../../../axios";
import CarService from "../../../service/CarService";

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
                    carId : "",
                    carType : "",
                    carPassenger : "",
                    carTransmissionType :"",
                    carFuelType :"",
                    carRegisterNum : "",
                    carColor : "",
                    pricesForDaily : "",
                    pricesForMonthly :"",
                    carFreeMileage : "",
                    priceForExtraKm : "",
                }
            }
        }

        addCarImage = async (carId) => {

            var bodyFormData = new FormData();
            bodyFormData.append('param' , this.state.frontImage);
            bodyFormData.append('param' , this.state.backImage);
            bodyFormData.append('param' , this.state.sideImage);
            bodyFormData.append('param' , this.state.interiorImage);

            let res = await CarService.addCarImage(bodyFormData,carId);
            if (res.data.code===200){alert(res.data.message)}else {
                alert(res.data.message);
            }
        }

        addCar = async () =>{

            var carDetails = {
                carId : this.state.carDetails.carId,
                brand  : this.state.carDetails.carType,
                numOfPassenger : this.state.carDetails.carPassenger,
                transmissionType : this.state.carDetails.carTransmissionType,
                fuelType : this.state.carDetails.carFuelType,
                priceOfRentDurationDaily : this.state.carDetails.pricesForDaily ,
                priceOfRentDurationMonthly : this.state.carDetails.pricesForMonthly,
                freeMileageForPriceAndDuration : this.state.carDetails.carFreeMileage,
                priceOfExtraKm : this.state.carDetails.priceForExtraKm,
                registerNumber : this.state.carDetails.carRegisterNum,
                color : this.state.carDetails.carColor,
                state : 'Parking'
            }
            let res = await CarService.addCar(carDetails);
            if (res.data.code==200){
                alert(res.data.message);

                this.addCarImage(carDetails.carId);

            }else {
                alert(res.data.message);
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

                            <TextField onChange={(e) =>{this.state.carDetails.carId=e.target.value;}} size={"small"} id="outlined-required" label="Car ID" variant="outlined"/>
                            <TextField onChange={(e) =>{this.state.carDetails.vehicleType=e.target.value;}} size={"small"} id="outlined-required" label="Type" variant="outlined"/>
                            <TextField onChange={(e) =>{this.state.carDetails.Passenger=e.target.value;}} size={"small"} id="outlined-required" label="Num of Passengers" variant="outlined"/>
                            <Autocomplete id="combo-box-demo" onChange={(event, value) => this.state.carDetails.fuelType =  value.title} size={"small"} options={[{title: 'Auto'}, {title: "Manual"}]} getOptionLabel={(option) => option.title} style={{width: 180}} renderInput={(params) => <TextField {...params} label="Transmission type." variant="outlined"/>}/>
                            <Autocomplete id="combo-box-demo" onChange={(event, value) => this.state.carDetails.fuelType =  value.title} size={"small"} options={[{title: 'Diesel'}, {title: "Petrol"}]} getOptionLabel={(option) => option.title} style={{width: 136}} renderInput={(params) => <TextField {...params} label="Fuel type." variant="outlined"/>}/>
                            <TextField onChange={(e) =>{this.state.carDetails.registerNum=e.target.value;}} size={"small"} id="outlined-required" label="Registration Number"  style={{width: 200}} variant="outlined"/>
                            <TextField onChange={(e) =>{this.state.carDetails.color=e.target.value;}} size={"small"} id="outlined-required" label="Color"  variant="outlined" style={{width: 200}}/>

                        </div>
                        <Divider/>
                        <div className={classes.formDividerTextContainer}>
                            <h5 style={{color: 'black'}}>Prices for the rent durations</h5>
                            <h5 style={{color: 'black'}}>Free mileage for the price and duration</h5>
                            <h5 style={{color: 'black'}}>Price for extra KM</h5>
                        </div>
                        <Divider/>
                        <div className={classes.formTextField2Container}>
                            <TextField onChange={(e) =>{this.state.carDetails.pricesForDaily=e.target.value;}} style={{width: '17%'}} size={"small"} id="outlined-required" label="Daily" variant="outlined"/>
                            <TextField onChange={(e) =>{this.state.carDetails.pricesForMonthly=e.target.value;}} style={{width: '17%'}} size={"small"} id="outlined-required" label="Monthly" variant="outlined"/>
                            <TextField onChange={(e) =>{this.state.carDetails.freeMileage=e.target.value;}} size={"small"} id="outlined-required" label="KM" variant="outlined"/>
                            <TextField onChange={(e) =>{this.state.carDetails.priceForExtraKm=e.target.value;}} size={"small"} id="outlined-required" label="RS/=" variant="outlined"/>
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
                                        backImage: e.target.files[0],
                                        backView: URL.createObjectURL(e.target.files[0])
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
                                        sideImage: e.target.files[0],
                                        sideView: URL.createObjectURL(e.target.files[0])
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
                                        interiorImage: e.target.files[0],
                                        interiorView: URL.createObjectURL(e.target.files[0])
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

                        <Divider/>

                        <div className={classes.button_container}>

                            <Button variant="outlined" style={{color : 'green' , width : '30%'}}>
                                Save
                            </Button>

                            <Button variant="outlined" style={{color : 'blue', width : '30%'}}>
                                Update
                            </Button>

                            <Button variant="outlined" style={{color : 'red' , width : '30%'}}>
                                Delete
                            </Button>


                        </div>

                        <div className={classes.clearButton_Container}>
                            <Button variant="outlined" style={{color : 'back' , width : '95%'}}>
                                Clear All
                            </Button>

                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styleSheet)(ManageCar)
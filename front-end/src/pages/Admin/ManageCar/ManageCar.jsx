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
import ViewAllCarPopUpTable from "../../../components/admin/ViewAllCarTablePopup/carTablePopup";

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

    changeStateCarDetails(vehicleId,vehicleType,numofP,transmissionType,fuelType,registerNum,color,pricesForDaily,pricesForMonthly,freeMileage,priceForExtraKm,frontImage,backImage,sideImage,interiorImage){
        this.setState({
            carDetails : {
                carId : vehicleId,
                carType : vehicleType,
                carPassenger : numofP,
                carTransmissionType : transmissionType,
                carFuelType :fuelType,
                carRegisterNum : registerNum,
                carColor : color,
                pricesForDaily : pricesForDaily,
                pricesForMonthly : pricesForMonthly,
                carFreeMileage : freeMileage,
                priceForExtraKm : priceForExtraKm,
            },
            frontView : frontImage,
            backView : backImage,
            sideView : sideImage,
            interiorView : interiorImage,

        })
    }

        addCarImage = async (carId) => {

            var bodyFormData = new FormData();
            bodyFormData.append('param' , this.state.frontImage);
            bodyFormData.append('param' , this.state.backImage)
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

    updateCar = async () =>{
        var carUpdateDetails = {
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

        let res =await CarService.updateCar(carUpdateDetails);
        if (res.status===200){
            let front=this.state.frontImage;
            let back=this.state.backImage;
            let side=this.state.sideImage;
            let interior=this.state.interiorImage;
            let list=[front,back,side,interior]
            let viewList=["Front","Back","Side","Interior"]

            for (var i=0; i<list.length; i++){
                if (list[i] != null){
                    let formData = new FormData();
                    formData.append('carImage',list[i]);
                    await this.updateCarImage(formData, carUpdateDetails.carId, viewList[i]);
                }
            }

            alert('Car Details Update SuccessFull..')
        }else {
            alert("Car update Fail..")
        }
    }

    updateCarImage=async (data,carId,view) =>{
        let response =await CarService.updateCarImage(data,carId,view);
        if (response.status!=200){
            alert("Car Image Update Fail")
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

                            <TextField size={"small"} id="outlined-required" label="Car ID" variant="outlined" value={this.state.carDetails.carId}
                                       onChange={(e) => {let formData = this.state.carDetails
                                       formData.carId = e.target.value
                                       this.setState({ formData })
                                        }}/>
                            <TextField size={"small"} id="outlined-required" label="Brand" variant="outlined" value={this.state.carDetails.carType}
                                       onChange={(e) => {let formData = this.state.carDetails
                                           formData.carType = e.target.value
                                           this.setState({ formData })
                                       }}  />
                            <TextField size={"small"} id="outlined-required" label="Num of Passengers" variant="outlined" value={this.state.carDetails.carPassenger}
                                       onChange={(e) => {let formData = this.state.carDetails
                                           formData.carPassenger = e.target.value
                                           this.setState({ formData })
                                       }}/>
{/*
                            <Autocomplete id="combo-box-demo" size={"small"} options={[{title: 'Auto'}, {title: "Manual"}]} getOptionLabel={(option) => option.title} style={{width: 180}} renderInput={(params) => <TextField {...params} label="Transmission type." variant="outlined"/>} value={this.state.carDetails.transmissionType} onChange={(e) => {this.setState({carDetails : {transmissionType : e.target.value}})}}/>
                            <Autocomplete id="combo-box-demo" size={"small"} options={[{title: 'Diesel'}, {title: "Petrol"}]} getOptionLabel={(option) => option.title} style={{width: 136}} renderInput={(params) => <TextField {...params} label="Fuel type." variant="outlined"/>} value={this.state.carDetails.fuelType} onChange={(e) => {this.setState({carDetails : {fuelType : e.target.value}})}}/>
*/}
                            <TextField label="Transmission type." variant="outlined" value={this.state.carDetails.carTransmissionType} size={"small"} InputLabelProps={{shrink: true,}}
                                onChange={(e) => {
                                    let formData = this.state.carDetails
                                    formData.carTransmissionType = e.target.value
                                    this.setState({ formData })
                                }}/>
                            <TextField label="Fuel type." variant="outlined" value={this.state.carDetails.carFuelType} size={"small"}
                                       onChange={(e) => {
                                    let formData = this.state.carDetails
                                    formData.carFuelType = e.target.value
                                    this.setState({ formData })
                                }}/>
                            <TextField size={"small"} id="outlined-required" label="Registration Number"  style={{width: 200}} variant="outlined" value={this.state.carDetails.carRegisterNum}
                                       onChange={(e) => {let formData = this.state.carDetails
                                           formData.carRegisterNum = e.target.value
                                           this.setState({ formData })
                                       }}/>
                            <TextField size={"small"} id="outlined-required" label="Color"  variant="outlined" style={{width: 200}} value={this.state.carDetails.carColor}
                                       onChange={(e) => {let formData = this.state.carDetails
                                           formData.carColor = e.target.value
                                           this.setState({ formData })
                                       }}/>

                        </div>

                        <Divider/>

                        <div className={classes.formDividerTextContainer}>
                            <h5 style={{color: 'black'}}>Prices for the rent durations</h5>
                            <h5 style={{color: 'black'}}>Free mileage for the price and duration</h5>
                            <h5 style={{color: 'black'}}>Price for extra KM</h5>
                        </div>

                        <Divider/>

                        <div className={classes.formTextField2Container}>

                            <TextField size={"small"} id="outlined-required" label="Daily" variant="outlined"  style={{width: '17%'}} value={this.state.carDetails.pricesForDaily}
                                       onChange={(e) => {let formData = this.state.carDetails
                                           formData.pricesForDaily = e.target.value
                                           this.setState({ formData })
                                       }} />
                            <TextField style={{width: '17%'}} size={"small"} id="outlined-required" label="Monthly" variant="outlined" value={this.state.carDetails.pricesForMonthly}
                                       onChange={(e) => {let formData = this.state.carDetails
                                           formData.pricesForMonthly = e.target.value
                                           this.setState({ formData })
                                       }}/>
                            <TextField size={"small"} id="outlined-required" label="KM" variant="outlined"  value={this.state.carDetails.priceForExtraKm}
                                       onChange={(e) => {let formData = this.state.carDetails
                                           formData.priceForExtraKm = e.target.value
                                           this.setState({ formData })
                                       }}/>
                            <TextField size={"small"} id="outlined-required" label="RS/=" variant="outlined" value={this.state.carDetails.carFreeMileage}
                                       onChange={(e) => {let formData = this.state.carDetails
                                           formData.carFreeMileage = e.target.value
                                           this.setState({ formData })
                                       }} />

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
                            <Button variant="outlined" style={{color : 'green' , width : '30%'}}
                                                onClick={async () => {
                                                    this.addCar();
                                                }}
                                                    >Save</Button>
                            <Button variant="outlined" style={{color : 'blue', width : '30%'}}
                                                onClick={async () => {
                                                    this.updateCar();
                                                 }}
                                                    >Update</Button>
                            <Button variant="outlined" style={{color : 'red' , width : '30%'}}>Delete</Button>
                        </div>

                        <div className={classes.clearButton_Container}>
                            <ViewAllCarPopUpTable data={{changeStateCarDetails:this.changeStateCarDetails.bind(this)}}/>

                            <Button variant="outlined" style={{color : 'back' , width : '95%'}}>Clear All</Button>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styleSheet)(ManageCar)
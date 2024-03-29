import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {styleSheet} from "./RentalRequestStyle";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import Radio from '@material-ui/core/Radio';
import Box from "@material-ui/core/Box";
import customerService from "../../../service/CustomerService";
import rentalRequestService from "../../../service/rentalRequestService";
import Typography from "@material-ui/core/Typography";
import MuiButton from '@material-ui/core/Button';

class RentalRequest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            selectedValue: '',
            carRentFormDisplay: 'block',
            paymentFormDisplay: 'none',
            nextStepButtonDisplay: 'block',
            requestButtonDisplay: 'none',

            brand: '',
            type: '',
            transmission: '',
            numOfp: '',
            carImage: null,

            damageSlipImage: null,
            damageSlipImageView: null,
        }
    }

    clearAllState = () => {
        this.setState({
            show: false,
            selectedValue: '',
            carRentFormDisplay: 'block',
            paymentFormDisplay: 'none',
            nextStepButtonDisplay: 'block',
            requestButtonDisplay: 'none',


            brand: '',
            type: '',
            transmission: '',
            numOfp: '',
            carImage: null,

            damageSlipImage: '',
            damageSlipImageView: '',

            pickupDateAndTime: '',
            returnDateAndTime: '',
            startPoint: '',
            endPoint: '',


        })
    }


    handleClose = () => {
        this.setState({show: false})
        this.clearAllState()
    }
    handleShow = () => {
        this.setState({show: true})
    }

    loadData = () => {
        this.setState({
            brand: this.props.data.carName,
            type: this.props.data.carType,
            transmission: this.props.data.automatic,
            numOfp: this.props.data.numofp,
            carImage: this.props.data.imgUrl,
        })
    }

    /* getCar=async (carId) =>{
         let res = await CarService.getCarById(carId);
         if (res!='ERR_BAD_REQUEST'){
              this.setState({
                  brand : res.data.brand,
                  type : res.data.vehicleType,
                  transmission : res.data.transmissionType,
                  numOfp : res.data.numOfPassenger,
              })
             let response = await CarService.getCarImage(carId,"Side");
              if (response!='ERR_BAD_REQUEST'){
                  this.setState({
                      carImage : URL.createObjectURL(response.data)
                  })
              }
             this.setState({loading : false})
         }

     }*/
    componentDidMount() {
        this.loadData()
    }

    checkCustomerLicense = async (customerId) => {
        let response = await customerService.checkLicenseByCustomer(customerId);
        if (response.code != 'ERR_BAD_REQUEST') {
            this.setState({
                carRentFormDisplay: 'none',
                paymentFormDisplay: 'block'
            })
        } else {
            alert("customer Licence not Found")
        }

    }

    sendRentalRequest = async () => {

        let damageSlip = new FormData();
        damageSlip.append('param', this.state.damageSlipImage)
        let resToken = await rentalRequestService.uploadDamageSlip(this.props.data.customerId, damageSlip);
        if (resToken.code != 'ERR_BAD_REQUEST') {
            if (resToken.status == 200) {
                var sendRequestData = {
                    customerId: this.props.data.customerId,
                    vehicleId: this.props.data.carId,
                    pickupDateAndTime: this.state.pickupDateAndTime,
                    returnDateAndTime: this.state.returnDateAndTime,
                    startPoint: this.state.startPoint,
                    endPoint: this.state.endPoint,
                    damageSlip: resToken.data.data
                }

                let response = await rentalRequestService.sendRentalRequest(sendRequestData);
                if (response.code != 'ERR_BAD_REQUEST') {
                    if (response.status == 200) {
                        alert("Request send success..!");
                        this.handleClose()
                    }
                } else {
                    alert("Request send Fail.")
                }
            }
        }
    }

    render() {
        const {classes} = this.props
        return (
            <>
            <button className=" w-50 car_item-btn car_btn-rent" style={{color: 'white', backgroundColor: '#5b0065'}}
                    onClick={() => {
                        this.handleShow()
                    }}
            >Rent Now
            </button>

            <Modal
                size={"lg"}
                show={this.state.show}
                onHide={this.handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className={classes.mainContainer}>
                        <div style={{
                            display : this.state.carRentFormDisplay
                        }} className={classes.rentCarForm}>
                        <div className={classes.topContainer}>
                            <div className={classes.contentContainer}>
                                <div style={{
                                    backgroundImage: "url(" + this.state.carImage + ")",
                                    backgroundSize: 'cover'
                                }} className={classes.imageContainer}>
                                </div>
                                <div className={classes.imageDetailsContainer}>
                                    <div className={classes.textContainers}>
                                        <Box fontFamily="Monospace" style={{color: 'white'}} fontSize="15px"
                                             fontWeight={300} m={1}>
                                            Car Brand :
                                        </Box>
                                        <Box fontFamily="Monospace" style={{color: 'white'}} fontSize="15px"
                                             fontWeight={300} m={1}>
                                            {this.state.brand}
                                        </Box>
                                    </div>
                                    <div className={classes.textContainers}>
                                        <Box fontFamily="Monospace" style={{color: 'white'}} fontSize="15px"
                                             fontWeight={300} m={1}>
                                            Car Category :
                                        </Box>
                                        <Box fontFamily="Monospace" style={{color: 'white'}} fontSize="15px"
                                             fontWeight={300} m={1}>
                                            {this.state.type}
                                        </Box>
                                    </div>
                                    <div className={classes.textContainers}>
                                        <Box fontFamily="Monospace" style={{color: 'white'}} fontSize="15px"
                                             fontWeight={300} m={1}>
                                            Transmission Type :
                                        </Box>
                                        <Box fontFamily="Monospace" style={{color: 'white'}} fontSize="15px"
                                             fontWeight={300} m={1}>
                                            {this.state.transmission}
                                        </Box>
                                    </div>
                                    <div className={classes.textContainers}>
                                        <Box fontFamily="Monospace" style={{color: 'white'}} fontSize="15px"
                                             fontWeight={300} m={1}>
                                            Number Of Passengers :
                                        </Box>
                                        <Box fontFamily="Monospace" style={{color: 'white'}} fontSize="15px"
                                             fontWeight={300} m={1}>
                                            {this.state.numOfp}
                                        </Box>

                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className={classes.bottomContainer}>

                            <div className={classes.pickupAndReturnDateAndTimeContainer}>
                                <form className={classes.container} noValidate>
                                    <TextField
                                        id="datetime-local"
                                        label="PickUp Date And Time"
                                        type="datetime-local"
                                        defaultValue="2017-05-24T10:30"
                                        onChange={(e) => {
                                            this.setState({
                                                pickupDateAndTime: e.target.value
                                            })

                                        }}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </form>
                                <form className={classes.container} noValidate>
                                    <TextField
                                        id="datetime-local"
                                        label="Return Date And Time"
                                        type="datetime-local"
                                        defaultValue="2017-05-24T10:30"
                                        onChange={(e) => {
                                            this.setState({
                                                returnDateAndTime: e.target.value
                                            })

                                        }}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </form>

                            </div>
                            <div className={classes.containerPickUpAndReturnLocation}>
                                <TextField id="filled-search" label="Type Starting point" variant="filled"/>
                                <TextField id="filled-search" label="Type End of journey" variant="filled"/>

                            </div>
                            <div className={classes.driverContainer}>
                                <label htmlFor="">Do you need a driver?</label>

                                <div className={classes.radioContainer}>
                                    <div className={classes.radioButtonContainer}>
                                        <label htmlFor="">yes</label>
                                        <Radio
                                            value="y"
                                            color="primary"
                                            label={"Yes"}
                                            checked={this.state.selectedValue === 'y'}
                                            onChange={(e) => {
                                                this.setState({selectedValue: e.target.value})
                                            }}
                                        />
                                    </div>
                                    <div className={classes.radioButtonContainer}>
                                        <label htmlFor="">No</label>
                                        <Radio
                                            value="n"
                                            color="secondary"
                                            checked={this.state.selectedValue === 'n'}
                                            onChange={(e) => {
                                                this.setState({selectedValue: e.target.value})
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{display:
                        this.state.paymentFormDisplay}} className={classes.PaymentFormContainer}>
                        <div className={classes.paymentContainer}>
                            <div className={classes.leftContainerF}>
                                <div className={classes.damageSlipImageContainer}>

                                    <div style={{
                                            backgroundImage: "url(" + this.state.damageSlipImageView + ")",
                                            backgroundSize: 'cover'
                                        }} className={classes.damageSlipImage}></div>

                                    <div className={classes.browsButton}>
                                        <input
                                            hidden={true}
                                            accept="image/*"
                                            className={classes.input}
                                            id="contained-button-file"
                                            multiple
                                            type="file"
                                            onChange={(e) => {
                                                this.setState({
                                                    damageSlipImage: e.target.files[0],
                                                    damageSlipImageView: URL.createObjectURL(e.target.files[0])

                                                })
                                            }}
                                        />
                                        <label htmlFor="contained-button-file">
                                            <MuiButton style={{width: '200px'}} variant="contained" color="secondary"
                                                       component="span"
                                            >
                                                Upload
                                            </MuiButton>
                                        </label>
                                    </div>


                                </div>
                            </div>

                            <div className={classes.rightContainerF}>

                                <div className={classes.bankDetailsContainer}>

                                    <div className={classes.paragraphBankDetails}>
                                        <Typography style={{}} variant="subtitle1" gutterBottom>
                                            <b>
                                                body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                                blanditiis tenetur
                                                unde suscipit, quam beatae rerum inventore consectetur, neque doloribus,
                                                cupiditate numquam
                                                dignissimos laborum fugiat deleniti?
                                            </b>
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>
                    Close
                </Button>

                <Button variant="primary"
                        style={{display: this.state.nextStepButtonDisplay}}
                        onClick={() => {
                            if (this.state.selectedValue == 'n') {
                                this.checkCustomerLicense('C-001')
                            } else {
                                this.setState({
                                    carRentFormDisplay: 'none',
                                    nextStepButtonDisplay: 'none',
                                    paymentFormDisplay: 'block',
                                    requestButtonDisplay: 'block'
                                })
                            }
                        }}
                >Go to Next Step</Button>

                <Button variant="primary"
                        style={{display: this.state.requestButtonDisplay}}
                        onClick={() => {
                            this.sendRentalRequest()
                        }}
                >Request Send</Button>
            </Modal.Footer>
            </Modal>
        </>
    )
    }
}

export default withStyles(styleSheet)(RentalRequest)

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ReactButton from "@material-ui/core/Button";
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.css';
import {RiAddCircleFill} from "react-icons/ri";
import {styleSheet} from "./registerForm";
import withStyles from "@material-ui/core/styles/withStyles";
import AlertDialog from "../../../components/Customer/AlertDilog";
import TextField from '@material-ui/core/TextField';
import Box from "@material-ui/core/Box";
import Autocomplete from "@material-ui/lab/Autocomplete";
import customerService from "../../../service/CustomerService";


function RegisterCustomer(props) {
    const [show, setShow] = useState(false);
    const [createAccDisplay,setCreateAccDisplay]=useState('block')
    const [customerDetailsDisplay,setCustomerDetailsDisplay]=useState('none')
    const [imageVerifyDisplay,setImageVerifyDisplay]=useState('none')
    const [btn1Display,setBtn1Display]=useState('block')
    const [btn2Display,setBtn2Display]=useState('none')
    //const [btn3Display,setBtn3Display]=useState('none')

    const [IDFrontImage,setIDFrontImage]=useState(null)
    const [IDBackImage,setIDBackImage]=useState(null)
    const [IDFrontView,setIDFrontView]=useState(null)
    const [IDBackView,setIDBackView]=useState(null)

    const [id,setId]=useState('')
    const [email,setEmail]=useState('')
    const [nic,setNic]=useState('')
    const [drivingLicence,setDrivingLicence]=useState('')
    const [address,setAddress]=useState('')
    const [contactNum,setContactNum]=useState('')
    const [userName,setUserName]=useState('')
    const [password,setPassword]=useState('')

    const [TextLabel,setTextLabel]=useState('LICENCE OR NIC NUMBER')

    const [textFieldColor,setTextFieldColor]=useState('white')
    const [textNICOrLicenceState,setTextNICOrLicenceState]=useState(true)
    const [NICOrLicenceValue,setNICOrLicenceValue]=useState('')

    const clearAllState=() =>{
        setIDFrontImage(null)
        setIDBackImage(null)
        setIDFrontView(null)
        setIDFrontView(null)
        setIDBackView(null)
        setId('')
        setEmail('')
        setNic('')
        setDrivingLicence('')
        setAddress('')
        setContactNum('')
        setUserName('')
        setPassword('')
        setTextLabel('LICENCE OR NIC NUMBER')
        setTextNICOrLicenceState(true)

    }
    const ValidationTextField = withStyles({
        root: {
            '& input:valid + fieldset': {
                borderColor: 'green',
                borderWidth: 2,
            },
            '& input:invalid + fieldset': {
                borderColor: 'red',
                borderWidth: 2,
            },
            '& input:valid:focus + fieldset': {
                borderLeftWidth: 6,
                padding: '4px !important', // override inline-style
            },
            width : '80%'
        },

    })(TextField);

    const handleClose = () =>{
        setShow(false);
    }
    const handleShow = () => setShow(true);

    const handleForm=() =>{
        setCreateAccDisplay('block')
        setCustomerDetailsDisplay('none')
        setImageVerifyDisplay('none')
        setBtn2Display("none")
        //setBtn3Display("none")
        setBtn1Display('block')
        clearAllState()
    }

    const {classes} = props;

    return (
        <>
            <ReactButton
                startIcon={<RiAddCircleFill/>}
                style={{color: '#ffffff', TbPower :{color: '#ffffff'}, flexShrink:1}}
                onClick={() =>{handleShow();}}

            >Register</ReactButton>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header >
                    <Modal.Title><b>Easy Car Rental System REGISTER Form</b></Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div  className={classes.registerContainer}>
                        <div style={{display : createAccDisplay}} className={classes.createUserAccountContainer}>
                            <div className={classes.userHeaderContainer}></div>
                            <div className={classes.textFieldContainer}>
                                <div style={{ width : '100%' , height : '100px' , display : 'flex', flexDirection :'column' ,justifyContent : 'space-evenly'}}>
                                    <Box fontFamily="Monospace" fontSize="h6.fontSize" m={1}>
                                        USER NAME
                                    </Box>
                                    <TextField
                                        onChange={(e) => {
                                            let data=e.target.value
                                            setUserName(data)
                                        }}
                                        className={classes.margin}
                                        placeholder={"Enter the UserName"}
                                        size={'small'}
                                        variant="outlined"
                                        id="validation-outlined-input"
                                    />
                                </div>

                                <div style={{width : '100%' , height : '100px' , display : 'flex', flexDirection :'column' ,justifyContent : 'space-evenly'}}>
                                    <Box fontFamily="Monospace" fontSize="h6.fontSize" m={1}>
                                        PASSWORD
                                    </Box>
                                    <TextField
                                        onChange={(e) => {
                                            let data=e.target.value
                                            setPassword(data)
                                        }}
                                        className={classes.margin}
                                        placeholder={"Enter the password"}
                                        size={'small'}
                                        variant="outlined"
                                        id="validation-outlined-input"
                                    />
                                </div>

                                <div style={{width : '100%' , height : '100px' , display : 'flex', flexDirection :'column' ,justifyContent : 'space-evenly'}}>
                                    <Box fontFamily="Monospace" fontSize="h6.fontSize" m={1}>
                                        RE ENTER PASSWORD
                                    </Box>
                                    <TextField
                                        style={{
                                            backgroundColor: textFieldColor ,
                                        }}
                                        onChange={(e) => {
                                            if (e.target.value==password){
                                                setTextFieldColor('green')
                                            }
                                        }}
                                        className={classes.margin}
                                        placeholder={"Re Enter password"}
                                        size={'small'}
                                        variant="outlined"
                                        id="validation-outlined-input"
                                    />
                                </div>

                            </div>

                        </div>


                        {/*
//================================================================================================================
*/}




                        <div style={{display : customerDetailsDisplay}} className={classes.createUserAccountContainer}>
                            <div className={classes.textFieldContainerCustomerDetails}>

                                <div style={{ width : '100%' , height : '100px' , display : 'flex', flexDirection :'column' ,justifyContent : 'space-between'}}>
                                    <Box fontFamily="Monospace" fontSize="h6.fontSize" m={1}>
                                        Email
                                    </Box>
                                    <TextField
                                        onChange={(e) => {
                                            let data=e.target.value
                                            setEmail(data)
                                        }}
                                        style={{width : '97.5%'}}
                                        className={classes.margin}
                                        placeholder={"Enter the Email"}
                                        size={'small'}
                                        variant="outlined"
                                        id="validation-outlined-input"
                                    />
                                </div>

                                <div style={{width : '100%' , height : '120px' , display : 'flex', flexDirection :'row' ,justifyContent : 'space-evenly'}}>
                                    <div style={{width : '50%' , height : '100%' , display : 'flex', flexDirection :'column' ,justifyContent : 'space-around' }}>
                                        <Box fontFamily="Monospace" fontSize="h6.fontSize" m={1}>
                                            {TextLabel}
                                        </Box>
                                        <TextField
                                            value={NICOrLicenceValue}
                                            disabled={textNICOrLicenceState}
                                            onChange={(e) => {
                                                let data=e.target.value
                                                if (TextLabel=='ENTER NIC NUMBER'){
                                                    setNICOrLicenceValue(data)
                                                    setDrivingLicence('')
                                                    setNic(data)
                                                }else if(TextLabel=='ENTER Driving Licence'){
                                                    setNICOrLicenceValue(data)
                                                    setNic('')
                                                    setDrivingLicence(data)
                                                }
                                            }}
                                            style={{width: '93%'}}
                                            className={classes.margin}
                                            placeholder={"Enter"}
                                            size={'small'}
                                            variant="outlined"
                                            id="validation-outlined-input"
                                        />
                                    </div>
                                    <div style={{width : '50%' , height : '100%' , display : 'flex', flexDirection :'column',justifyContent : 'space-around'}}>
                                        <Box fontFamily="Monospace" fontSize="h6.fontSize" m={1}>
                                            Licence Or NIC Number
                                        </Box>
                                        <Autocomplete
                                            size={'small'}
                                            id="combo-box-demo"
                                            options={[{title: 'Driving Licence'}, {title: 'NIC Number'}]}
                                            getOptionLabel={(option) => option.title}
                                            style={{width: 200}}
                                            renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined"/>}
                                            onChange={(event, value) => {
                                                switch (value.title) {
                                                    case "NIC Number" :
                                                        setNICOrLicenceValue('')
                                                        setTextNICOrLicenceState(false)
                                                        setDrivingLicence('');
                                                        setTextLabel('ENTER NIC NUMBER');break;

                                                    case  "Driving Licence" :
                                                        setNICOrLicenceValue('')
                                                        setTextNICOrLicenceState(false)
                                                        setNic('')
                                                        setTextLabel('ENTER Driving Licence');break;

                                                    default : setTextNICOrLicenceState(true)
                                                }
                                            }}
                                        />
                                    </div>
                                </div>

                                <div style={{width : '100%' , height : '100px' , display : 'flex', flexDirection :'column' ,justifyContent : 'space-between'}}>
                                    <Box fontFamily="Monospace" fontSize="h6.fontSize" m={1}>
                                        Customer Address
                                    </Box>
                                    <TextField
                                        onChange={(e) => {
                                            let data=e.target.value
                                            setAddress(data)
                                            console.log(data)
                                        }}
                                        style={{width : '97.5%'}}
                                        className={classes.margin}
                                        placeholder={"Re Enter password"}
                                        size={'small'}
                                        variant="outlined"
                                        id="validation-outlined-input"
                                    />
                                </div>
                                <div style={{width : '100%' , height : '100px' , display : 'flex', flexDirection :'column' ,justifyContent : 'space-between'}}>
                                    <Box fontFamily="Monospace" fontSize="h6.fontSize" m={1}>
                                        Customer Contact Number
                                    </Box>
                                    <TextField
                                        onChange={(e) => {
                                            let num=e.target.value
                                            setContactNum(num)
                                            console.log(num)
                                        }}
                                        style={{width : '97.5%'}}
                                        className={classes.margin}
                                        placeholder={"Re Enter password"}
                                        size={'small'}
                                        variant="outlined"
                                        id="validation-outlined-input"
                                    />
                                </div>
                            </div>
                        </div>


                        {/*
//=========================================================================================================================================
*/}


                        <div style={{display : imageVerifyDisplay , }}  className={classes.createUserAccountContainer}>
                            <div className={classes.textContainer}>
                                <Box fontWeight="fontWeightMedium" m={1}>
                                    Select Your Onerability
                                </Box>
                            </div>
                            <div className={classes.comboBoxContainer}>
                                <Autocomplete
                                    size={"small"}
                                    id="combo-box-demo"
                                    options={[{title: 'Driving Licence'}, {title: 'NIC Number'}]}
                                    getOptionLabel={(option) => option.title}
                                    style={{width: 300}}
                                    renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined"/>}
                       /*             onChange={(event, value) => {

                                        switch (value.title) {
                                            case "NIC Number" :
                                                let data1 = this.state.customerDerails.nic='';
                                                this.setState({
                                                    data1,
                                                    TextLabel: "NIC NUMBER",

                                                });break;
                                            case  "Driving Licence" :
                                                let data2 = this.state.customerDerails.drivingLicence='';
                                                this.setState({
                                                    data2,
                                                    TextLabel: "Driving Licence",
                                                });break;
                                        }
                                        console.log(value.title)
                                    }}*/
                                />

                            </div>
                            <div  className={classes.ImageVerifyContainer}>
                                <div className={classes.imageCover}>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        boxShadow : '5px 5px 10px 1.5px',
                                        height: '85%',
                                        width: '48%',
                                        /*   backgroundImage: "url(" + this.state.IDFrontView + ")",*/
                                        backgroundSize: 'cover'
                                    }}>
                                    </div>

                                    <div  style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        boxShadow : '5px 5px 10px 1.5px',
                                        height: '85%',
                                        width: '48%',
                                        /*        backgroundImage: "url(" + this.state.IDBackView + ")",*/
                                        backgroundSize: 'cover'
                                    }}>
                                    </div>

                                </div>
                                <div className={classes.browsButtonContainer}>
                                    <input
                                        style={{display: 'none'}}
                                        accept="image/*"
                                        className={classes.input}
                                        id="contained-button-file02"
                                        multiple
                                        type="file"
                                        />

                                    <label htmlFor="contained-button-file02">
                                        <ReactButton variant="contained" color="primary" component="span">
                                            Upload Image
                                        </ReactButton>
                                    </label>


                                    <input
                                        style={{display: 'none'}}
                                        accept="image/!*"
                                        className={classes.input}
                                        id="contained-button-file02"
                                        multiple
                                        type="file"
                                    />

                                    <label htmlFor="contained-button-file02">
                                        <ReactButton variant="contained" color="primary" component="span">
                                            Upload Image
                                        </ReactButton>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                </Modal.Body>
                <Modal.Footer>

                    <AlertDialog data={{setStateRegisterForm : handleClose.bind(),setCreateAccHide : handleForm.bind()}}/>

                    <Button style={{display : btn1Display}} variant="primary"
                            onClick={async () =>{
                                if (userName!=''){
                                    let res = await customerService.ifExistCustomerUserAccount(userName);
                                    if (res.code != 'ERR_BAD_REQUEST') {
                                        alert(res.data.message);
                                        setCreateAccDisplay('none')
                                        setCustomerDetailsDisplay('block')
                                        setBtn1Display('none')
                                       // setBtn3Display('none')
                                        setBtn2Display('block')
                                    } else {
                                        alert(res.response.data.message);

                                    }
                                }else {
                                    alert("TextField is Empty")
                            }
                            }}
                    >Next Step</Button>
                    <Button style={{display : btn2Display }}  variant="primary"
                            onClick={async () =>{
                                let res = await customerService.ifExistEmail(email);
                                if (res.code != 'ERR_BAD_REQUEST') {
                                setCreateAccDisplay('none')
                                setCustomerDetailsDisplay('none')
                                setImageVerifyDisplay('block')
                                //setBtn2Display('none')
                                //setBtn3Display('block')
                                } else {
                                    alert(res.response.data.message);
                                }
                            }}
                    >Next Step</Button>
        {/*             <Button style={{display : btn3Display}}  variant="primary"
                            onClick={() =>{
                                setBtn3Display('block')
                            }}
                    >Register</Button>*/}
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default withStyles(styleSheet)(RegisterCustomer)



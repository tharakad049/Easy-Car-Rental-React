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


function RegisterCustomer(props) {
    const [show, setShow] = useState(false);
    const [createAccHide,setCreateAccHide]=useState('block')
    const [customerDetailsHide,setCustomerDetailsHide]=useState('none')

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

    const hadleForm=() =>{
        setCreateAccHide('block')
        setCustomerDetailsHide('none')
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
                    <Modal.Title><b>Eacy Car Rental Syatem REGISTER Form</b></Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div  className={classes.registerContainer}>
                        <div style={{display : createAccHide}} className={classes.createUserAccountContainer}>
                            <div className={classes.userHeaderContainer}></div>
                            <div className={classes.textFieldContainer}>
                                <div style={{ width : '100%' , height : '100px' , display : 'flex', flexDirection :'column' ,justifyContent : 'space-evenly'}}>
                                    <Box fontFamily="Monospace" fontSize="h6.fontSize" m={1}>
                                        USER NAME
                                    </Box>
                                    <ValidationTextField
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
                                    <ValidationTextField
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
                                    <ValidationTextField
                                        className={classes.margin}
                                        placeholder={"Re Enter password"}
                                        size={'small'}
                                        variant="outlined"
                                        id="validation-outlined-input"
                                    />
                                </div>

                            </div>

                        </div>

                        <div style={{display : customerDetailsHide}} className={classes.createUserAccountContainer}>Hello There</div>

                    </div>

                </Modal.Body>
                <Modal.Footer>

                    <AlertDialog data={{setStateRegisterForm : handleClose.bind(),setCreateAccHide : hadleForm.bind()}}/>

                    <Button variant="primary"
                            onClick={() =>{
                                setCreateAccHide('none')
                                setCustomerDetailsHide('block')
                            }}
                    >Next Step</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default withStyles(styleSheet)(RegisterCustomer)



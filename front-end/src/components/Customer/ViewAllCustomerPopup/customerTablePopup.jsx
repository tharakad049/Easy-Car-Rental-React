import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.css';

import carService from "../../../service/CarService";

import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TablePagination from "@material-ui/core/TablePagination";


const columns = [
    {id: 'cusId', label: "CarId", minWidth: 170},
    {id: 'cuaEmail', label: "Brand", minWidth: 100},
    {id: 'cusDate', label: 'Number Of Passenger', minWidth: 170, align: 'right'},
    {id: 'cusName', label: "Transmission Type", minWidth: 170, align: 'right'},
    {id: 'cusNicNumber', label: 'Fuel Type', minWidth: 170, align: 'right'},
    {id: 'cusLicenseNumber', label: 'Register Number', minWidth: 170, align: 'right'},
    {id: 'cusAddress', label: 'Color', minWidth: 170, align: 'right'},
    {id: 'cusContact', label: 'Prices for the rent Daily', minWidth: 170, align: 'right'},
];

function createData(cusId, cuaEmail, cusDate, cusName, cusNicNumber, cusLicenseNumber, cusAddress, cusContact) {
    return {
        cusId, cuaEmail, cusDate, cusName, cusNicNumber, cusLicenseNumber, cusAddress, cusContact
    };
}

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
});

const rows = [];


function PopUpTable(props) {
    const loadCustomerDetails=async (cusId, cuaEmail, cusDate, cusName, cusNicNumber, cusLicenseNumber, cusAddress, cusContact) =>{
        /*        let frontImage;
                let backImage;
                let sideImage;
                let interiorImage;

                let res1 =  carService.getCarImage(carId,"Front");
                if (res1.status===200) {
                    frontImage=URL.createObjectURL(res1.data)
                }
                let res2 =  carService.getCarImage(carId,"Back");
                if (res1.status===200) {
                    backImage=URL.createObjectURL(res2.data)
                }
                let res3 =  carService.getCarImage(carId,"Side");
                if (res1.status===200) {
                    sideImage=URL.createObjectURL(res3.data)
                }
                let res4 =   carService.getCarImage(carId,"Interior");
                if (res1.status===200) {
                    interiorImage=URL.createObjectURL(res4.data)
                }*/
        props.data.changeStateCarDetails(cusId, cuaEmail, cusDate, cusName, cusNicNumber, cusLicenseNumber, cusAddress, cusContact);

    }


    const getAllCustomers = async () => {
        let res = await carService.getAllCar();
        if (res.data.code == 200) {

            var i = 0;
            for (let dataKey of res.data.data) {
                rows[i] = createData(dataKey.customerId, dataKey.customerEmail, dataKey.customerRegDate,
                    dataKey.customerName, dataKey.customerNicNumber, dataKey.customerLicenseNumber, dataKey.customerAddress,
                    dataKey.priceOfRentDurationDaily,dataKey.priceOfRentDurationMonthly,
                    dataKey.customerContact)
                i++;
            }
            setShow(true);
        }
    }

    const [show, setShow] = useState(false);
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <div>
            {/* <div>{props.data.unit}</div>*/}

            <Button variant="primary" onClick={() => {
                getAllCars();

            }}>
                View All Cars
            </Button>
            <Modal
                size={"xl"}
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Car Details Table
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/*{/table/}*/}
                    <Paper className={classes.root}>
                        <TableContainer className={classes.container}>
                            < Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableRow>
                                        {columns.map((column) => (
                                            <TableCell
                                                key={column.id}
                                                align={column.align}
                                                style={{minWidth: column.minWidth}}
                                            >
                                                {column.label}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody


                                >
                                    {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                                        return (
                                            <TableRow hover role="checkbox" tabIndex={-1} key={row.code}

                                                      onClick={async () =>{
                                                          loadCarDetails(row.carId, row.brand, row.numOfp, row.TransType, row.fuelType, row.regNum, row.color, row.priceDaily, row.priceMonthly, row.freeMileage, row.pOfExtraKm)

                                                          setShow(false)
                                                      }
                                                      }
                                            >
                                                {columns.map((column) => {
                                                    const value = row[column.id];
                                                    return (
                                                        <TableCell key={column.id} align={column.align}
                                                        >
                                                            {column.format && typeof value === 'number' ? column.format(value) : value}
                                                        </TableCell>
                                                    );
                                                })}
                                            </TableRow>
                                        );
                                    })}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[10, 25, 100]}
                            component="div"
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </Paper>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default PopUpTable;

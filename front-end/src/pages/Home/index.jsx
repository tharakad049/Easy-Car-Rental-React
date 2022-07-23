import React, {Component} from "react";
import {Container, Form, FormGroup, ListGroup} from "reactstrap";
import "./style.css";
import Row from "react-bootstrap/Row";
import Link from "@material-ui/core/Link";
import Col from "react-bootstrap/Col";
import Slider from "react-slick";
import "../../../src/pages/Ui/slider.css";
import ListGroupItem from "react-bootstrap/ListGroupItem";

const quickLinks = [
    {
        path: "/about",
        display: "About",
    },

    {
        path: "#",
        display: "Privacy Policy",
    },

    {
        path: "/cars",
        display: "Car Listing",
    },
    {
        path: "/blogs",
        display: "Blog",
    },

    {
        path: "/contact",
        display: "Contact",
    },
    {
        path: "#",
        display: "HotLines",
    },
    {
        path: "#",
        display: "Services",
    },
];

const settings = {
    fade: true,
    speed: 2000,
    autoplaySpeed: 3000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
};


class HomePage extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        const date = new Date();
        const year = date.getFullYear();
        return (
            <header className="header">
                <div className="header__top">
                    <Container>
                        <Row>
                            <Col lg="6" md="6" sm="6">
                                <div className="header__top__left">
                                    <span>Need Help?</span>
                                    <span className="header__top__help">
                                    <i class="ri-phone-fill"></i> +9477-8580393, <span>071-6092570</span>
                                 </span>
                                </div>
                            </Col>
                            <Col lg="6" md="6" sm="6">
                                <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                                    <Link to="#" className=" d-flex align-items-center gap-1">
                                        <i class="ri-login-circle-line"></i> Login
                                    </Link>
                                    <Link to="#" className=" d-flex align-items-center gap-1">
                                        <i class="ri-user-line"></i> Register
                                    </Link>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="header__middle">
                    <Container>
                        <Row>
                            <Col lg="4" md="3" sm="4">
                                <div className="logo">
                                    <h1>
                                        <Link to="/home" className=" d-flex align-items-center gap-2">
                                            <i class="ri-car-line"></i>
                                            <span>
                                                Eacy Car Rental <br/> Service
                                        </span>
                                        </Link>
                                    </h1>
                                </div>
                            </Col>
                            <Col lg="3" md="3" sm="4">
                                <div className="header__location d-flex align-items-center gap-2">
                        <span>
                          <i class="ri-earth-line"></i>
                        </span>
                                    <div className="header__location-content">
                                        <h4>Sri Lanka</h4>
                                        <h6>New Town, Katharagama</h6>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="3" md="3" sm="4">
                                <div className="header__location d-flex align-items-center gap-2">
                        <span>
                          <i class="ri-time-line"></i>
                        </span>
                                    <div className="header__location-content">
                                        <h4>Sunday to Saturday</h4>
                                        <h6>9am - 7pm</h6>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="2" md="3" sm="0" className=" d-flex align-items-center justify-content-end ">
                                <button className="header__btn btn ">
                                    <Link to="/contact">
                                        <i class="ri-phone-line"></i> Request a call
                                    </Link>
                                </button>
                            </Col>
                        </Row>
                    </Container>
                </div>

                {/*
 //---------------------------------------------------------------------------------------------------------------------------------
*/}

                <div className="main__navbar">
                    <Container>
                        <div className="navigation__wrapper d-flex align-items-center justify-content-between">

                            <div className="menu">
                                <a to="/home" role="button" className="nav-links" tabIndex="0" href="#"><i className="ri-home-line"></i>Home </a>
                                <a to="/customer" role="button" className="nav-links" tabIndex="0" href="#"><i className="ri-customer-service-line"></i>Customer</a>
                                <a to="/cars" role="button" className="nav-links" tabIndex="0" href="#"><i className="ri-car-line"></i>Cars</a>
                                <a to="/service" role="button" className="nav-links" tabIndex="0" href="#"><i className="ri-service-line"></i>Service</a>
                                <a to="/contact" role="button" className="nav-links" tabIndex="0" href="#"><i className="ri-contacts-line"></i>Contact</a>
                            </div>

                            <div className="nav__right">
                                <div className="search__box">
                                    <input type="text" placeholder="Search"/>
                                    <span>
                                          <i className="ri-search-line"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>

                {/*
//-------------------------------------------------------------------------------------------------------------------------------------
*/}

                <div>
                    <Slider {...settings} className="hero__slider">
                        <div className="slider__item slider__item-01 mt0">
                            <Container>
                                <div className="slider__content ">
                                    <h2 className="text-light mb-3">SUPER DEAL NEED CAR?</h2>
                                    <h1 className="text-light mb-4">CAR FOR RENT NOW</h1>
                                    <h1 className="text-light mb-4">LOWEST ONE WAY CAR RENTAL </h1>

                                    <button className="btn reserve__btn mt-4">
                                        <Link to=""><h4>Rent Now</h4></Link>
                                    </button>
                                </div>
                            </Container>
                        </div>
                    </Slider>
                </div>


                {/*
                //------------------------------------------------------------------------------------------------------------------------------------
*/}


                <div className="hero__form">
                    <Container>
                        <Row className="form__row">
                            <Col lg="4" md="4">
                                <div className="find__cars-left">
                                    <h2>Find your best car here</h2>
                                </div>
                            </Col>
                            <Col lg="8" md="8" sm="12">

                                <div className="main_div">
                                    <Form className="form">
                                        <div className=" d-flex align-items-center justify-content-between flex-wrap">
                                            <FormGroup className="form__group">
                                                <input type="text" placeholder="From address" required/>
                                            </FormGroup>

                                            <FormGroup className="form__group">
                                                <input type="text" placeholder="To address" required/>
                                            </FormGroup>

                                            <FormGroup className="form__group">
                                                <input type="date" placeholder="Journey date" required/>
                                            </FormGroup>

                                            <FormGroup className="form__group">
                                                <input
                                                    className="journey__time"
                                                    type="time"
                                                    placeholder="Journey time"
                                                    required
                                                />
                                            </FormGroup>
                                            <FormGroup className="select__group">
                                                <select>
                                                    <option value="ac">AC Car</option>
                                                    <option value="non-ac">Non AC Car</option>
                                                </select>
                                            </FormGroup>

                                            <FormGroup className="form__group">
                                                <button className="btn find__car-btn">Find Car</button>
                                            </FormGroup>
                                        </div>
                                    </Form>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>


                {/*
 //-----------------------------------------------------------------------------------------------------------------------------------------
*/}


                {/*
//-------------------------------------------------------------------------------------------------------------------------
*/}


                <footer className="footer">
                    <Container>
                        <Row>
                            <Col lg="4" md="4" sm="12">
                                <div className="logo footer__logo">
                                    <h1>
                                        <Link to="/home" className=" d-flex align-items-center gap-2">
                                            <i className="ri-car-line"></i>
                                            <span>
                                                <b>Rental Car</b> <br/>  Service
                                             </span>
                                        </Link>
                                    </h1>
                                </div>
                                <p className="footer__logo-content">This project is designed
                                    so as to be used by Car Rental Company specializing in renting
                                    cars to customers. It is an online system through which customers
                                    can view available cars, register, view profile and book car.
                                    The advancement in Information Technology and internet
                                    penetration has greatly enhanced various business processes
                                    and communication between companies (services provider) and
                                    their customers of which car rental industry is not left out.</p>

                            </Col>

                            <Col lg="2" md="4" sm="6">
                                <div className="mb-4">
                                    <h5 className="footer__link-title">Quick Links</h5>
                                    <ListGroup>{quickLinks.map((item, index) => (
                                            <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                                                <Link to={item.path}>{item.display}</Link>
                                            </ListGroupItem>
                                        ))}
                                    </ListGroup>
                                </div>
                            </Col>

                            <Col lg="3" md="4" sm="6">
                                <div className="mb-4">
                                    <h5 className="footer__link-title mb-4">Head Office</h5>
                                    <p className="office__info">N0:- 350, Main Street, Colombo Road, Katharagama</p>
                                    <p className="office__info">Phone:- +9477-8580393 , +9471-6092570</p>
                                    <p className="office__info">Email:- dilanrental13@gmail.com</p>
                                    <p className="office__info">Opening:- 9am - 7pm</p>
                                    <p className="office__info">Branches :- Mathara / Galle / Tango</p>
                                    <p className="office__info">Visit & Booking :- Totally fee</p>
                                </div>
                            </Col>

                            <Col lg="3" md="4" sm="12">
                                <div className="mb-4">
                                    <h5 className="footer__link-title">Your Votes</h5>
                                    <p className="section__description">Subscribe our Page</p>
                                    <div className="newsletter">
                                        <input type="email" placeholder="Email"/>
                                        <span>
                                          <i className="ri-send-plane-line"></i>
                                        </span>
                                    </div>
                                </div>
                                <a href="#" className="login100-social-item bg1"><i className="ri-facebook-fill"></i></a>
                                <a href="#" className="login100-social-item bg1"><i className="ri-whatsapp-line"></i></a>
                                <a href="#" className="login100-social-item bg1"><i className="ri-instagram-fill"></i></a>
                                <a href="#" className="login100-social-item bg1"><i className="ri-twitter-fill"></i></a>
                            </Col>

                            <Col lg="12">
                                <div className="footer__bottom">
                                    <p className="section__description d-flex align-items-center  color white justify-content-center gap-1 pt-4">
                                        <i className="ri-copyright-line"></i>Copyright {year}, Developed by Dilan Tharaka . All rights reserved.                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </footer>


            </header>
        );
    }
}
export default (HomePage)


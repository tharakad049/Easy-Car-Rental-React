import React, {Component} from "react";
import {Container, Form, FormGroup} from "reactstrap";
import "./style.css";
import Row from "react-bootstrap/Row";
import Link from "@material-ui/core/Link";
import Col from "react-bootstrap/Col";
import NavLink from "react-bootstrap/NavLink";
import Slider from "react-slick";
import "../../../src/pages/Ui/slider.css";

const navLinks = [
    {
        path: "/home",
        display: "Home",
    },
    {
        path: "/customer",
        display: "Customer",
    },
    {
        path: "/cars",
        display: "Cars",
    },

    {
        path: "/service",
        display: "Service",
    },
    {
        path: "/contact",
        display: "Contact",
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


                <div className="main__navbar">
                    <Container>
                        <div className="navigation__wrapper d-flex align-items-center justify-content-between">

                            <div className="menu">
                                {navLinks.map((item, index) => (
                                    <NavLink
                                        to={item.path}
                                        className={(navClass) =>
                                            navClass.isActive ? "nav__active nav__item" : "nav__item"
                                        }
                                        key={index}
                                    >
                                        {item.display}
                                    </NavLink>
                                ))}
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


                <div>
                    <Slider {...settings} className="hero__slider">
                        <div className="slider__item slider__item-01 mt0">
                            <Container>
                                <div className="slider__content ">
                                    <h4 className="text-light mb-3">For Rent $70 Per Day</h4>
                                    <h1 className="text-light mb-4">Reserve Now and Get 50% Off</h1>

                                    <button className="btn reserve__btn mt-4">
                                        <Link to="">Reserve Now</Link>
                                    </button>
                                </div>
                            </Container>
                        </div>

{/*                        <div className="slider__item slider__item-02">
                            <Container>
                                <div className="slider__content ">
                                    <h4 className="text-light mb-3">For Rent $70 Per Day</h4>
                                    <h1 className="text-light mb-4">Reserve Now and Get 50% Off</h1>

                                    <button className="btn reserve__btn mt-4">
                                        <Link to="/cars">Reserve Now</Link>
                                    </button>
                                </div>
                            </Container>
                        </div>

                        <div className="slider__item slider__item-03 mt0">
                            <Container>
                                <div className="slider__content ">
                                    <h4 className="text-light mb-3">For Rent $70 Per Day</h4>
                                    <h1 className="text-light mb-4">Reserve Now and Get 50% Off</h1>

                                    <button className="btn reserve__btn mt-4">
                                        <Link to="/cars">Reserve Now</Link>
                                    </button>
                                </div>
                            </Container>
                        </div>*/}
                    </Slider>
                </div>

                <div className="hero__form">
                    <Container>
                        <Row className="form__row">
                            <Col lg="4" md="4">
                                <div className="find__cars-left">
                                    <h2>Find your best car here</h2>
                                </div>
                            </Col>
                            <Col lg="8" md="8" sm="12">

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
                            </Col>
                        </Row>
                    </Container>
                </div>


            </header>
        );
    }
}
export default (HomePage)


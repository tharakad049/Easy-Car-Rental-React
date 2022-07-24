import React, {Component} from "react";
import "./style.css";

class CustomerNavBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props
        return (
            <nav className="navigationWrapper">
                <div className="logoWrapper">
                    <span className="stylish">EASY</span>
                    <span className="logo">CAR RENTAL</span>
                </div>
                <ul className="navigation">
                    <li className="parent"><a className="link" href="#">Home</a></li>
                    <li className="parent"><a className="link" href="#">Update User Information</a></li>
                    <li className="parent" id="clients"><a className="link" href="#"><i className="fas fa-minus"></i>Rent A Car <i className="fas fa-plus"></i></a></li>
                    <li className="parent" id="services">
                        <a className="link" href="#"><i className="fas fa-minus"></i> Check Request Status <i className="fas fa-plus"></i></a>
                        <ul className="subnavigation">
                            <li><a className="link" href="#">Rent Car</a>
                            </li><li><a className="link" href="#">Special Services</a>
                        </li></ul>
                    </li>
                    <li className="parent"><a className="link" href="#">Contact</a></li>
                </ul>
            </nav>
        );
    };
}

export default CustomerNavBar
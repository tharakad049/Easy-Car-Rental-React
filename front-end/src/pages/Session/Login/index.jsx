import React, {Component} from "react";
import "./login.css";

class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header>
                <div id="loginform"><h2 id="headerTitle">Login</h2>
                    <div>
                        <div className="row">
                            <label>Username</label>
                            <input type="text" placeholder="Enter your username"/></div>
                        <div className="row">
                            <label>Password</label>
                            <input type="password" placeholder="Enter your password"/></div>
                        <div id="button" className="row">
                            <button>Log in</button>
                        </div>
                    </div>
                    <div id="alternativeLogin">
                        <label>Or sign in with:</label>
                        <div id="iconGroup"><a href="#" id="facebookIcon">
                        </a><a href="#" id="twitterIcon"></a><a
                            href="#" id="googleIcon"></a>
                        </div>
                    </div>
                </div>*/}

                <body>
                <div className="bg-img">
                    <div className="content">
                        <h2>Welcome To EASY Car Rental Service</h2>
                        <header>Login Form</header>
                        <form action="#">
                            <div className="field">
                                <span className="ri-phone-fill"></span>
                                <input type="text" required placeholder="Email or Phone"/>
                            </div>
                            <div className="field space">
                                <span className="ri-lock-password-line"></span>
                                <input type="password" className="pass-key" required placeholder="Password"/>

                            </div>
                            <div className="pass">
                                <a href="#">Forgot Password?</a>
                            </div>
                            <div className="field">
                                <input type="submit" value="LOGIN"/>
                            </div>
                        </form>
                        <div className="login">Or login with</div>
                        <div className="links">
                            <div className="facebook">
                                <i className="fab fa-facebook-f"><span>Facebook</span></i>
                            </div>
                            <div className="instagram">
                                <i className="fab fa-instagram"><span>Instagram</span></i>
                            </div>
                        </div>
                        <div className="signup">Don't have account ?
                            <a href="#"> Signup Now</a>
                        </div>
                    </div>
                </div>

                </body>
            </header>
        );
    };
}

export default (Login)
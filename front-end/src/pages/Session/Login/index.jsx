import React, {Component} from "react";
import "../../Session/Login/style.css";

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
                </div>
            </header>
        );
    };
}

export default (Login)
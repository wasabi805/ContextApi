import React, {Component} from "react";
import trdLogo from "../../assets/images/trd-sport-vector-logo.png";
import {ThemeContext} from "../contexts/ThemeContext";

class NavBarPresenter extends Component{
    static contextType = ThemeContext;

    render(){
        console.log(this.context , 'what is this.context?');

        const {isLightTheme, light, dark} = this.context;
        const theme = isLightTheme ? light : dark;

        return (
            <nav id={"nav-bar"}
                 style={{
                     background : theme.ui,
                     color : theme.syntax
                 }} >
                <a href={"/"} className="badge">
                    <img src={trdLogo} alt={""} />
                </a>

                <ul className="links">
                    <li>
                        <a href=""> Home</a>
                    </li>
                    <li>
                        <a href=""> About</a>
                    </li>
                    <li>
                        <a href=""> Products</a>
                    </li>
                    <li>
                        <a href=""> Contact</a>
                    </li>
                </ul>
            </nav>
        );
    }

};

export default NavBarPresenter;

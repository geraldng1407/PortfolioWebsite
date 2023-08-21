import React from "react";
// import Typed from "react-typed";
import { TypeAnimation } from "react-type-animation";
import "./Header.scss";

const Header = () => {
    return (
        <div className="header">
            <div className="navbar">
                <img
                    className="navbar__profile"
                    src="letter-g.png"
                    alt="personal"
                />
                <a
                    className="navbar__button"
                    href="mailto:gerald.ng.2021@scis.smu.edu.sg"
                >
                    Contact
                </a>
            </div>
            <div className="header__content">
                {/* <Typed
                    className={"header__content__title"}
                    strings={["Gerald's Journey Into Machine Learning and Cybersecurity"]}
                    typeSpeed={50}
                /> */}
                <TypeAnimation
                    className={"header__content__title"}
                    sequence={[
                        "Gerald's Journey Into Machine Learning",
                        2000,
                        "Gerald's Journey Into Cybersecurity",
                        2000,
                    ]}
                    // wrapper="span"
                    speed={50}
                    // style={{ fontSize: "2em", display: "inline-block" }}
                    repeat={Infinity}
                />
                <p>From Software Engineer to ML and Cyber Expert</p>
                <img className="header__png" src="computer.svg" alt="hacker" />
                <ul>
                    <li>
                        <a href="https://github.com/geraldng1407">
                            <span>
                                <i className="fab fa-github fa-2x"></i>
                            </span>
                        </a>
                    </li>
                    {/* <li>
                        <a href="#">
                            <span>
                                <i className="fab fa-gitlab fa-2x"></i>
                            </span>
                        </a>
                    </li> */}
                    {/* <li>
                        <a href="#">
                            <i className="fab fa-twitter fa-2x"></i>
                        </a>
                    </li> */}
                    <li>
                        <a href="https://www.linkedin.com/in/nggerald/">
                            <i className="fab fa-linkedin-in fa-2x"></i>
                        </a>
                    </li>
                    {/* <li>
                        <a href="#">
                            <i className="fab fa-angellist fa-2x"></i>
                        </a>
                    </li> */}
                </ul>
                <div className="bounce">
                    <i className="fas fa-chevron-down fa-2x"></i>
                </div>
            </div>
        </div>
    );
};
export default Header;

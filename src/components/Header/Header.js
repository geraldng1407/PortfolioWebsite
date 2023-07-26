import React from "react";

import "./Header.scss";

const Header = () => {
    return (
        <div className="header">
            <div className="navbar">
                <img
                    className="navbar__profile"
                    src="Logo.svg"
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
                <h1>Exploring Cybersecurity and Machine Learning</h1>
                <p>
                    Started with Software Engineering but want to explore the
                    world of Cybersecurity and Machine Learning
                </p>
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

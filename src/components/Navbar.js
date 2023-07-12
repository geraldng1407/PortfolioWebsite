import {
    MDBBtn,
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarLink,
} from "mdb-react-ui-kit";
import Styles from "./Styles.module.css";

export default function Layout() {
    return (
        <MDBNavbar expand="lg" className="shadow-0">
            <MDBContainer className="justify-content-between">
                <MDBNavbarBrand href="#">
                    <img
                        src="Logo.svg"
                        alt="logo"
                        style={{ "max-width": "12%" }}
                    ></img>
                </MDBNavbarBrand>{" "}
                <MDBNavbarNav right fullWidth={false}>
                    <MDBNavbarLink
                        active
                        aria-current="page"
                        href="https://www.linkedin.com/in/nggerald/"
                        target="_blank"
                        rel="noopener"
                        className={Styles["navbar-button"]}
                    >
                        Say Hello
                    </MDBNavbarLink>
                </MDBNavbarNav>
            </MDBContainer>
        </MDBNavbar>
    );
}

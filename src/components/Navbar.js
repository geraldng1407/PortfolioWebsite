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

export default function Layout() {
    return (
        <MDBNavbar expand="lg" className="shadow-0">
            <MDBContainer className="justify-content-between">
                <MDBNavbarBrand href="#">
                    <img
                        src="Logo.svg"
                        alt="logo"
                        style={{ "max-width": "15%" }}
                    ></img>
                </MDBNavbarBrand>{" "}
                <MDBNavbarNav right fullWidth={false}>
                    <MDBNavbarLink active aria-current="page" href="#">
                        Home
                    </MDBNavbarLink>
                    <MDBNavbarLink href="#">Features</MDBNavbarLink>
                    <MDBNavbarLink href="#">Pricing</MDBNavbarLink>
                </MDBNavbarNav>
            </MDBContainer>
        </MDBNavbar>
    );
}

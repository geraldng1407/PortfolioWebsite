import { MDBContainer } from "mdb-react-ui-kit";
import Styles from "./Styles.module.css";
export default function HomePage() {
    return (
        <MDBContainer className="mt-5 justify-content-center">
            <MDBContainer className="d-flex justify-content-center">
                <h1 className={Styles["home-page-title"]}>
                    Exploring Cybersecurity and Machine Learning
                </h1>
            </MDBContainer>
            <MDBContainer className="d-flex justify-content-center mt-3">
                <h3 className="text-center mx-auto">
                    Started with Software Engineering but want to explore the
                    world of Cybersecurity and Machine Learning
                </h3>
            </MDBContainer>
            {/* <MDBContainer className="d-flex justify-content-center mt-5">
                <img
                    src="avataaars.svg"
                    alt="profilepicture"
                    style={{ "max-width": "20%" }}
                ></img>{" "}
            </MDBContainer> */}
            <MDBContainer className="d-flex justify-content-center mt-5">
                <img src="computer.svg" alt="profilepicture"></img>{" "}
            </MDBContainer>
        </MDBContainer>
    );
}

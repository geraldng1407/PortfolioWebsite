import { MDBContainer } from "mdb-react-ui-kit";
import Styles from "./Styles.module.css";

export default function HomePage() {
    return (
        <div>
            <div className={Styles["about-background"]}>
                <MDBContainer className="d-flex justify-content-center pt-5">
                    <h1 className={Styles["about-title"]}>
                        Hi, I'm Gerald. Nice to meet you.
                    </h1>
                </MDBContainer>

                <MDBContainer className="d-flex justify-content-center">
                    <p
                        className={`text-center ${Styles["about-description"]} mx-auto`}
                    >
                        Hey there, I'm Gerald, a computer science student at
                        Singapore Management University, specializing in
                        cybersecurity and artificial intelligence. Through
                        school projects, self-learning, and an enriching
                        internship, I honed my skills in software engineering.
                        However, it was the immense potential and ever-growing
                        opportunities in the fields of cybersecurity and
                        artificial intelligence that truly captivated me. I
                        believe that these areas play a vital role in the tech
                        industry and are poised for significant technological
                        advancements in the near future.
                    </p>
                </MDBContainer>
            </div>
            <div className={`${Styles["about-skills"]} ${Styles["about-fullstack"]}`}>
                <MDBContainer>
                    <h2>Full Stack Developer</h2>
                    <p>
                        Design has been always part of me.I always aim to
                        simplicity on every projects.
                    </p>
                    <h4>Things I can do for you</h4>
                    <p>UI Design, Web Design</p>
                    <h4>Design Tools</h4>
                    <ul>
                        <li>Adobe xd</li>
                        <li>Adobe Photoshop CC</li>
                    </ul>
                </MDBContainer>
                <MDBContainer>
                    <h2>UI Designer</h2>
                    <p>
                        Design has been always part of me.I always aim to
                        simplicity on every projects.
                    </p>
                    <h4>Things I can do for you</h4>
                    <p>UI Design, Web Design</p>
                    <h4>Design Tools</h4>
                    <ul>
                        <li>Adobe xd</li>
                        <li>Adobe Photoshop CC</li>
                    </ul>
                </MDBContainer>
            </div>
        </div>
    );
}

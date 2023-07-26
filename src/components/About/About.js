import React from "react";

import "./About.scss";

const About = () => {
    return (
        <React.Fragment>
            <div className="about">
                <div className="about__content">
                    <h1>
                        Hi, I'm Gerald. <br /> Nice to meet you.
                    </h1>
                    <p>
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
                </div>
            </div>
            <div className="about__skill">
                <div className="about__skill__designer">
                    <h2>Full Stack Developer</h2>
                    <p>
                        Dynamic full-stack developer crafting seamless web
                        experiences with a passion for innovation and
                        problem-solving.
                    </p>
                    <h4>Tech Stack</h4>
                    <ul>
                        <li>Java</li>
                        <li>Javascript</li>
                        <li>React</li>
                        <li>React Native</li>
                        <li>Vue</li>
                        <li>Spring Boot</li>
                        <li>SQL</li>
                    </ul>
                </div>
                <div className="about__skill__developer">
                    <h2>Machine Learning Engineer</h2>
                    <p>Coming soon!</p>
                </div>
                <div className="about__skill__developer">
                    <h2>Cybersecurity Analyst</h2>
                    <p>Coming soon!</p>
                </div>
            </div>
        </React.Fragment>
    );
};

export default About;

import React from "react";
import ProjectItem from "./ProjectItem";
import "./Projects.scss";

const SmartInventory = "Smart Inventory";
const SmartInventoryContent =
    "Our web app revolutionizes food inventory tracking at home, enabling informed decisions, waste reduction, and expiration date checks.";
const CreatedWithSmartInventory = "#SpringBoot, #React.js, #SQL";
const SourceSmartInventory = "https://github.com/hongyao38/SmartInventory";

const EcOptimise = "EcOptimise";
const EcOptimiseContent =
    "Our project tackles energy waste in spaces, reducing facilities costs through a section-based booking system.";
const CreatedWithEcOptimise = "#React.js";
const SourceEcOptimise =
    "https://github.com/Yogesh352/facility-management-frontend";

const MovieRecommender = "Movie Recommendation";
const MovieRecommenderContent =
    "This project implements a simple movie recommender system using cosine similarity between movie vectors.";
const CreatedWithMovieRecommender = "#Scikit-Learn";
const SourceMovieRecommender =
    "https://github.com/geraldng1407/Movie-Recommendation-System";

const Projects = () => {
    return (
        <div className="wrapper">
            <h1>My Recent Projects</h1>
            <div className="projects">
                <ProjectItem
                    header={MovieRecommender}
                    content={MovieRecommenderContent}
                    created={CreatedWithMovieRecommender}
                    img="MovieRecommender.jpg"
                    source={SourceMovieRecommender}
                />
                <ProjectItem
                    header={SmartInventory}
                    content={SmartInventoryContent}
                    created={CreatedWithSmartInventory}
                    img="SmartInventory.PNG"
                    source={SourceSmartInventory}
                />
                <ProjectItem
                    header={EcOptimise}
                    content={EcOptimiseContent}
                    created={CreatedWithEcOptimise}
                    img="EcOptimise.PNG"
                    source={SourceEcOptimise}
                />
            </div>
            <a
                className="projects__button"
                href="https://github.com/geraldng1407"
            >
                More on Github
            </a>
        </div>
    );
};

export default Projects;

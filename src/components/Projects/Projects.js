import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import output3 from "../../Assets/Projects/output3.png";
import chatify from "../../Assets/Projects/chatify.png";
import chef from "../../Assets/Projects/chef.jpeg";
import art from "../../Assets/Projects/art.png";
import we from "../../Assets/Projects/we.jpg";
import je from "../../Assets/Projects/je.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Economic-Intelligence"
              description="This project utilizes the Federal Reserve Economic Data (FRED) API and Python's Pandas library to gather, clean, and analyze economic data.The project walks through the process of pulling down data for various economic indicators, cleaning and joining the data, and using the FRED API to obtain up-to-date data."
              ghLink="https://github.com/TABREZ-96/Economic-Intelligence"
              demoLink="https://github.com/TABREZ-96/Economic-Intelligence/blob/main/main.ipynb"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={output3}
              isBlog={false}
              title="V0ice-0f-Customer"
              description="This project aims to perform sentiment analysis on Amazon product reviews in order to gain insights into customer opinions and satisfaction.Amazon reviews using natural language processing and machine learning techniques."
              ghLink="https://github.com/TABREZ-96/Voice-of-the-Customer"
              demoLink="https://github.com/TABREZ-96/Voice-of-the-Customer/blob/main/sentiment.py"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={we}
              isBlog={false}
              title="Storm-Tracker"
              description="Introducing Weather App, a powerful and intuitive application that helps you stay informed about the weather conditions in your area and around the world. With the app, you can easily check current weather conditions.The Weather App uses RESTful API to access up-to-date weather data from a reliable source, ensuring that the information you receive is accurate and reliable."
              ghLink="https://github.com/TABREZ-96/StormTracker"
              demoLink="https://tabrez-96.github.io/StormTracker/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={art}
              isBlog={false}
              title="Photo-To-Art"
              description="Creating art from what we see is nothing new and creating paintings and drawings from photos is no different. The ability to quickly and easily create a sellable work of art is invaluable. Photo art is a fun and creative way to create original art or share memories with loved ones. Change your images into treasured artwork that can be displayed for everyone to enjoy."
              ghLink="https://github.com/TABREZ-96/Photo-To-Art"
              demoLink="https://github.com/TABREZ-96/Photo-To-Art/blob/gp-pages/Art.py"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={je}
              isBlog={false}
              title="Sudoku-Genie"
              description="This project contains a Python implementation of a Sudoku solver. It uses a backtracking algorithm to solve the puzzle.The solver can be used by calling the solve() function and passing it a 9x9 grid represented as a 2D array. Empty cells in the grid should be represented as 0."
              ghLink="https://github.com/TABREZ-96/SudokuGenie"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chef}
              isBlog={false}
              title="Snap-Chef"
              description="Introducing our exciting new project, Recipe Generation from Food Images! Imagine having the ability to simply snap a photo of a delicious dish and have the recipe automatically generated for you. No more endless scrolling through cookbooks or searching the web. With our innovative technology, your next culinary creation is just a click away! Say goodbye to the frustration of recipe hunting and hello to effortless cooking inspiration. Join us on this tasty journey and discover the magic of Recipe Generation from Food Images."
              ghLink=""
       
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

import { Container } from "./styles";
import Meet from "../../assets/meet.jpg"
import express from "../../assets/express-js.svg"
import mongo from "../../assets/mongodb.svg"
import nodejs from "../../assets/nodejs.svg";
import shopify from "../../assets/shopify.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
// import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import { Fade } from 'react-awesome-reveal';
export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <Fade animateIn="fadeInLeft">
          <h2>About me</h2>
        </Fade>
        <Fade animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
          Hi there! I'm Meet Navapara, a passionate Full Stack Developer with hands-on experience in building scalable web applications using modern JavaScript frameworks like React and Node.js.
             </p>
        </Fade>
        <Fade animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
          I specialize in crafting responsive front-end interfaces, integrating RESTful APIs, and designing efficient back-end architectures with Express and MongoDB.
          </p>
        </Fade>
        <Fade animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
          I thrive in Agile environments, collaborate seamlessly with cross-functional teams, and have a strong focus on delivering smooth user experiences and optimized performance.
          </p>
        </Fade>
        <Fade animateIn="fadeInLeft" delay={400}>
          <div className="education">
            <h3>Education:</h3>
            <h4> Master of Computer Applications (MCA)</h4>
            <p>Jain University, Bangalore | July 2023 - Present</p>
            <p>9.0 CGPA</p>
          </div>
        </Fade>
        <Fade animateIn="fadeInLeft" delay={550}>
          <div className="experience">
             <h3>Experience:</h3><h4>Software Developer</h4>
            <p>Binary Bird Technologies | February 2022 - April 2025</p>
            <p>Surat, India</p>
          </div>
        </Fade>

        <Fade animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </Fade>
        <div className="hard-skills">
         
          <div className="hability">
            <Fade animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </Fade>
          </div>
          <div className="hability">
            <Fade animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={reactIcon} alt="React" />
            </Fade>
          </div>
          <div className="hability">
            <Fade animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={express} alt="Express" />
            </Fade>
          </div>
          <div className="hability">
            <Fade animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={typescriptIcon} alt="Typescript" />
            </Fade>
          </div>
          <div className="hability">
            <Fade animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={vueIcon} alt="Vue" />
            </Fade>
          </div>
          <div className="hability">
            <Fade animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={nodejs} alt="node" />
            </Fade>
          </div>
          <div className="hability">
            <Fade animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={mongo} alt="Mongodb" />
            </Fade>
          </div>
          <div className="hability">
            <Fade animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={htmlIcon} alt="Html" />
            </Fade>
          </div>
          <div className="hability">
            <Fade animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={cssIcon} alt="Css" />
            </Fade>
          </div>
          <div className="hability">
            <Fade animateIn="fadeInUp" delay={0.20 * 1000}>
              <img src={boostrapIcon} alt="bootstrap" />
            </Fade>
          </div>
        </div>
      </div>
      <div className="about-image">
        <Fade animateIn="fadeInRight" delay={0.21 * 1000}>
          <img src={Meet} alt="Meet Navapara" />
        </Fade>
      </div>
    </Container>
  )
}

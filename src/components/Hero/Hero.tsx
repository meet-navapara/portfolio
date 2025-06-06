import { BrowserRouter } from "react-router-dom"
import { Container } from "./styles"
import { Fade } from 'react-awesome-reveal';
import Illustration from "../../assets/illustration.svg"
import { NavHashLink } from "react-router-hash-link"
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import Hello from '../../assets/Hello.gif'
import telegram from '../../assets/telegram.svg'
export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        <Fade animateIn="fadeInUp">
          <p>Hello <img src={Hello} alt="Hello" width="20px"/>, I'm</p>
        </Fade>
        <Fade animateIn="fadeInUp" delay={0.2 * 1000}>
          <h1>Meet Navapara</h1>
        </Fade>
        <Fade animateIn="fadeInUp" delay={0.4 * 1000}>
          <h3>Full stack developer</h3>
        </Fade>
        <Fade animateIn="fadeInUp" delay={0.6 * 1000}>
          <p className="small-resume">3 Year Experience</p>
        </Fade>
        <Fade animateIn="fadeInUp" delay={0.8 * 1000}>
          <BrowserRouter>
            <NavHashLink smooth to="#contact" className="button">Contact</NavHashLink>
          </BrowserRouter>
        </Fade>
        <Fade animateIn="fadeInUp" delay={1 * 1000}>
      <div className="social-media"><a
        href="https://www.linkedin.com/in/codevinayak"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkedin} alt="Linkedin" />
      </a>
        <a
          href="https://github.com/meet-navapara/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          href="https://wa.me/918401446125?text=Hello%2C%20I%27m%20interested%20in%20your%20service"
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsapp} alt="Whatsapp" />
        </a>
        <a
          href="https://t.me/I_AM_THE_JUSTICE"
          target="_blank"
          rel="noreferrer"
        >
          <img src={telegram} alt="telegram" />
        </a></div>
        </Fade>
      </div>
      <div className="hero-image">
        <Fade animateIn="fadeInRight" delay={1 * 1000}>
          <img src={Illustration} alt="Ilustração" />
        </Fade>
      </div>
    </Container>
  )
}
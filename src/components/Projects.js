import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
/* import projImg1 from "../assets/img/project-img1.png";
 */
import projImg2 from "../assets/img/telza_client-1.png";

import projImg3 from "../assets/img/Shisha_app-1.png";


import projImg4 from "../assets/img/restaurant-1.png";

import projImg5 from "../assets/img/swalis-1.png";

import projImg6 from "../assets/img/Livreur-1.png";
import covid  from "../assets/img/Covid_app-1.png";
import colorSharp2 from "../assets/img/color-sharp2.png"
import 'animate.css';
import TrackVisibility from 'react-on-screen';


import projImg7 from "../assets/img/rest.png";
import projImg8 from "../assets/img/res2.png";
import projImg9 from "../assets/img/res3.png";





export const Projects = () => {

  const projects_mobile = [
    
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg7,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg8,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg9,
    },
   
    
  ];
  const projects_web = [
   
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg4,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg5,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg6,
    },
    {
      title: "Shisha E-commerce",
      description: " Development",
      imgUrl: covid,
    },
    
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={4}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects_web.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects_mobile.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}

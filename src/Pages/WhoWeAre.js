import React from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import "./WhoWeAre.css"

const WhoWeAre = () => {
    return (
        <div>
            <div className="navSpacer" />
            <Container fluid>
                <Row>
                    <Col>
                        <h1 className="header">WHO WE ARE</h1>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6}>
                        <h1>ABOUT US</h1>
                        <h3>
                            Institute of Global Exchange, Inc. (IGE) a U.S. Department of State designated J-1 Visa sponsor
                            organization for the Intern and Trainee Exchange Visitor Programs.
                        </h3>
                    </Col>
                    <Col lg={6}>
                        <h1>OUR MISSION</h1>
                        <h3>
                            Founded in 2008, IGE has worked with partners from all over
                            the world. Providing students with professional experience through cultural
                            and educational exchange programs, we hope to advance their studies and
                            careers with the necessary skills whilst experiencing different cultures along the way.
                        </h3>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6}>
                        <h1>
                            OUR OBJECTIVES
                        </h1>
                        <h3>
                            As a sponsor of Exchange Visitor Programs, we contribute to educational and cultural exchange
                            authorized by the Fulbright-Hays Act, the objective of which is to increase mutual understanding
                            between the people of the United States and the people of other countries and to assist in the
                            development of friendly, sympathetic and peaceful relations between the United States and other
                            nations. To fulfill this mandate, we ensure that participants in the program return abroad to exercise the
                            skills and knowledge acquired in the United States thereby strengthening the ties and communications
                            that unite us with other nations of the world.
                        </h3>
                    </Col>
                    <Col lg={6}>
                        <h1>
                            OUR COMMITMENT
                        </h1>
                        <h3>
                            We are dedicated to promoting cultural exchange and to fulfilling our obligations as a U.S. Department
                            of State designated program sponsor by providing high quality programs in full compliance with the
                            federal regulations. It is our responsibility to ensure that each and every participant have a positive and
                            memorable experience while ensuring safety and wellbeing of our participants at all time during the
                            participant’s stay in the U.S.
                        </h3>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default WhoWeAre

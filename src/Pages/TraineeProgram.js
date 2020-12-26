import React from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import "./WhoWeAre.css"

const TraineeProgram = () => {
    return (
        <div>
            <div className="navSpacer" />
            <Container fluid>
                <Row>
                    <Col>
                        <h1 className="header">TRAINEE PROGRAM</h1>
                        <h4>
                            Trainee programs is for foreign professionals to come to the United States to gain exposure to U.S.
                            culture and to receive training in U.S. business practices in their chosen occupational fields.
                            As a U.S. Department of State designated J-1 Visa Exchange Visitor Program Sponsor, IGE is authorized
                            to issue the DS-2019 Form and DS-7002 Form.
                        </h4>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1>
                            OVERVIEW
                        </h1>
                        <h4>
                            The Trainee Program is a 1 to 18-month Training Program for post university/college graduates and
                            young professionals. This program offers an opportunity to learn about American business practices, get
                            a taste of American culture and most importantly advance your career skills. We at IGE believe that
                            upon the completion of this program you will be better qualified for your professional, and undoubtedly
                            successful future.
                        </h4>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6}>
                        <h1>PURPOSE</h1>
                        <ul>
                            <li>
                                Increase mutual understanding between cultures
                            </li>
                            <li>
                                Create cultural and professional learning opportunities between citizens of the United States
                                and citizens of other countries
                            </li>
                            <li>
                                Provide participants with opportunities for professional development, insight into American
                                know-how in the professional field of your choice and a greater understanding of American
                                society and culture
                            </li>
                            <li>
                                Help American businesses and individuals learn about the participants’ expertise and the
                                cultures of their home countries
                            </li>
                            <li>
                                Encourage participants to share their cross-cultural and professional knowledge and experience
                                they have gained from this program upon their return home
                            </li>
                        </ul>
                    </Col>
                    <Col lg={6}>
                        <h1>REQUIREMENTS</h1>
                        <ul>
                            <li>
                                A degree or professional certificate from a foreign post-secondary academic institution and at
                                least one year of prior related work experience in your occupational field acquired outside the
                                United States, or Five years of work experience outside the United States in your occupational
                                field, and intend to enter the United States to participate in a structured and guided work-based
                                training program in your specific occupational field.
                            </li>
                            <li>
                                Know English well enough to perform successfully in the proposed internship training.
                            </li>
                            <li>
                                International accident and sickness insurance coverage during your program in the U.S.
                            </li>
                            <li>
                                Possess sufficient funds or support themselves for the entire length of the program in the
                                United States, including housing and living expenses.
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1>
                            OUR COMMITMENT
                        </h1>
                        <h3>
                            As a program sponsor, IGE commits to:
                        </h3>
                        <ul>
                            <li>
                                Comply with all rules and regulations of the Exchange Visitor Trainee Program
                            </li>
                            <li>
                                Educate and assist all parties on the rules and regulations of the Trianee Program including the
                                participants and host organizations
                            </li>
                            <li>
                                Provide health insurance for the entire duration of the program
                            </li>
                            <li>
                                Monitor the health, safety and wellbeing of each participant
                            </li>
                            <li>
                                Provide 24 hour support during the program
                            </li>
                        </ul>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default TraineeProgram

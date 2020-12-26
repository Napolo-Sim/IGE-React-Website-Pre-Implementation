import React from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import "./WhoWeAre.css"

const ApplyToHost = () => {
    return (
        <div>
            <div className="navSpacer" />
            <Container fluid>
                <Row>
                    <Col>
                        <h1 className="header">HOST EMPLOYER</h1>
                        <h4>
                            Exchange Visitors can bring expertise and global perspective to your business, helping your
                            business and organizations diversify the workplace, and deepening the knowledge and cultures
                            to become and remain competitive in global markets.
                        </h4>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1>
                            INTERN AND TRAINEE PROGRAMS
                        </h1>
                        <h4>
                            Intern and Trainee Programs are designed to allow foreign college and university students, recent
                            graduates, or young professional to come to the United States to gain exposure to U.S. culture and to
                            receive hands-on experience in U.S. business practices in their academic or chosen occupational fields.
                        </h4>
                        <br />
                        <h4>
                            Each participant will have J-1 visa. J-1 Visa is a non-immigrant cultural exchange visa and issued to the
                            participants of the Exchange Visitor Programs. The purpose of the Exchange Visitor Program is to foster
                            global understanding through educational and cultural exchanges, and for Americans and exchange
                            visitors to simultaneously learn about each other’s culture, business practices, and expertise.
                        </h4>
                        <br />
                        <h4>
                            All exchange visitors are expected to return to their home country upon completion of their program in
                            order to share their exchange experiences.
                        </h4>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1>
                            PROGRAM DURATION
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <br />
                        <h4>
                            Intern Program: up to 12 months
                        </h4>
                        <br />
                        <h4>
                            Trainee Program: up to 18 months (up to 12 months in Hospitality and Tourism)
                        </h4>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1>
                            OUR SERVICES
                        </h1>
                        <h4>
                            IGE is committed to ensuring a positive program experience for every stakeholder involved. We provide
                            personalized support to every participant through their application process and monitor the program
                            quality, their wellbeing and safety throughout their stay in the U.S. until they return home.
                        </h4>
                        <br />
                        <h4>
                            Our programs are free to host employers. We screen all candidates based on the program regulations
                            set forth by the U.S. Department of State. Based on your need, expectations, and training details, IGE
                            will identify international applicants for your organization.
                        </h4>
                        <br />
                        <h4>
                            Our services include, but not limited to:
                        </h4>
                        <ul>
                            <li>
                                Program Sponsorship
                            </li>
                            <li>
                                Issuance of Form DS-7002
                            </li>
                            <li>
                                Issuance of Form DS-2019
                            </li>
                            <li>
                                SEVIS Registration
                            </li>
                            <li>
                                Assistance with developing a Training Plan (DS-7002, T/IPP) fulfilling U.S. Department of State
                                program regulations (Only applicable for International Intern, Trainee, or other similar work
                                based internship, training programs)
                            </li>
                            <li>
                                Program orientation and information for both participant and host organizations
                            </li>
                            <li>
                                Program participant placement
                            </li>
                            <li>
                                Health insurance
                            </li>
                            <li>
                                Preparation for applicant’s visa interview at the U.S. Embassy
                            </li>
                            <li>
                                Pre-arrival orientation
                            </li>
                            <li>
                                Post arrival orientation
                            </li>
                            <li>
                                24 hours emergency hotline
                            </li>
                            <li>
                                Program evaluation and monitoring throughout the participant’s program in the U.S.
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1>
                            BENEFITS TO U.S. BUSINESSES
                        </h1>
                        <ul>
                            <li>
                                <strong>85%</strong> of host organizations consider the programs important to their business
                            </li>
                            <li>
                                <strong>75%</strong> of host organizations stated that participants broaden perspectives of current staff through exposure to different cultures
                            </li>
                            <li>
                                {/* THIS SENTENCE SEEMS UNFINISHED */}
                                <strong>71%</strong> of host organizations stated
                            </li>
                            <li>
                                <strong>70%</strong> of host organizations participate to bring a unique cultural dimension to the workplace
                            </li>
                        </ul>
                        <h5 className="referenceText">
                            The Impact of International Exchange Programs: Engaging Future Leaders Around the World and Advancing Key
                            U.S. Foreign Policy Priorities, Alliance for International Exchange. (2017)
                        </h5>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1>
                            HOST EMPLOYER REQUIREMENTS
                        </h1>
                        <h5>
                            <strong>
                                To be eligible to host an International Intern/Trainee, your organization is required to:
                            </strong>
                        </h5>
                        <ul>
                            <li>
                                Sign a completed Form DS-7002 – Training/Internship Placement Plan (T/IPP) to verify that all
                                placements are appropriate and consistent with the objectives of the interns and trainees as
                                outlined in their program applications and as set forth in their T/IPPs;
                            </li>
                            <li>
                                Provide at least 32 hours of training per week;
                            </li>
                            <li>
                                Provide a proof of workers compensation insurance coverage at the training/work location;
                            </li>
                            <li>
                                Abide by all federal, state and local occupational health and safety laws;
                            </li>
                            <li>
                                Abide by all program rules and regulations set forth by IGE, including the completion of all
                                mandatory program evaluations;
                            </li>
                            <li>
                                Have sufficient resources, equipment and trained personnel available;
                            </li>
                            <li>
                                Provide culture activities for the participants to learn and experience American culture;
                            </li>
                            <li>
                                Provide continuous on-site supervision and mentoring by experienced and knowledgeable staff;
                                and
                            </li>
                            <li>
                                Ensure that participants obtain skills, knowledge, and competencies through structured and
                                guided on-the-job training.
                            </li>
                        </ul>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default ApplyToHost

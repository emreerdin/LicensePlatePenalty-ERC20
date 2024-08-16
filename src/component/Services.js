import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

export default class Services extends Component {
    constructor(props) {
        super(props);
        this.state = {
            servicesData: [
                {
                    id: 1,
                    icon: 'mdi-hexagon-multiple',
                    title: 'Penalty Payment',
                    description: 'By the help of Polygon Blockchain, citizens can complete their penalty payments on a more secure system.'
                },
                {
                    id: 2,
                    icon: 'mdi-palette',
                    title: 'Tax Payment',
                    description: 'By the help of Polygon Blockchain, citizens can complete their tax payments on a more secure system.'
                },
                {
                    id: 3,
                    icon: 'mdi-finance',
                    title: 'LPP Exchanger for Fixed ₺',
                    description: 'Citizens can use LPP Exchanger for ₺ to LPP exchange and vice versa.'
                },
            ]
        }
    }
    render() {
        return (
            <React.Fragment>
                <section className="section" id="services">
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <div className="title-heading mb-5">
                                    <h3 className="text-dark mb-1 fw-light text-uppercase">Our Services</h3>
                                    <div className="title-border-simple position-relative"></div>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            {this.state.servicesData.map((services, key) => (
                                <Col lg={4} md={6} key={key}>
                                    <div className="service-box rounded mt-4 p-4">
                                        <div className="service-icon mb-3">
                                            <i className={"mdi " + services.icon}></i>
                                        </div>
                                        <div className="services-desc">
                                            <div className="service-title mb-2 position-relative">
                                                <h5 className="fw-normal mb-3"><Link to="#" className="text-dark">{services.title}</Link></h5>
                                            </div>
                                            <p className="text-muted mb-3 f-14">{services.description}</p>
                                            <p className="mb-0 text-uppercase f-13"><Link to="#" className="text-primary">learn more<i
                                                className="mdi mdi-arrow-right ms-2"></i></Link></p>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        )
    }
}

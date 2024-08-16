import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

//import images
import features from '../assets/images/features-img/img-1.png';
import features2 from '../assets/images/features-img/img-2.png';
import features3 from '../assets/images/features-img/img-3.png';

export default class Features extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="section bg-features bg-light" id="features">
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <div className="title-heading mb-5">
                                    <h3 className="text-dark mb-1 fw-light text-uppercase">Our Features</h3>
                                    <div className="title-border-simple position-relative"></div>
                                </div>
                            </Col>
                        </Row>
                        <Row className="align-items-center ">
                            <Col lg={6}>
                                <div className="features-content">
                                    <div className="features-icon">
                                        <i className="pe-7s-science text-primary"></i>
                                    </div>
                                    <h4 className="fw-normal text-dark mb-3 mt-4">Blockchain Integration</h4>
                                    <p className="text-muted f-14">License Plate Penalty System offers a secure and reliable integration with Polygon, enabling users to pay their license plate penalties quickly and easily using the Polygon network. This integration allows users to benefit from Polygon's fast and low-cost transactions, as well as its robust security features, which help prevent fraud and other malicious activities.
                                    </p>
                                    <p className="text-muted f-14">By integrating with Polygon, you show your users that your platform is keeping up with the latest trends in blockchain technology and is committed to providing them with a fast, secure, and convenient payment experience.</p>
                                    <p className="mb-0 text-uppercase f-13"><Link to="#" className="text-primary">learn more <span
                                        className="right-arrow ms-1">&#x21FE;</span></Link></p>
                                </div>
                            </Col>

                            <Col lg={6}>
                                <div className="features-img mt-32">
                                    <img src={features} alt="" className="img-fluid mx-auto d-block" />
                                </div>
                            </Col>
                        </Row>

                    </Container>
                </section>
                <section className="section bg-features">
                    <Container>
                        <Row className="align-items-center">
                            <Col lg={6}>
                                <div className="features-img">
                                    <img src={features2} alt="" className="img-fluid mx-auto d-block" />
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="features-content mt-32">
                                    <div className="features-icon">
                                        <i className="pe-7s-shuffle text-primary"></i>
                                    </div>
                                    <h4 className="fw-normal text-dark mb-3 mt-4">LPP Token Payment Option</h4>
                                    <p className="text-muted f-14">License Plate Penalty System now offers LPP token as a new payment option, allowing users to pay their license plate penalties using this cryptocurrency. This payment option provides users with an alternative to traditional payment methods, such as credit cards and bank transfers. </p>
                                    <p className="text-muted f-14">LPP tokens can be purchased on various exchanges and provide users with an additional layer of security and privacy when making payments. By introducing LPP token as a new payment option, you attract users who prefer to use cryptocurrency as a means of payment, expanding your user base and creating more payment flexibility.</p>
                                    <p className="mb-0 text-uppercase f-13"><Link to="#" className="text-primary">learn more <span
                                        className="right-arrow ms-1">&#x21FE;</span></Link></p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section className="section bg-features bg-light">
                    <Container>
                        <Row className="align-items-center">
                            <Col lg={6}>
                                <div className="features-content">
                                    <div className="features-icon">
                                        <i className="pe-7s-display1 text-primary"></i>
                                    </div>
                                    <h4 className="fw-normal text-dark mb-3 mt-4">Seamless Payment Process</h4>
                                    <p className="text-muted f-14">License Plates Payment System's payment platform offers a seamless payment process that enables users to make payments in just a few clicks. The payment process is simple and intuitive, reducing the likelihood of payment errors and ensuring that users can complete their payments quickly and easily.</p>
                                    <p className="text-muted f-14">By providing a seamless payment process, you make it more convenient for users to pay their penalties, increasing the likelihood that they will return to your platform in the future. Additionally, a smooth payment process also helps build trust with your users, who will appreciate the effort you put into ensuring a hassle-free payment experience.</p>
                                    <p className="mb-0 text-uppercase f-13"><Link to="#" className="text-primary">learn more <span
                                        className="right-arrow ms-1">&#x21FE;</span></Link></p>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="features-img mt-40">
                                    <img src={features3} alt="" className="img-fluid mx-auto d-block" />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        )
    }
}

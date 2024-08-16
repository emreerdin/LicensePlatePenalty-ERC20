import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Col, Container, Input, Row } from 'reactstrap'

export default class Contact extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="section bg-light" id="contact">
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <div className="title-heading mb-5">
                                    <h3 className="text-dark mb-1 fw-light text-uppercase">Get in touch</h3>
                                    <div className="title-border-simple position-relative"></div>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg={12}>
                                <div className="contact-box p-5">
                                    <Row>
                                        <Col lg={8} md={6}>
                                            <div className="custom-form p-3">
                                                <form name="myForm">
                                                    <p id="error-msg"></p>
                                                    <div id="simple-msg"></div>
                                                    <Row>
                                                        <Col lg={6}>
                                                            <div className="mb-3 app-label">
                                                                <Input name="name" id="name" type="text" className="form-control"
                                                                    placeholder="Name" />
                                                            </div>
                                                        </Col>
                                                        <Col lg={6}>
                                                            <div className="mb-3 app-label">
                                                                <Input name="email" id="email" type="email" className="form-control"
                                                                    placeholder="Email" />
                                                            </div>
                                                        </Col>
                                                        <Col lg={12}>
                                                            <div className="mb-3 app-label">
                                                                <Input type="text" className="form-control" id="subject"
                                                                    placeholder="Subject" />
                                                            </div>
                                                        </Col>
                                                        <Col lg={12}>
                                                            <div className="mb-3 app-label">
                                                                <textarea name="comments" id="comments" rows="5"
                                                                    className="form-control" placeholder="Message"></textarea>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <div className="col-sm-12">
                                                            <input type="submit" id="submit" name="send"
                                                                className="submitBnt btn btn-custom" value="Send Message" />
                                                        </div>

                                                    </Row>
                                                </form>
                                            </div>
                                        </Col>

                                        <Col lg={4} md={6}>
                                            <div className="contact-cantent p-3">
                                                <div className="contact-details">
                                                    <div className="float-start contact-icon me-3 mt-2">
                                                        <i className="mdi mdi-headphones text-muted h5"></i>
                                                    </div>
                                                    <div className="app-contact-desc text-muted pt-1">
                                                        <p className="mb-0 info-title f-13">Call :</p>
                                                        <p className="mb-0 f-13">012-345-6789</p>
                                                    </div>
                                                </div>

                                                <div className="contact-details mt-2">
                                                    <div className="float-start contact-icon me-3 mt-2">
                                                        <i className="mdi mdi-email-outline text-muted h5"></i>
                                                    </div>
                                                    <div className="app-contact-desc text-muted pt-1">
                                                        <p className="mb-0 info-title f-13">Email :</p>
                                                        <p className="mb-0 f-13"><Link to="" className="text-muted">youremailid@gmail.com</Link>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="contact-details mt-2">
                                                    <div className="float-start contact-icon me-3 mt-2">
                                                        <i className="mdi mdi-map-marker text-muted h5"></i>
                                                    </div>
                                                    <div className="app-contact-desc text-muted pt-1">
                                                        <p className="mb-0 info-title f-13">Location :</p>
                                                        <p className="mb-0 f-13"><Link to="" className="text-muted">3179 Raccoon Run Seattle,
                                                    WA 98109</Link></p>
                                                    </div>
                                                </div>

                                                <div className="follow mt-4">
                                                    <h4 className="text-dark mb-3">Follow</h4>
                                                    <ul className="follow-icon list-inline mt-32 mb-0">
                                                        <li className="list-inline-item f-15"><Link to="#"
                                                            className="social-icon text-muted me-1"><i className="mdi mdi-facebook"></i></Link>
                                                        </li>
                                                        <li className="list-inline-item f-15"><Link to="#"
                                                            className="social-icon text-muted me-1"><i className="mdi mdi-twitter"></i></Link>
                                                        </li>
                                                        <li className="list-inline-item f-15"><Link to="#"
                                                            className="social-icon text-muted me-1"><i
                                                                className="mdi mdi-google-plus"></i></Link></li>
                                                        <li className="list-inline-item f-15"><Link to="#"
                                                            className="social-icon text-muted me-1"><i className="mdi mdi-linkedin"></i></Link>
                                                        </li>
                                                        <li className="list-inline-item f-15"><Link to="#"
                                                            className="social-icon text-muted me-1"><i className="mdi mdi-whatsapp"></i></Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        )
    }
}

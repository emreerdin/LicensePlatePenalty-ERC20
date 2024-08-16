import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'

export default class Pricing extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="section" id="pricing">
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <div className="title-heading mb-5">
                                    <h3 className="text-dark mb-1 fw-light text-uppercase">Our Pricing</h3>
                                    <div className="title-border-simple position-relative"></div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={3} md={6}>
                                <div className="pricing-box mt-4">
                                    <div className="price bg-light position-relative p-4">
                                        <div className="float-start">
                                            <h5 className="text-dark title mt-2 fw-normal f-18 mb-0">Basic</h5>
                                        </div>
                                        <div className="">
                                            <h2 className="text-dark fw-normal text-end mb-0"><sup>$</sup> 19.00</h2>
                                        </div>
                                    </div>
                                    <div className="p-4 pricing-list">
                                        <ul className="list-unstyled mb-0">
                                            <li className="text-muted f-14">Bandwidth: 1GB</li>
                                            <li className="text-muted f-14">Onlinespace: 100MB</li>
                                            <li className="text-muted f-14">Support: No</li>
                                            <li className="text-muted f-14">Domain: 05</li>
                                            <li className="text-muted mb-0 f-14">Hidden Fees: No</li>
                                        </ul>
                                    </div>
                                    <div className="ps-4 mb-4 mt-2">
                                        <Link to="#" className="btn btn-outline btn-sm">Buy Now</Link>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3} md={6}>
                                <div className="pricing-box active mt-4">
                                    <div className="price bg-light position-relative p-4">
                                        <div className="float-start">
                                            <h5 className="text-dark title mt-2 fw-normal f-18 mb-0">Popular</h5>
                                        </div>
                                        <div className="">
                                            <h2 className="text-dark fw-normal text-end mb-0"><sup>$</sup> 39.00</h2>
                                        </div>
                                    </div>
                                    <div className="p-4 pricing-list">
                                        <ul className="list-unstyled mb-0">
                                            <li className="text-muted f-14">Bandwidth: 1.5GB</li>
                                            <li className="text-muted f-14">Onlinespace: 500MB</li>
                                            <li className="text-muted f-14">Support: Yes</li>
                                            <li className="text-muted f-14">Domain: 10</li>
                                            <li className="text-muted mb-0 f-14">Hidden Fees: No</li>
                                        </ul>
                                    </div>
                                    <div className="ps-4 mb-4 mt-2">
                                        <Link to="#" className="btn btn-outline active btn-sm">Buy Now</Link>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3} md={6}>
                                <div className="pricing-box mt-4">
                                    <div className="price bg-light position-relative p-4">
                                        <div className="float-start">
                                            <h5 className="text-dark title mt-2 fw-normal f-18 mb-0">Advance</h5>
                                        </div>
                                        <div className="">
                                            <h2 className="text-dark fw-normal text-end mb-0"><sup>$</sup> 80.00</h2>
                                        </div>
                                    </div>
                                    <div className="p-4 pricing-list">
                                        <ul className="list-unstyled mb-0">
                                            <li className="text-muted f-14">Bandwidth: 2GB</li>
                                            <li className="text-muted f-14">Onlinespace: 1GB</li>
                                            <li className="text-muted f-14">Support: Yes</li>
                                            <li className="text-muted f-14">Domain: 15</li>
                                            <li className="text-muted mb-0 f-14">Hidden Fees: No</li>
                                        </ul>
                                    </div>
                                    <div className="ps-4 mb-4 mt-2">
                                        <Link to="#" className="btn btn-outline btn-sm">Buy Now</Link>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3} md={6}>
                                <div className="pricing-box mt-4">
                                    <div className="price bg-light position-relative p-4">
                                        <div className="float-start">
                                            <h5 className="text-dark title mt-2 fw-normal f-18 mb-0">Premium</h5>
                                        </div>
                                        <div className="">
                                            <h2 className="text-dark fw-normal text-end mb-0"><sup>$</sup> 19.00</h2>
                                        </div>
                                    </div>
                                    <div className="p-4 pricing-list">
                                        <ul className="list-unstyled mb-0">
                                            <li className="text-muted f-14">Bandwidth: 2.5GB</li>
                                            <li className="text-muted f-14">Onlinespace: 1.5GB</li>
                                            <li className="text-muted f-14">Support: No</li>
                                            <li className="text-muted f-14">Domain: 20</li>
                                            <li className="text-muted mb-0 f-14">Hidden Fees: Yes</li>
                                        </ul>
                                    </div>
                                    <div className="ps-4 mb-4 mt-2">
                                        <Link to="#" className="btn btn-outline btn-sm">Buy Now</Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        )
    }
}

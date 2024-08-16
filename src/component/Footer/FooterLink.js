import React, { Component } from 'react'
import { Col, Container, Row } from 'reactstrap'

export default class FooterLink extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="footer-alt bg-dark pt-3 pb-3">
                    <Container>
                        <Row>
                            <Col lg={12} className="text-center">
                                <p className="copyright text-white f-14 fw-light mb-0">
                                {(new Date().getFullYear())}{" "} © LPP. Developed by Author of Future
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        )
    }
}

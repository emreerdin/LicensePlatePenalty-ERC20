import React, { Component } from 'react'
import { Col, Container, Row } from 'reactstrap'

//import images
import home from '../../assets/images/home-6-img.png'
import home2 from '../../assets/images/home-6-shape.png'

export default class Sectoin extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="section home-6-bg" id="home">
                    <div className="home-center">
                        <div className="home-desc-center">
                            <Container>
                                <Row className="align-items-center">
                                    <Col lg={6}>
                                        <div className="mt-40 home-5-content">
                                            <h1 className="text-white fw-light home-6-title mb-0">Professional, Multipurpose Landing
                                    Page</h1>
                                            <p className="text-white-70 fw-light mt-4 f-15 mb-0">Aliquam lorem ante dapibus in viverra
                                            quis feugiat a tellus hasellus viverra nulla ut metus varius laoreet uisque rutrum
                                    enean imperdiet tiam ultricies nisi vel augue urabitur as ullamcorper.</p>
                                            <div className="mt-5">
                                                <button type="submit" className="btn btn-custom">Get started</button>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col lg={6}>
                                        <div className="home-5-content home-6-content mt-40 p-4">
                                            <img src={home} alt="" className="img-fluid mx-auto d-block" />
                                        </div>
                                    </Col>
                                </Row>
                            </Container>

                            <Container fluid>
                                <Row>
                                    <div className="home-1-shape">
                                        <img src={home2} alt="" className="img-fluid mx-auto w-100 d-block" />
                                    </div>
                                </Row>
                            </Container>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

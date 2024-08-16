import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

//import images
import about from '../assets/images/about-img.jpg';

export default class About extends Component {
    render() {
        return (
            <React.Fragment>
                <section className={this.props.isPrimary ? "section bg-about" : "section bg-about bg-light-about bg-light"} id="about">
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <div className="title-heading mb-5">
                                    <h3 className={this.props.isPrimary ? "text-white mb-1 fw-light text-uppercase" : "text-dark mb-1 fw-light text-uppercase"}>About Us</h3>
                                    <div className="title-border-simple position-relative"></div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={4}>
                                <div className={this.props.isPrimary ? "about-box text-center p-3" : "about-box about-light text-center p-3"}>
                                    <div className="about-icon mb-4">
                                        <i className="mdi mdi-lightbulb"></i>
                                    </div>
                                    <h4 className="fw-light"><Link to="#" className={this.props.isPrimary ? "text-white" : "text-dark"}>Creative Design</Link></h4>
                                    <p className={this.props.isPrimary ? "text-white-50 f-14" : "text-muted f-14"}>Nemo enim ipsam voluptatem quia voluptas sit aspernatur at aut odit
                                        aut fugit sed quia consequuntur magni.</p>
                                </div>
                            </Col>

                            <Col lg={4}>
                                <div className={this.props.isPrimary ? "about-box text-center p-3" : "about-box about-light text-center p-3"}>
                                    <div className="about-icon mb-4">
                                        <i className="mdi mdi-projector-screen"></i>
                                    </div>
                                    <h4 className="fw-light"><Link to="#" className={this.props.isPrimary ? "text-white" : "text-dark"}>Strategy Solutions</Link></h4>
                                    <p className={this.props.isPrimary ? "text-white-50 f-14" : "text-muted f-14"}>Nemo enim ipsam voluptatem quia voluptas sit aspernatur at aut odit
                                        aut fugit sed quia consequuntur magni.</p>
                                </div>
                            </Col>

                            <Col lg={4}>
                                <div className={this.props.isPrimary ? "about-box text-center p-3" : "about-box about-light text-center p-3"}>
                                    <div className="about-icon mb-4">
                                        <i className="mdi mdi-nature"></i>
                                    </div>
                                    <h4 className="fw-light"><Link to="#" className={this.props.isPrimary ? "text-white" : "text-dark"}>Dynamic Growth</Link></h4>
                                    <p className={this.props.isPrimary ? "text-white-50 f-14" : "text-muted f-14"}>Nemo enim ipsam voluptatem quia voluptas sit aspernatur at aut odit
                                        aut fugit sed quia consequuntur magni.</p>
                                </div>
                            </Col>
                        </Row>


                        <Row className="align-items-center mt-5">
                            <Col md={6}>
                                <div className="about-desc">
                                    <h3 className={this.props.isPrimary ? "text-white mb-3 fw-light" : "text-dark mb-3 fw-light"}>Performancect Solution For Small Businesses</h3>
                                    <p className={this.props.isPrimary ? "text-white-50 f-15" : "text-muted f-15"}>Temporibus autem quibusdam a aut officiis debitis rerum
                                        necessitatibus saepeeveniet ut et voluptates repudiandae sint a molestiae recusandae itaque
                                        earum rerum hic tenetur a sapiente delectus ut at aut reiciendis voluptatibus maiores alias
                                        consequatur perferendis doloribus asperiores rerum necessitat saepeeveniet.</p>
                                    <div className="about-by">
                                        <p className="fw-light mb-0"><Link to="#" className={this.props.isPrimary ? "text-white" : "text-dark"}><i
                                            className="mdi mdi-circle-medium text-custom me-2"></i>
                                            Learn More <span className="text-custom"> About Us</span></Link></p>
                                    </div>
                                </div>
                            </Col>

                            <Col md={6}>
                                <div className={this.props.isPrimary ? "about-img position-relative p-4" : "about-img light-img position-relative p-4"}>
                                    <img src={about} alt="" className="img-fluid mx-auto d-block" />
                                </div>
                            </Col>

                        </Row>

                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

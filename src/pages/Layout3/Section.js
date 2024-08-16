import React, { Component } from 'react'

import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

// Modal Video
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

//import images
import shap from '../../assets/images/home-3-shape.png';
import ipad from '../../assets/images/ipad-img.png';

export default class Section extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
        this.openModal = this.openModal.bind(this);
    }

    openModal() {
        this.setState({ isOpen: true });
    }
    render() {
        return (
            <React.Fragment>
                <section className="section home-3-bg" id="home">
                    <div className="home-center">
                        <div className="home-desc-center">
                            <Container>
                                <Row className="align-items-center">
                                    <Col lg={5}>
                                        <div className="mt-40 home-3-content">
                                            <h1 className="text-white fw-normal home-3-title display-4 mb-0">Optimize Your Service Business</h1>
                                            <p className="text-white-70 mt-4 f-15 mb-0">Ut enim ad minima veniam quis nostrum
                                            exercitationem ullam corporis at suscipit laboriosam nisi ut aliquid a commodi
                                            consequatur Quis autem.</p>
                                            <div className="mt-5">
                                                <Link to="#" className="btn btn-custom me-3">Learn More</Link>

                                                <span className="play-shadow mt-4"><Link to="#"
                                                    onClick={this.openModal}
                                                    className="video-play-icon text-white"><i
                                                        className="mdi mdi-play play-icon-circle text-white me-2"></i>
                                                    <span className="f-14">Watch Video!</span></Link>
                                                </span>

                                            </div>
                                        </div>
                                    </Col>

                                    <div className="col-lg-7">
                                        <div className="mt-40 home-3-content position-relative p-4">
                                            <img src={ipad} alt="" className="img-fluid mx-auto d-block home-2-img" />
                                        </div>
                                    </div>
                                </Row>
                            </Container>

                            <div className="container-fluid">
                                <div className="row">
                                    <div className="home-3-shape">
                                        <img src={shap} alt="" className="img-fluid mx-auto w-100 d-block" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ModalVideo
                            channel="vimeo"
                            isOpen={this.state.isOpen}
                            videoId="287684225"
                            onClose={() => this.setState({ isOpen: false })}
                        />
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

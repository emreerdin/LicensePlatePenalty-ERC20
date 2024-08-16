import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// Modal Video
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

///import images
import home from '../../assets/images/home-4-img.png';
import { Col, Container, Row } from 'reactstrap';

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
                <section className="section home-4-bg" id="home">
                    <div className="home-center">
                        <div className="home-desc-center">
                            <Container>
                                <Row className="align-items-center">
                                    <Col lg={6} className="position-static">
                                        <div className="mt-40 home-4-content">
                                            <h1 className="text-white fw-normal home-2-title mb-0">Simple And Clean But
                                                Professional</h1>
                                            <p className="text-white-70 mt-4 f-15 mb-0">Ut enim ad minima veniam quis nostrum
                                            exercitationem ullam corporis at suscipit laboriosam nisi ut aliquid a commodi
                                            consequatur Quis autem.</p>
                                            <div className="subcribe-form mt-5">
                                                <form>
                                                    <input type="text" className="mdi mdi-send me-1" placeholder="Enter Email.." />
                                                    <button type="submit" className="btn btn-w btn-custom-primary mt-10">Get
                                            started</button>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="video-button">


                                            <p className="play-shadow mb-0"><Link
                                                onClick={this.openModal}
                                                to="#" className="video-play-icon">
                                                <i className="mdi mdi-play play-icon-circle "></i></Link>
                                            </p>
                                        </div>
                                    </Col>
                                    <div className="col-lg-6 position-static">
                                        <div className="mt-40 home-4-img position-relative ps-5">
                                            <img src={home} alt="" className="img-fluid mx-auto d-block" />
                                        </div>
                                    </div>
                                </Row>
                            </Container>
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

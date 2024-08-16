import React, { Component } from 'react'
// import ReactPlayer from "react-player";
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import ReactTextRotator from "react-text-rotator";

// Modal Video
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";


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
        const content = [
            {
                text: "We Make Beautiful Things",
                animation: "zoom",
                easing: "easeOutExpo",
                duration: 1400,
                translateY: [100, 0],
                translateZ: 0,
                opacity: [0, 1],
            },
        ];
        return (
            <React.Fragment>
                <section className="section home-8-bg overflow-hidden" id="home">
                    {/* <ReactPlayer
                        id="myVideo"
                        url="http://techslides.com/demos/sample-videos/small.mp4"
                        type="video/mp4"
                        width="100%"
                        height="unset"
                        loop={true}
                        playing={true}
                        muted={true}
                    /> */}
                    <div className="background-video jarallax" data-jarallax-video=" ">
                        <video autoPlay loop muted style={{ width: "100%" }}>
                            <source src="http://techslides.com/demos/sample-videos/small.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div className="bg-overlay"></div>
                    <div className="home-center">
                        <div className="home-desc-center">
                            <Container>
                                <Row className="justify-content-center">
                                    <Col lg={7}>
                                        <div className="mt-40 text-center home-8-content">
                                            <h1 className="text-white fw-light home-8-title mb-0">
                                                <ReactTextRotator
                                                    content={content}
                                                    time={5000}
                                                    startDelay={2000}
                                                />
                                            </h1>
                                            <p className="text-white-70 mt-4 f-15 mb-0">Ut enim ad minima veniam quis nostrum
                                                exercitationem
                                                ullam corporis at suscipit laboriosam nisi ut aliquid a commodi consequatur Quis
                                                autem.</p>

                                            <div className="home-8-content mt-5">
                                                <p className="play-shadow mb-0">
                                                    <Link to="#"
                                                        onClick={this.openModal}
                                                        className="video-play-icon text-white">
                                                        <i className="mdi mdi-play play-icon-circle me-2"></i>
                                                        <span>Watch The Video!</span></Link>
                                                </p>
                                            </div>

                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                            <ModalVideo
                                channel="vimeo"
                                isOpen={this.state.isOpen}
                                videoId="287684225"
                                onClose={() => this.setState({ isOpen: false })}
                            />
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

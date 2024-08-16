import React, { Component } from 'react'
import { Col, Container, Row } from 'reactstrap';

//Carousel
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//import Images
import home from "../../assets/images/home-shape.png"

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
        var settings = {
            arrow: false,
            autoplay: true,
            infinite: true,
            autoplaySpeed: 2500,
            slidesToShow: 1,
            slidesToScroll: 1,    
        };
        return (
            <React.Fragment>
                <section className="home-5-bg home-9" id="home">
                    <div className="bg-overlay"></div>
                    <Container>
                        <Row>
                            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                <Slider className="slides" {...settings}>
                                    <div className="carousel-item active">
                                        <div className="home-center">
                                            <div className="home-desc-center">
                                                <Container>
                                                    <Row className="align-items-center justify-content-center">
                                                        <Col lg={9}>
                                                            <div className="home-content text-center text-white">
                                                                <h1 className="home-title text-uppercase">Make everythings feel easy
                                                                </h1>
                                                                <p className="home-desc my-4"> All the top location - from restaurants
                                                                    and clubs, to cinemas, galleries, and more.</p>
                                                            </div>
                                                            <form className="mt-5">
                                                                <Row className="g-0 gap-3 gap-sm-0">
                                                                    <Col sm={3}>
                                                                        <input type="email" className="form-control border-0 ps-sm-4 p-2 rounded-0 rounded-start border-end" id="exampleInputEmail1" placeholder="Keywords" />
                                                                    </Col>
                                                                    <Col sm={3}>
                                                                        <div className="positon-relative form-border">
                                                                            <select className="form-select border-0 rounded-0 p-2 border-end" aria-label="Default select example">
                                                                                <option defaultValue>All locations</option>
                                                                                <option value="1">One</option>
                                                                                <option value="2">Two</option>
                                                                                <option value="3">Three</option>
                                                                            </select>
                                                                        </div>
                                                                    </Col>
                                                                    <Col sm={3}>
                                                                        <label className="visually-hidden" htmlFor="specificSizeSelect">Preference</label>
                                                                        <select className="form-select border-0 rounded-0 p-2" id="specificSizeSelect">
                                                                            <option defaultValue>All Choose...</option>
                                                                            <option value="1">One</option>
                                                                            <option value="2">Two</option>
                                                                            <option value="3">Three</option>
                                                                        </select>
                                                                    </Col>
                                                                    <Col sm={3}>
                                                                        <button type="submit" className="btn btn-orange btn-sm border-0 rounded-0 w-100 rounded-end submit-btn">
                                                                            Submit </button>
                                                                    </Col>
                                                                </Row>
                                                            </form>
                                                        </Col>
                                                    </Row>
                                                </Container>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="home-center">
                                            <div className="home-desc-center">
                                                <Container>
                                                    <Row className="align-items-center justify-content-center">
                                                        <Col lg={9}>
                                                            <div className="home-content text-center text-white">
                                                                <h1 className="home-title text-uppercase">find the best places to be
                                                                </h1>
                                                                <p className="home-desc my-4"> All the top location - from restaurants
                                                                    and clubs, to cinemas, galleries, and more.</p>
                                                            </div>
                                                            <form className="mt-5">
                                                                <Row className="g-0 gap-3 gap-sm-0">
                                                                    <Col sm={3}>
                                                                        <input type="email" className="form-control border-0 ps-sm-4 p-2 rounded-0 rounded-start border-end" id="exampleInputEmail1" placeholder="Keywords" />
                                                                    </Col>
                                                                    <Col sm={3}>
                                                                        <div className="positon-relative form-border">
                                                                            <select className="form-select border-0 rounded-0 p-2 border-end" aria-label="Default select example">
                                                                                <option defaultValue>All locations</option>
                                                                                <option value="1">One</option>
                                                                                <option value="2">Two</option>
                                                                                <option value="3">Three</option>
                                                                            </select>
                                                                        </div>
                                                                    </Col>
                                                                    <Col sm={3}>
                                                                        <label className="visually-hidden" htmlFor="specificSizeSelect">Preference</label>
                                                                        <select className="form-select border-0 rounded-0 p-2" id="specificSizeSelect">
                                                                            <option defaultValue>All Choose...</option>
                                                                            <option value="1">One</option>
                                                                            <option value="2">Two</option>
                                                                            <option value="3">Three</option>
                                                                        </select>
                                                                    </Col>
                                                                    <Col sm={3}>
                                                                        <button type="submit" className="btn btn-success btn-sm border-0 rounded-0 w-100 rounded-end submit-btn">
                                                                            Submit </button>
                                                                    </Col>
                                                                </Row>
                                                            </form>
                                                        </Col>
                                                    </Row>
                                                </Container>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="home-center">
                                            <div className="home-desc-center">
                                                <Container>
                                                    <Row className="align-items-center justify-content-center">
                                                        <Col lg={9}>
                                                            <div className="home-content text-center text-white">
                                                                <h1 className="home-title text-uppercase">find the best places to be
                                                                </h1>
                                                                <p className="home-desc my-4"> All the top location - from restaurants
                                                                    and clubs, to cinemas, galleries, and more.</p>
                                                            </div>
                                                            <form className="mt-5">
                                                                <Row className="g-0 gap-3 gap-sm-0">
                                                                    <Col sm={3}>
                                                                        <input type="email" className="form-control border-0 ps-sm-4 p-2 rounded-0 rounded-start border-end" id="exampleInputEmail1" placeholder="Keywords" />
                                                                    </Col>
                                                                    <Col sm={3}>
                                                                        <div className="positon-relative form-border">
                                                                            <select className="form-select border-0 rounded-0 p-2 border-end" aria-label="Default select example">
                                                                                <option defaultValue>All locations</option>
                                                                                <option value="1">One</option>
                                                                                <option value="2">Two</option>
                                                                                <option value="3">Three</option>
                                                                            </select>
                                                                        </div>
                                                                    </Col>
                                                                    <Col sm={3}>
                                                                        <label className="visually-hidden" htmlFor="specificSizeSelect">Preference</label>
                                                                        <select className="form-select border-0 rounded-0 p-2" id="specificSizeSelect">
                                                                            <option defaultValue>All Choose...</option>
                                                                            <option value="1">One</option>
                                                                            <option value="2">Two</option>
                                                                            <option value="3">Three</option>
                                                                        </select>
                                                                    </Col>
                                                                    <Col sm={3}>
                                                                        <button type="submit" className="btn btn-primary btn-sm border-0 rounded-0 w-100 rounded-end submit-btn">
                                                                            Submit </button>
                                                                    </Col>
                                                                </Row>
                                                            </form>
                                                        </Col>
                                                    </Row>
                                                </Container>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>                                
                            </div>
                        </Row>
                        <div className="mt-5">
                            <Container>
                                <Row className="justify-content-center">
                                    <Col lg={4} md={6}>
                                        <ul className="list-unstyled mb-0">
                                            <li className="text-white"><i className="mdi mdi-checkbox-marked-circle text-success"></i> Connected to various smart devices</li>
                                            <li className="text-white"><i className="mdi mdi-checkbox-marked-circle text-success"></i> Controlling your home in real time</li>
                                        </ul>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </Container>

                    <Container fluid>
                        <Row>
                            <div className="home-1-shape">
                                <img src={home} alt="" className="img-fluid mx-auto w-100 d-block" />
                            </div>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        )
    }
}

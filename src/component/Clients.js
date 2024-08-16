import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';

//Carousel
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from '../assets/images/clients/img-1.jpg';
import img2 from '../assets/images/clients/img-2.jpg';
import img3 from '../assets/images/clients/img-3.jpg';
import img4 from '../assets/images/clients/img-4.jpg';
import img5 from '../assets/images/clients/img-5.jpg';
import img6 from '../assets/images/clients/img-6.jpg';
import quotes from '../assets/images/quote-img.png';

export default class Clients extends Component {

    render() {
        var settings = {
            dots: true,
            arrows: false,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 2,
            responsive: [
                {
                  breakpoint: 991.98,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
        };
        return (
            <React.Fragment>
                <section className="section bg-clients" id="clients">
                    <div className="bg-overlay"></div>
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <div className="title-heading mb-5">
                                    <h3 className="text-white mb-1 fw-light text-uppercase">Our Clients</h3>
                                    <div className="title-border-color position-relative"></div>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg={12}>
                                <Slider {...settings} className="client-slider">
                                    <div>
                                        <div className="testi-content">
                                            <div className="testi-box mt-4">
                                                <h4 className="text-white mb-3 fw-light">"Senior Management"</h4>
                                                <p className="text-white-70 fw-light mb-0 f-15">At vero eos et accusamus et iusto odio
                                                    dignissimos that site ducimus qui blanditiis praesentium voluptatum deleniti
                                                    atque
                                                    corrupti quos dolores quas molestias excepturi cupiditate non.</p>
                                                <div className="quote-img">
                                                    <img src={quotes} alt="" className="img-fluid" />
                                                </div>
                                            </div>
                                            <div className="mt-2">
                                                <div className="float-end ms-3">
                                                    <div className="client-img">
                                                        <img src={img1} alt="" className="img-fluid rounded-circle" />
                                                    </div>
                                                </div>
                                                <div className="clients-name text-end pt-3">
                                                    <h6 className="text-white fw-normal position-relative f-17 mb-0"><span
                                                        className="after-border"></span> Sherrie Barboza</h6>
                                                    <p className="text-white-70 f-13 mb-0">UI/UX Designer</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="testi-content">
                                            <div className="testi-box mt-4">
                                                <h4 className="text-white mb-3 fw-light">"Web Development"</h4>
                                                <p className="text-white-70 fw-light mb-0 f-15">At vero eos et accusamus et iusto odio
                                                    dignissimos that site ducimus qui blanditiis praesentium voluptatum deleniti
                                                    atque
                                                    corrupti quos dolores quas molestias excepturi cupiditate non.</p>
                                                <div className="quote-img">
                                                    <img src={quotes} alt="" className="img-fluid" />
                                                </div>
                                            </div>
                                            <div className="mt-2">
                                                <div className="float-end ms-3">
                                                    <div className="client-img">
                                                        <img src={img2} alt="" className="img-fluid rounded-circle" />
                                                    </div>
                                                </div>
                                                <div className="clients-name text-end pt-3">
                                                    <h6 className="text-white fw-normal position-relative f-17 mb-0"><span
                                                        className="after-border"></span> Jonas Davis</h6>
                                                    <p className="text-white-70 f-13 mb-0">Web Designer</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="testi-content">
                                            <div className="testi-box mt-4">
                                                <h4 className="text-white mb-3 fw-light">"Graphic Developer"</h4>
                                                <p className="text-white-70 fw-light mb-0 f-15">At vero eos et accusamus et iusto odio
                                                    dignissimos that site ducimus qui blanditiis praesentium voluptatum deleniti
                                                    atque
                                                    corrupti quos dolores quas molestias excepturi cupiditate non.</p>
                                                <div className="quote-img">
                                                    <img src={quotes} alt="" className="img-fluid" />
                                                </div>
                                            </div>
                                            <div className="mt-2">
                                                <div className="float-end ms-3">
                                                    <div className="client-img">
                                                        <img src={img3} alt="" className="img-fluid rounded-circle" />
                                                    </div>
                                                </div>
                                                <div className="clients-name text-end pt-3">
                                                    <h6 className="text-white fw-normal position-relative f-17 mb-0"><span
                                                        className="after-border"></span> Mary Cantu</h6>
                                                    <p className="text-white-70 f-13 mb-0">PHP Developer</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="testi-content">
                                            <div className="testi-box mt-4">
                                                <h4 className="text-white mb-3 fw-light">"Best Designer"</h4>
                                                <p className="text-white-70 fw-light mb-0 f-15">At vero eos et accusamus et iusto odio
                                                    dignissimos that site ducimus qui blanditiis praesentium voluptatum deleniti
                                                    atque
                                                    corrupti quos dolores quas molestias excepturi cupiditate non.</p>
                                                <div className="quote-img">
                                                    <img src={quotes} alt="" className="img-fluid" />
                                                </div>
                                            </div>
                                            <div className="mt-2">
                                                <div className="float-end ms-3">
                                                    <div className="client-img">
                                                        <img src={img4} alt="" className="img-fluid rounded-circle" />
                                                    </div>
                                                </div>
                                                <div className="clients-name text-end pt-3">
                                                    <h6 className="text-white fw-normal position-relative f-17 mb-0"><span
                                                        className="after-border"></span> Rodney Grey</h6>
                                                    <p className="text-white-70 f-13 mb-0">Graphic Designer</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="testi-content">
                                            <div className="testi-box mt-4">
                                                <h4 className="text-white mb-3 fw-light">"Senior Management"</h4>
                                                <p className="text-white-70 fw-light mb-0 f-15">At vero eos et accusamus et iusto odio
                                                    dignissimos that site ducimus qui blanditiis praesentium voluptatum deleniti
                                                    atque
                                                    corrupti quos dolores quas molestias excepturi cupiditate non.</p>
                                                <div className="quote-img">
                                                    <img src={quotes} alt="" className="img-fluid" />
                                                </div>
                                            </div>
                                            <div className="mt-2">
                                                <div className="float-end ms-3">
                                                    <div className="client-img">
                                                        <img src={img5} alt="" className="img-fluid rounded-circle" />
                                                    </div>
                                                </div>
                                                <div className="clients-name text-end pt-3">
                                                    <h6 className="text-white fw-normal position-relative f-17 mb-0"><span
                                                        className="after-border"></span> Shana Esposito</h6>
                                                    <p className="text-white-70 f-13 mb-0">Web Developer</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="testi-content">
                                            <div className="testi-box mt-4">
                                                <h4 className="text-white mb-3 fw-light">"Graphic Developer"</h4>
                                                <p className="text-white-70 fw-light mb-0 f-15">At vero eos et accusamus et iusto odio
                                                    dignissimos that site ducimus qui blanditiis praesentium voluptatum deleniti
                                                    atque
                                                    corrupti quos dolores quas molestias excepturi cupiditate non.</p>
                                                <div className="quote-img">
                                                    <img src={quotes} alt="" className="img-fluid" />
                                                </div>
                                            </div>
                                            <div className="mt-2">
                                                <div className="float-end ms-3">
                                                    <div className="client-img">
                                                        <img src={img6} alt="" className="img-fluid rounded-circle" />
                                                    </div>
                                                </div>
                                                <div className="clients-name text-end pt-3">
                                                    <h6 className="text-white fw-normal position-relative f-17 mb-0"><span
                                                        className="after-border"></span> Linda Sanor</h6>
                                                    <p className="text-white-70 f-13 mb-0">UI/UX Designer</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

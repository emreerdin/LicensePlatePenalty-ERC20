import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

//import images
import blog1 from '../assets/images/blog/img-1.jpg';
import blog2 from '../assets/images/blog/img-2.jpg';
import blog3 from '../assets/images/blog/img-3.jpg';

export default class Blog extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="section" id="blog">
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <div className="title-heading mb-5">
                                    <h3 className="text-dark mb-1 fw-light text-uppercase">The Blog</h3>
                                    <div className="title-border-simple position-relative"></div>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg={4}>
                                <div className="blog position-relative">
                                    <div className="blog-img position-relative mt-4">
                                        <div className="blog-date">
                                            <p className="mb-0 fw-light text-white f-15">01 Jan 2019</p>
                                        </div>
                                        <img src={blog1} alt="" className="img-fluid mx-auto d-block rounded" />
                                    </div>
                                    <div className="position-relative">
                                        <div className="blog-content text-center bg-white p-4">
                                            <p className="text-uppercase f-13 mb-2 text-muted">ui/ux designer</p>
                                            <h5 className="fw-normal f-18"><Link to="#" className="text-dark">Quis autem reprehenderit</Link>
                                            </h5>
                                            <p className="text-muted f-14">
                                                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis deleniti
                                                corrupti.
                                            </p>
                                            <div className="read-more">
                                                <Link to="#" className=" text-primary f-15">Read more<i
                                                    className="mdi mdi-arrow-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4}>
                                <div className="blog position-relative">
                                    <div className="blog-img position-relative mt-4">
                                        <div className="blog-date">
                                            <p className="mb-0 fw-light text-white f-15">02 Jan 2019</p>
                                        </div>
                                        <img src={blog2} alt="" className="img-fluid mx-auto d-block rounded" />
                                    </div>
                                    <div className="position-relative">
                                        <div className="blog-content text-center bg-white p-4">
                                            <p className="text-uppercase f-13 mb-2 text-muted">web developer</p>
                                            <h5 className="fw-normal f-18"><Link to="#" className="text-dark">At vero eos accusamus</Link></h5>
                                            <p className="text-muted f-14">
                                                Et harum quidem rerum it facilis est et expedita distinctio a libero tempore
                                                cumsoluta.
                                            </p>
                                            <div className="read-more">
                                                <Link to="#" className=" text-primary f-15">Read more<i
                                                    className="mdi mdi-arrow-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4}>
                                <div className="blog position-relative">
                                    <div className="blog-img position-relative mt-4">
                                        <div className="blog-date">
                                            <p className="mb-0 fw-light text-white f-15">03 Jan 2019</p>
                                        </div>
                                        <img src={blog3} alt="" className="img-fluid mx-auto d-block rounded" />
                                    </div>
                                    <div className="position-relative">
                                        <div className="blog-content text-center bg-white p-4">
                                            <p className="text-uppercase f-13 mb-2 text-muted">web designer</p>
                                            <h5 className="fw-normal f-18"><Link to="#" className="text-dark">Et harum quidem rerum</Link></h5>
                                            <p className="text-muted f-14">
                                                Temporibus autemes quibusdam et aut offici debitis rerum necessitatibus recusandae.
                                            </p>
                                            <div className="read-more">
                                                <Link to="#" className=" text-primary f-15">Read more<i
                                                    className="mdi mdi-arrow-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

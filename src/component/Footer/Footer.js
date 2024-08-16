import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import FooterLink from './FooterLink';

export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            links: [
                {
                    id: 1,
                    title: "SUPPORT",
                    child: [
                        { title: "Get Started", link: "/" },
                        { title: "Blog", link: "/" },
                        { title: "Knowledge Base", link: "/" },
                    ],
                },
                {
                    id: 2,
                    title: "LEGAL",
                    child: [
                        { title: "Terms & Conditions", link: "/" },
                        { title: "Privacy Policy", link: "/" },
                        { title: "Customers", link: "/" },
                        { title: "Pricing", link: "/" },
                    ]
                }
            ]
        };
    };
    render() {
        return (
            <React.Fragment>
                <section className="footer-bg">
                    <Container>
                        <Row>
                            <Col lg={4}>
                                <div className="mb-5">
                                    <p className="text-uppercase text-dark footer-title mb-4">About Us</p>
                                    <p className="text-muted f-14">License Plate Penalty System has been developed to ease payment processes
                                    of penalties and taxes owned by governmental organizations.</p>
                                </div>
                            </Col>
                            <Col lg={8}>
                                <Row>
                                    {this.state.links.map((link, key) => (
                                        <Col lg={4} key={key}>
                                            <div className="mb-5">
                                                <p className="text-uppercase text-dark footer-title mb-4">{link.title}</p>
                                                <ul className="list-unstyled footer-sub-menu">
                                                    {link.child.map((linkItem, key) => (
                                                        <li className="f-14" key={key}><Link to={linkItem.link} className="text-muted">{linkItem.title}</Link></li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <FooterLink />
            </React.Fragment>
        );
    };
};

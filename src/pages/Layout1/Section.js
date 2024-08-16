import React, { Component } from 'react'

import home1 from '../../assets/images/home-2-img.png';
// import home2 from '../../assets/images/home-2-bg.png';
import home2 from '../../assets/images/homr-2-bg-bottom.png';

import { Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Section extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section home-2-bg" id="home">
          <div className="home-center">
            <div className="home-desc-center">
              <Container>
                <Row className="align-items-center">
                  <Col lg={5}>
                    <div className="mt-40 home-2-content">
                      <h1 className="text-white fw-normal home-2-title display-4 mb-0">Licence Plate Penalty System
                      </h1>
                      <p className="text-white-70 mt-4 f-15 mb-0">A new way of penalty payment system on blockchain.</p>
                      <div className="mt-5">
                        <Link to="#" className="btn btn-custom me-4">Learn More</Link>
                      </div>
                    </div>
                  </Col>
                  <Col lg={7}>
                    <div className="mt-40 home-2-content position-relative">
                      <img src={home1} alt=""
                        className="img-fluid mx-auto d-block home-2-img mover-img" />
                      <div className="home-2-bottom-img">
                        <img src={home2} alt="" className="img-fluid d-block mx-auto" />
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </section>
      </React.Fragment>
    )
  }
}

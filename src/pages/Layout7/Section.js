import React, { Component } from 'react';
import Slider from "react-slick";
import { Col, Container, Row } from 'reactstrap';
import Typewriter from 'typewriter-effect';

import img1 from '../../assets/images/home-7-1-bg.jpg';
import img2 from '../../assets/images/home-7-2-bg.jpg';
import img3 from '../../assets/images/home-7-3-bg.jpg';

const items = [
  {
    id: 1,
    image: img1,
  },
  {
    id: 2,
    image: img2,
  },
  {
    id: 3,
    image: img3,
  },
];
export default class Section extends Component {

  render() {
    var settings = {
      autoplay: true,
      infinite: true,
      autoplaySpeed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      draggable: true,
      pauseOnHover: true,
    };
    const slides = items.map((item, key) => {
      return (
        <section className="back-slide home-7-bg" id="home" key={key}>
          <img name="silde" className="slide-img" src={item.image} alt="" />
          <div className="bg-overlay-hero"></div>
          <div className="home-center">
            <div className="home-desc-center">
              <Container>
                <Row className="justify-content-center">
                  <Col lg={8}>
                    <div className="mt-40 text-center home-5-content">
                      <h1 className="text-white fw-light home-7-title mb-0">
                        <span href="" className="typewrite">

                          <span className="wrap">
                            <Typewriter
                              options={{
                                strings: ['Professional Landing Page Template', 'We are Creative', 'We are Modern'],
                                autoStart: true,
                                loop: true,
                              }}
                            />
                          </span>

                        </span>
                      </h1>

                      <p className="text-white-70 fw-light mt-4 f-15 mb-0">Aliquam lorem ante dapibus in viverra
                      quis feugiat a tellus hasellus viverra nulla ut metus varius laoreet uisque rutrum
                      enean imperdiet tiam ultricies nisi vel augue urabitur as ullamcorper.</p>
                      <div className="text-center search-form mt-5">
                        <form action="#">
                          <input type="text" placeholder="Email" className='me-1'/>
                          <button type="submit"
                            className="btn rounded-pill btn-custom mt-10">SubCribe</button>
                        </form>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </section>
      )
    });
    return (
      <React.Fragment>
        <section className="main-slider overflow-hidden">
          <Slider className="slide-img" {...settings}>
            {slides}
          </Slider>
        </section>
      </React.Fragment>
    );
  }
}

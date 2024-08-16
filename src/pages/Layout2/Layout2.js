import React, { Component, Suspense } from "react";

// Importing Section
const Navbar = React.lazy(() => import("../../component/Navbar/NavBar"));

const Section = React.lazy(() => import("../Layout2/Section"));
const About = React.lazy(() => import("../../component/About"));
const Services = React.lazy(() => import("../../component/Services"));
const Features = React.lazy(() => import("../../component/Features"));
const Pricing = React.lazy(() => import("../../component/Pricing"));
const Clients = React.lazy(() => import("../../component/Clients"));
const Blog = React.lazy(() => import("../../component/Blog"));
const Contact = React.lazy(() => import("../../component/Contact"));
const Footer = React.lazy(() => import("../../component/Footer/Footer"));

// import { Spinner } from "reactstrap";

class Layout2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navItems: [
        { id: 1, idnm: "home", navheading: "Home" },
        { id: 2, idnm: "about", navheading: "About" },
        { id: 3, idnm: "services", navheading: "Services" },
        { id: 4, idnm: "features", navheading: "Features" },
        { id: 5, idnm: "pricing", navheading: "Pricing" },
        { id: 6, idnm: "clients", navheading: "Clients" },
        { id: 7, idnm: "blog", navheading: "Blog" },
        { id: 7, idnm: "contact", navheading: "Contact Us" },
      ],
      pos: document.documentElement.scrollTop,
      imglight: true,
      navClass: "nav-sticky navbar-custom sticky sticky-dark",
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollNavigation, true);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollNavigation, true);
  }

  scrollNavigation = () => {
    var scrollup = document.documentElement.scrollTop;
    if (scrollup > this.state.pos) {
      this.setState({ navClass: "nav-sticky navbar-custom sticky sticky-dark", imglight: false });
    } else {
      this.setState({ navClass: "nav-sticky navbar-custom sticky sticky-dark", imglight: true });
    }
  };

  //set preloader div
  PreLoader = () => {
    return (
      <div id="preloader">
        <div id="status">
          <div className="sk-cube-grid">
            <div className="sk-cube sk-cube1"></div>
            <div className="sk-cube sk-cube2"></div>
            <div className="sk-cube sk-cube3"></div>
            <div className="sk-cube sk-cube4"></div>
            <div className="sk-cube sk-cube5"></div>
            <div className="sk-cube sk-cube6"></div>
            <div className="sk-cube sk-cube7"></div>
            <div className="sk-cube sk-cube8"></div>
            <div className="sk-cube sk-cube9"></div>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <React.Fragment>
        <Suspense fallback={this.PreLoader()}>
          {/* Importing Navbar */}
          <Navbar
            navItems={this.state.navItems}
            navClass={this.state.navClass}
            imglight={this.state.imglight}
          />

          {/* Importing Section */}
          <Section />

          {/* Importing About */}
          <About isPrimary={true} />

          {/* Importing Services */}
          <Services />

          {/* Importing Features */}
          <Features />

          {/* Importing Pricing */}
          <Pricing />

          {/* Importing Clients */}
          <Clients />

          {/* Importing Blog */}
          <Blog />

          {/* Importing Contact */}
          <Contact />

        {/* Importing Footer */}
          <Footer />

        </Suspense>
      </React.Fragment>
    );
  }
}
export default Layout2;

import React, { Component } from "react";
import { Web3Button } from '@web3modal/react'
import {
  Nav,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  Container,
  Collapse,
} from "reactstrap";
// Import Logo
import logodark from "../../assets/images/zooki.png";
import logolight from "../../assets/images/zooki.png";
import "../../assets/css/style.css"
//import icon
import FeatherIcon from "feather-icons-react";

import ScrollspyNav from "./Scrollspy";

class NavbarPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenMenu: false,
    };
  }

  toggle = () => {
    this.setState({ isOpenMenu: !this.state.isOpenMenu });
  };

  render() {
    var targetId = this.props.navItems.map((item) => {
      return item.idnm;
    });
    return (
      <React.Fragment>
        {/* Navbar Start */}
        <nav
         className={"navbar navbar-expand-lg fixed-top sticky " + this.props.navClass}
        >
          <Container>
            {/* LOGO */}
            <NavbarBrand className="logo" href="/">
              {this.props.imglight === true ? (
                <img src={logolight} alt="" height="20" />
              ) : (
                <img src={logodark} alt="" height="20" />
              )}
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle}>
              <i>
                <FeatherIcon icon="menu" />
              </i>
            </NavbarToggler>
            <Collapse
              id="navbarCollapse"
              isOpen={this.state.isOpenMenu}
              className=" navbar-collapse"
            >
              <ScrollspyNav
                scrollTargetIds={targetId}
                scrollDuration="800"
                headerBackground="true"
                activeNavClass="active"
                className="navbar-collapse"
              >
                <Nav navbar className="ms-auto navbar-center" id="mySidenav">
                  {this.props.navItems.map((item, key) => (
                    <NavItem
                      key={key}
                      className={item.navheading === "Home" ? "active" : ""}
                    >
                      <NavLink
                        className={item.navheading === "Home" ? "active" : ""}
                        href={"#" + item.idnm}
                      >
                        {item.navheading}
                      </NavLink>
                    </NavItem>
                  ))}
                </Nav>
                <div className="connect-wallet-button-wrapper">
                  <Web3Button />
                </div>
                
              </ScrollspyNav>
            </Collapse>
          </Container>
        </nav>
      </React.Fragment>
    );
  }
}
// }
export default NavbarPage;

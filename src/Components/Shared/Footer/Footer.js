import React, { useState } from "react";
import "./Footer.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from "reactstrap";

const Footer = props => {
  //   const [isOpen, setIsOpen] = useState(false);

  //   const toggle = () => setIsOpen(!isOpen);

  let today = new Date().toISOString().slice(0, 10);

  return (
    <div>
      <footer class="page-footer">
        <div class="container-fluid container-fluid-max">
          <div class="row">
            <div class="col-12 col-md-6 white footer-child card-title">
              Snapcheckit
            </div>
            <div class="col-12 col-md-6 footer-child footer-links">
              <a href="" class="mr-3">
                {today}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

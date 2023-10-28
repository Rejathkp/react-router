import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler, 
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export default function Nvbr() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <div>
    <MDBNavbar expand="lg" light bgColor="secondary">
      <MDBContainer fluid>
        <MDBNavbarBrand href="/">
          <img
            alt="CinemaBreak"
            src="https://img.freepik.com/vecteurs-libre/lion-logo-design_474888-2174.jpg"
            width="60"
            height="50"
            className="d-inline-block align-center"
          />{" "}Buddies
        </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current="page" href="#">
                <Link
                  className="text-primary-emphasis text-decoration-none"
                  to="/login"
                >
                  Login
                </Link>
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink active aria-current="page" href="#">
                <Link
                  className="text-primary-emphasis text-decoration-none"
                  to="/signup"
                >
                  Sign Up
                </Link>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current="page" href="#">
                <Link
                  className="text-primary-emphasis text-decoration-none"
                  to="/event"
                >
                  Event
                </Link>
              </MDBNavbarLink>
            </MDBNavbarItem>
            
          </MDBNavbarNav>

          <form className="d-flex input-group w-auto">
            <input
              type="search"
              className="form-control"
              placeholder="Type query"
              aria-label="Search"
            />
            <MDBBtn color="primary">Search</MDBBtn>
          </form>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    </div>
  );
}

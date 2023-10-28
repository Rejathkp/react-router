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

export default function Navbr() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <div>
    <MDBNavbar expand="lg" light bgColor="secondary" style={{height:"70px"}}>
      <MDBContainer fluid>
        

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
                  to="/Hme"
                >
                  Home
                </Link>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current="page" href="#">
                <Link
                  className="text-primary-emphasis text-decoration-none"
                  to="/lgin"
                >
                  Login
                </Link>
              </MDBNavbarLink>
            </MDBNavbarItem>
           

            
            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                  Products
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                
                 
                  <Link className="text-primary-emphasis text-decoration-none"
                  to="/nw">
                <MDBDropdownItem link>Men's Clothing</MDBDropdownItem>
                </Link>
                <Link className="text-primary-emphasis text-decoration-none"
                  to="/electronics">
                  <MDBDropdownItem link>Electroincs</MDBDropdownItem>
                </Link>
                <Link className="text-primary-emphasis text-decoration-none"
                  to="/women">
                  <MDBDropdownItem link>Women's Clothing</MDBDropdownItem>
                </Link>  
                <Link className="text-primary-emphasis text-decoration-none"
                  to="/jewelery">
                  <MDBDropdownItem link>Jewelery</MDBDropdownItem>
                </Link>  
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem> 
            
          </MDBNavbarNav>

        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    </div>
  );
}

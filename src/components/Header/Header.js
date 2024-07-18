import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import logo from '../../assets/img/logo.png';

const ImageStyle = {
  height: "60px",
  width: "200px"
};

function Header() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container className="d-flex justify-content-center">
          <Navbar.Brand href="#home">
            <img src={logo} style={ImageStyle} alt="Logo"/>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
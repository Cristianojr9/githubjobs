import React from 'react';
import { Link } from 'react-router-dom';

import LogoImg from '../../assets/logo.png';

import { Container, Logo, Nav } from './styles';

function Header() {
  return (
    <Container>
      <Logo >
        <Link to="/">
          <img src={LogoImg} alt="github" />
        </Link>
      </Logo>
      <Nav>
        <Link to="/api">
          API
        </Link>
        <Link to="/faq">
          How it Works
        </Link>
      </Nav>
    </Container>
  );
}

export default Header;
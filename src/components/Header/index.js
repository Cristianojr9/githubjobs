import React from 'react';
import { Link } from 'react-router-dom';

import LogoImg from '../../assets/logo.png';

import { Container, Logo, Nav } from './styles';

function Header() {
  return (
    <Container>
      <Logo>
        <img src={LogoImg} alt="github" />
      </Logo>
      <Nav>
        <Link to="/">
          How it Works
        </Link>
      </Nav>
    </Container>
  );
}

export default Header;
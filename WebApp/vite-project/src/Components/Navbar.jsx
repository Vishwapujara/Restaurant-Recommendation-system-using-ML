import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90px;
  background-color:#E4694C;
  color: #fff;
  font-family: "Pacifico", cursive;
  position: sticky;
  top: 0;
`;

const Title = styled.h1`
  font-size: 3rem;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Title>TastyQuest</Title>
    </NavbarContainer>
  );
};

export default Navbar;

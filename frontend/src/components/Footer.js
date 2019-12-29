import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100vw;
  height: 20vh;
  min-height: 8rem;
`;
const List = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  ul {
    list-style: none;
    li {
      padding: 0 1rem;
    }
  }
`;

const Footer = () => {
  return (
    <Footer>
      <div>Logo</div>
      <Menu />
      <List>
        <ul>
          <li>Home</li>
          <li>Manga</li>
          <li>Contact</li>
          <li>About</li>
        </ul>
      </List>
    </Footer>
  );
};

export default Footer;

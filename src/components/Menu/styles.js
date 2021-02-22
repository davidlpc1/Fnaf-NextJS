import styled from "styled-components";

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #c4c4c4;
`;

export const Nav = styled.nav`
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  a {
    text-decoration: none;
    color: #000;
    transition: 350ms ease-in-out;

    &:hover {
      opacity: 0.6;
    }
  }
`;

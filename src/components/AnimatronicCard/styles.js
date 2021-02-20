import styled from "styled-components";

export const AnimatronicCardContainer = styled.li`
  list-style: none;
  margin: 5px;

  button {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 2px;
    background: transparent;
    border: none;
    outline: none;
  }
`;

export const AnimatronicImage = styled.img`
  width: 15.5rem;
  height: 15.5rem;
  object-fit: cover;
  border-radius: 5px;
  background: rgb(58,91,11);
background: radial-gradient(circle, rgba(58,91,11,1) 0%, rgba(0,0,0,1) 100%);
`;
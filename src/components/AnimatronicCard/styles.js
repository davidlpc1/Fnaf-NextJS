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
  background-color: #ccc;
`;
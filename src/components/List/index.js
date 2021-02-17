import styled from 'styled-components';

const List = styled.ul`
  display:grid;
  grid-template-columns:repeat(3,1fr);

  @media (min-width:1920px){
    grid-template-columns:repeat(4,1fr);
  }
  @media (max-width:1080px){
    grid-template-columns:repeat(2,1fr);
  }
  @media (max-width:590px){
    grid-template-columns:1fr;
  } 
`;

export default List;
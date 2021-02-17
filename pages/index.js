import React,{ useState,useEffect } from 'react';
import Head from 'next/head'
import styled from 'styled-components';

const List = styled.ul`
  display:flex;
  flex:1;
  /* flex-grow:0; */
  flex-shrink:1;
`;

const AnimatronicCardContainer = styled.div`
  margin:2px;
`;

const AnimatronicImage = styled.img`
  width: 250px;
  height: 250px;
  object-fit:cover;
  border-radius: 5px;
  background-color:#ccc;
`;


function AnimatronicCard({ image,name,game }){
  return (
    <AnimatronicCardContainer>
      <AnimatronicImage src={image || 'https://placehold.it/150x150'} />
      <strong>{name}</strong>
      {' '}
      <span>{game}</span>
    </AnimatronicCardContainer>
  )
}

export default function Home() {
  const [animatronics,setAnimatronics] = useState([])

  useEffect(async() => {
    const animatronicsOfApi = await fetch('/api/v1/all');
    const animatronicsOfApiJson = await animatronicsOfApi.json();

    setAnimatronics(animatronicsOfApiJson);
  },[])

  return (
    <div>
      <Head>
        <title>Fnaf Web</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <List>
        {animatronics.map(({ name,image,game }) => (
          <AnimatronicCard key={`${name} of ${game}----${image}`} name={name} image={image}  game={game} />
        ))}
      </List>

    </div>
  )
}

import React,{ useState,useEffect } from 'react';
import Head from 'next/head'
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

const AnimatronicCardContainer = styled.li`
  list-style:none;  
  margin:5px;

  button{
    cursor:pointer;
    display:flex;
    flex-direction:column;
    gap:2px;
    background:transparent;
    border:none;
    outline:none;
  }
`;

const AnimatronicImage = styled.img`
  width: 15.5rem;
  height: 15.5rem;
  object-fit:cover;
  border-radius: 5px;
  background-color:#ccc;
`;


function AnimatronicCard({ image,name,game }){
  function speakNameOfAnimatronic(){
    if (!"speechSynthesis" in window) return;
    window.speechSynthesis.cancel(msg);

    const msg = new SpeechSynthesisUtterance();
    msg.text = `${name} of ${game}`;
    msg.lang = "en-us";
    window.speechSynthesis.speak(msg);

    return
  }

  return (
    <AnimatronicCardContainer>
      <button onClick={speakNameOfAnimatronic}>
        <AnimatronicImage src={image || 'https://placehold.it/150x150'} />
        <strong>{name}</strong>
        {' '}
        <span>{game}</span>
      </button>
    </AnimatronicCardContainer>
  )
}

export default function Home() {
  const [animatronics,setAnimatronics] = useState([])

  useEffect(() => {
    async function fetchData(){
      const animatronicsOfApi = await fetch('/api/v1/all');
      const animatronicsOfApiJson = await animatronicsOfApi.json();
  
      setAnimatronics(animatronicsOfApiJson);
    }

    fetchData()
  },[ ])

  return (
    <div>
      <Head>
        <title>Fnaf Web</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {animatronics.length > 0 && (
        <List>
          {animatronics.map(({ name,image,game }) => (
            <AnimatronicCard key={`${name} of ${game}----${image}`} name={name} image={image}  game={game} />
          ))}
        </List>
      )}

    </div>
  )
}

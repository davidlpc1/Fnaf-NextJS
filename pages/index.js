import React,{ useState,useEffect } from 'react';

import Head from '../src/components/Head';
import AnimatronicCard from '../src/components/AnimatronicCard'
import List from '../src/components/List';

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
      <Head title="Fnaf Web" />
      <h1 style={{ margin:5 }}>Fnaf API</h1>
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

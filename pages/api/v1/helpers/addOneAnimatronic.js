// ONLY FOR DEVELOPMENTING

const images = require('../image/images.json');
const animatronics = require('../animatronics.json')
const fs = require('fs');

export default function AddOneAnimatronic(request,response){
    const name = "Adventure Lolbit";
    const image = "https://www.kindpng.com/picc/m/540-5403399_fnafworld-adventure-lolbit-fnaf-world-adventure-lolbit-hd.png";
    const game = "Five Nights at Freddy World";
    
    const nameInLowerCase = name.toLowerCase();
    images.push({ name,image })
    animatronics.push(    {
        name,image:`http://localhost:3000/api/v1/image/${nameInLowerCase}`,game
    },)

    fs.writeFileSync("pages/api/v1/image/images.json",JSON.stringify(images,null,4))
    fs.writeFileSync("pages/api/v1/animatronics.json",JSON.stringify(animatronics,null,4))

    response.status(200).send(`
        <h1>Name:${name}</h1>
        <h3>Game:${game}</h3>
        <img src="${image}" alt="Isso aí" width="250" height="250">
    `)
}

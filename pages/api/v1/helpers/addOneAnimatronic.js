// ONLY FOR DEVELOPMENTING

// const images = require('../image/images.json');
// const animatronics = require('../animatronics.json')
// const fs = require('fs');

// export default function AddOneAnimatronic(request,response){
//     const name = "Adventure Spring Freddy";
//     const image = "https://th.bing.com/th/id/R162bafd2039ec4b2a89761c931672f77?rik=JmptcnBE0EKV%2fA&riu=http%3a%2f%2forig05.deviantart.net%2f14aa%2ff%2f2016%2f173%2f6%2f4%2fadventure_spring_freddy_by_dexdrakkar-da789sl.png&ehk=LtjYtqHU9s%2bTZ6RWB9oLUF3M7XoxQevnEMzTInDlCCc%3d&risl=&pid=ImgRaw";
//     const game = "Fnaf World";
    
//     const nameInLowerCase = name.toLowerCase();
//     images.push({ name,image })
//     animatronics.push(    {
//         name,image:`http://localhost:3000/api/v1/image/${nameInLowerCase}`,game
//     },)

//     fs.writeFileSync("pages/api/v1/image/images.json",JSON.stringify(images,null,4))
//     fs.writeFileSync("pages/api/v1/animatronics.json",JSON.stringify(animatronics,null,4))

//     response.status(200).send(`
//         <h1>Name:${name}</h1>
//         <h3>Game:${game}</h3>
//         <img src="${image}" alt="Isso aí" width="250" height="250">
//     `)
// }

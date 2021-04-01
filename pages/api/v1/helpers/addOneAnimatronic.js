// ONLY FOR DEVELOPMENTING

// const images = require('../image/images.json');
// const animatronics = require('../animatronics.json')
// const fs = require('fs');

// export default function AddOneAnimatronic(request,response){
//     const name = "Adventure Withered Foxy";
//     const image = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/984bb716-b4a7-4ce0-9deb-b584b6c143f2/da5iejb-e14431e5-a21c-4334-9886-a016f8c41f48.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvOTg0YmI3MTYtYjRhNy00Y2UwLTlkZWItYjU4NGI2YzE0M2YyXC9kYTVpZWpiLWUxNDQzMWU1LWEyMWMtNDMzNC05ODg2LWEwMTZmOGM0MWY0OC5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.f9zZmnlep2UHfrRvtmdHmDg3M1hOn0BhdiKSRLgb_sA";
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

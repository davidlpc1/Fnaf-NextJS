// ONLY FOR DEVELOPMENTING

// const images = require('../image/images.json');
// const animatronics = require('../animatronics.json')
// const fs = require('fs');

// export default function AddOneAnimatronic(request,response){
//     const name = "Adventure Nightmare Ballon Boy";
//     const image = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d4cdd49b-1838-4f98-b891-aa27a64629f7/d9sdg4k-7a0a2168-fbcb-40c9-aa12-7b4ccba0871a.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZDRjZGQ0OWItMTgzOC00Zjk4LWI4OTEtYWEyN2E2NDYyOWY3XC9kOXNkZzRrLTdhMGEyMTY4LWZiY2ItNDBjOS1hYTEyLTdiNGNjYmEwODcxYS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.QIrNTr7ip05LGizWSkWBKkDGnO_xWm9Q3HHiYBAMYts";
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

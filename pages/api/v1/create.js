import animatronics from './animatronics.json';
import fs from 'fs';
import path from 'path';

export default function getImage(request,response){
    const { name,image,game } = request.query;
    if (request.method === 'OPTIONS') {
        response.status(200).end();
        return;
    }
    
    response.setHeader('Access-Control-Allow-Credentials', true);
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    
    animatronics.push({ name,image,game })
    fs.writeFileSync('pages/api/v1/animatronics.json',JSON.stringify(animatronics,null,4))

    response.status(200).send(animatronics);
}
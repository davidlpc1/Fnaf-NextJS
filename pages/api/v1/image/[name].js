import animatronics from '../animatronics.json';

export default function getImage(request,response){
    const { name } = request.query;
    if (request.method === 'OPTIONS') {
        response.status(200).end();
        return;
    }
    
    response.setHeader('Access-Control-Allow-Credentials', true);
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    
    const character = animatronics.find(animatronic => animatronic.name.trim().toLowerCase() === name.trim().toLowerCase())
    if(!character){
        response.status(404).json({ message:'That animatronic doesnt exists',name })
        return;
    }

    response.status(200).redirect(character.image);
}
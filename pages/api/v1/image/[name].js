import animatronics from './images.json';

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
        response.status(404).redirect('https://cdn.neemo.com.br/uploads/settings_webdelivery/logo/3957/image-not-found.jpg');
        return;
    }

    response.status(200).redirect(character.image);
}
const http = require('http');

http.createServer( ( req,resp ) =>{
    
    resp.writeHead(200,{ 'Content-Type': 'application/json'});

    let salida = {
        nombre: 'Jaime',
        edad : 26,
        url : req.url
    }
    resp.write( JSON.stringify(salida) );
    resp.end();

})
.listen(8089);

console.log("Escuchando el puerto 8089")


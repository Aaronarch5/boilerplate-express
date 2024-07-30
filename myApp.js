let express = require('express');
let app = express();

/*
Aunque un servidor HTML sirve HTML, una API sirve datos. 
Una API REST (Transferencia de Estado Representacional) permite el intercambio de datos de manera simple, 
sin que los clientes necesiten conocer ningún detalle sobre el servidor. 
El cliente solo necesita saber dónde está el recurso (la URL) y la acción que desea realizar sobre él (el verbo). 
El verbo GET se usa cuando estás obteniendo información sin modificar nada. Hoy en día, el formato de datos preferido para mover información en la web es JSON. 
En pocas palabras, JSON es una forma conveniente de representar un objeto JavaScript como una cadena, 
para que pueda transmitirse fácilmente.
*/

app.get('/json', (req, res) => {
    let message = "Hello json";
    if (process.env.MESSAGE_STYLE === 'uppercase') {
      message = message.toUpperCase();
    }
    res.json({ message });
  });
  


app.use('/public', express.static(__dirname + '/public'));

app.get("/",
    function(req, res)
    {
        var absolutePath = __dirname + '/views/index.html';
        res.sendFile(absolutePath);
    }
);

































 module.exports = app;

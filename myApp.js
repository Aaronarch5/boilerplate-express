let express = require('express');
let app = express();

/*
Se utiliza para mantener los archivos CSS,JS,estaticos.

express.static(__dirname + /path)

Donde public será la carpeta donde se encuentre en este caso la hoja de estilos. 
*/

app.use('/public', express.static(__dirname + '/public'));

app.get("/",
    function(req, res)
    {
        var absolutePath = __dirname + '/views/index.html';
        res.sendFile(absolutePath);
    }
);

































 module.exports = app;

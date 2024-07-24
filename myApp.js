let express = require('express');
let app = express();

app.get
("/",
    function(req, res)
    {
        var absolutePath = __dirname + '/views/index.html';
        res.sendFile('/views/index.html')
    }
);

































 module.exports = app;

let express = require('express');
let app = express();

console.log("Hello world!");   

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});



const express = require('express')
const app = express()
const port = 3000
const path = require('path');

app.get('/', (req, res) =>{
    res.send('Conociendo Node.js');
});

/*app.get('/public', (req, res) => {
    var filePath = path.join(__dirname,'/public/index.html');
    res.sendFile(filePath);
})*/

app.listen(port, () => {
    console.log(`Se esta ejecutando sobre el puerto ${port}`)
})
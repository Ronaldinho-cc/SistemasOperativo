const express = require('express')
const app = express()
const port = 3000
const path = require('path');

app.use('/public', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.send('Conociendo Node.js');
})

app.listen(port, () => {
    console.log(`Se esta ejecutando sobre el puerto ${port}`)
})
const express = require ('express');
const app = express();
const path = require ('path');

const publicPath = path.join (__dirname, '/public');
app.use ( express.static(publicPath));

app.listen (8000, () => {
    console.log ('Servidor corriendo correctamente en el url http://localhost:8000')
})

app.get ('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'));
})
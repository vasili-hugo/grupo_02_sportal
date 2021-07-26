const express = require ('express');
const app = express();
const path = require ('path');

const publicPath = path.join (__dirname, '/public');
app.use (express.static(publicPath));

// app.get ('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '/views/index.html'));
// })

app.get('/home', function(req, res){
    res.sendFile(path.join(__dirname, '/views/home.html'))
});

app.get('/favicon.ico', function(req, res){
    res.sendFile(path.join(__dirname, '/public/imgs/favicon.ico'))
});

app.listen (8000, () => {
    console.log ('Servidor corriendo en http://localhost:8000')
})
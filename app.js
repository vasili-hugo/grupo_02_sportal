const express = require ('express');
const app = express();
const path = require ('path');

const publicPath = path.join (__dirname, '/public');
app.use (express.static(publicPath));

app.get ('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'));
})

app.get('/index', function(req, res){
    res.sendFile(path.join(__dirname, '/views/index.html'))
});

app.get('/home', function(req, res){
    res.sendFile(path.join(__dirname, '/views/home.html'))
});

app.get('/productCats', function(req, res){
    res.sendFile(path.join(__dirname, '/views/productCats.html'))
});

app.get('/productCart', function(req, res){
    res.sendFile(path.join(__dirname, '/views/productCart.html'))
});

app.get('/favicon.ico', function(req, res){
    res.sendFile(path.join(__dirname, '/public/imgs/favicon.ico'))
});

app.get('/producto', function(req, res){
    res.sendFile(path.join(__dirname, '/views/producto.html'))
});

app.listen (8000, () => {
    console.log ('Servidor corriendo en http://localhost:8000')
})
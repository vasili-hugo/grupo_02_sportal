const express = require ('express');
const app = express();
const path = require ('path');

const publicPath = path.join (__dirname, '/public');
app.use (express.static(publicPath));

app.get ('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'));
})

// A reemplazar por index
app.get('/home', function(req, res){
    res.sendFile(path.join(__dirname, '/views/index.html'))
});

app.get('/favicon.ico', function(req, res){
    res.sendFile(path.join(__dirname, '/public/imgs/favicon.ico'))
});

// app.get('/home', function(req, res){
//     res.sendFile(path.join(__dirname, '/views/home_old.html'))
// });
// Version anterior a /productos
app.get('/productCats', function(req, res){
    res.sendFile(path.join(__dirname, '/views/productCats.html'))
});

app.get('/carrito', function(req, res){
    res.sendFile(path.join(__dirname, '/views/productCart.html'))
});

app.get('/producto', function(req, res){
    res.sendFile(path.join(__dirname, '/views/producto.html'))
});

app.get('/productos', function(req, res){
    res.sendFile(path.join(__dirname, '/views/productos.html'))
});

app.get('/login', function(req, res){
    res.sendFile(path.join(__dirname, '/views/login.html'))
});

app.listen (8000, () => {
    console.log ('Servidor corriendo en http://localhost:8000')
})
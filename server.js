let express = require('express')
let app = express();
let hbs = require('hbs')
require('./hbs/helpers')

let port = process.env.PORT || 3000;
//middleware
app.use(express.static(__dirname + '/public'));



//Express con HBS Template Engine
hbs.registerPartials(__dirname + '/views/parciales');

app.set('view engine', 'hbs');



//Rutas
app.get('/', (req, res) => {
    res.render('home',{
        nombre: 'jorge'
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});
app.listen(port, () => {
    console.log(`Escuchando el puerto ${port}`);
});
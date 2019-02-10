const express = require('express');
const app = express();
const expressValidator = require('express-validator');
const PORT = 3000;
const hbs = require('express-hbs');
const path = require('path');

app.use(express.static('public'));

app.engine('hbs', hbs.express4 ({
    partialsDir: __dirname + '/views/partials'
}));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views')


app.listen(PORT,function(req, res) {
    console.log('Server is running on PORT: ', PORT)
});
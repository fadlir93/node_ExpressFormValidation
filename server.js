const express = require('express');
const app = express();
const expressValidator = require('express-validator');
const PORT = 3000;
const hbs = require('express-hbs');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session')
const blockchain = require('./routes/blockchain.route');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(expressValidator());
app.use(cookieParser());
app.use(session({secret: 'krunal', saveUninitialized: false, resave: false}));
app.use('/blockchain', blockchain)

app.engine('hbs', hbs.express4 ({
    partialsDir: __dirname + '/views'
}));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views')



app.listen(PORT,function(req, res) {
    console.log('Server is running on PORT: ', PORT)
});
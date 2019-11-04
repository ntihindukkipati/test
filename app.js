var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
    cors = require('cors'),
    path = require('path');


var app = express();

var bodyParser = require('body-parser');

// configure the app to use bodyParser()
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cookieParser());


//Listening to nodeJS Application
const PORT= process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log('Listening to PORT:' +PORT);
});


//Setting View Engine
app.set('view engine', 'pug');

//Setting public folder
app.use(express.static('public'));

/*app.use('/bootstrap', express.static(__dirname, + '/node_modules/bootstrap/dist/css/'));*/
//Default Route
app.get('/', function(req, res){
    res.render('login')
});


app.post('/details', function(req, res){
    console.log('Cookies: ', req.cookies);
    res.render('Details', {user: req.cookies.user});
});

app.post('/', function(req, res){
    console.log("Body");
    console.log(req.body);
    res.cookie('user', req.body).render('login');
});

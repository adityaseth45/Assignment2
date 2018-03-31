var express = require ('express');
var routes= require('./routes/index.js');
var app = express();

app.set('view engine', 'ejs');

app.use(express.static(__dirname+'/public'));

app.get('/',routes.home);

app.get('/:city',routes.city);

var port= process.env.PORT || 8080;
app.listen(port, function(){
console.log('server running on port '+port);
});
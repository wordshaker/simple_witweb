var express = require('express');
var app = express();
var router = express.Router();

var path = __dirname;

app.use(express.static(path));
app.use('/', router);

router.get('/', function(req, res) {
    res.sendFile(path + '/index.html')
});

app.use('*', function(req, res) {
    //res.sendFile(path + '404.html') needs something here maybe?!
});

app.listen(1337, function() {
    console.log('Live at Port 1337')
});
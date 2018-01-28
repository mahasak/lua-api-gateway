var express    = require('express');  
var app        = express();           
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;  
var router = express.Router();  
router.get('/', function(req, res) {
    res.json({ 
        message: 'hooray! welcome to our api!' , 
        headers: req.headers
    });   
});

app.use('/api', router);

app.listen(port);
console.log('Magic happens on port ' + port);
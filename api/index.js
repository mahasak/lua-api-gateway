var express    = require('express');  
var app        = express();           
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;  
var router = express.Router();  
router.get('/headers', function(req, res) {
    res.json({ 
        message: 'Backend API in NodeJS with Express!' , 
        headers: req.headers
    });   
});

app.use('/api', router);

app.listen(port);
console.log('API running on port ' + port);
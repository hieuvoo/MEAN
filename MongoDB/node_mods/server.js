// standard express setup
var express=require('express');
app = express();
path = require('path');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./config/mongoose_setup.js")
require("./config/routes.js")(app)

//basic models in models folders
//basic controllers in controllers folder

app.listen(8000, function() {
    console.log('listening port 8000')
});
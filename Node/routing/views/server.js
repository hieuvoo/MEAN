// root route
app.get('/', function (req, res){
  res.render('index', {title: "my Express project"});
});
// route to process new user form data:
app.post('/users', function (req, res){
  // code to add user to db goes here!
  // redirect the user back to the root route. 
  // All we do is specify the URL we want to go to:
  res.redirect('/');
})

// require body-parser
var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded({extended: true}));

// route to process new user form data:
app.post('/users', function (req, res){
  console.log("POST DATA \n\n", req.body)
  //code to add user to db goes here!
  // redirect the user back to the root route.  
  res.redirect('/')
});

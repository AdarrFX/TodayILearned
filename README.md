# TodayILearned
Things that I learned while web developing

## October 28, 2021
### NPM
- MAJOR/MINOR/PATCH NPM version history:
- MAJOR should only increment when API has incompatible features added (non backwards compatiblt)
- MINOR is for new features but the API still works like before
- PATCH is for bugfixes that doesn't add new features
- Use ~ in front of version to render PATCH number irrelevent (1.5.x)
- Use ^ in front for MINOR irrelevency (1.x.x)
- Remember to remove unnecessary commas

### Node
- Serve requests by: app.METHOD(PATH, HANDLER) where HANDLER is a function and PATH is the relative path
- This function is basically (req, res) => {res.send(something)}
- Serving HTML files can be done, but the path must be absolute (__dirname is a Node variable that contains the absolute server path) + whatever relative path you want to serve
- Middleware are functions that intercept route handlers and add information to them (like express.static(PATH) where PATH is the absolute path of the folder with the assets.
- Middlewares are implemented with app.use(PATH, MIDDLEWAREFUNCTION). If PATH is not provided, middleware function is executed for all requests.
- res.json(JSOBJECT) as a function inside app.get() returns a json string
- .env environment variables are accessible from the app using process.env.VARNAME where Varname is the variable name in the .env file
- .env variables are always all UPPERCASE and have no spaces (eg, VAR_NAME=value)
- Remember to use the dotenv package to load .env file into process.env (npm install dotenv), then at top of the myApp.js, import with require('dotenv').config()
- Middleware functions take 3 arguments (request object, response object, and next function in the request-response cycle)
- Middlewares make a "stack" - they're executed in order.
- You can chain middlewares to do various steps:
```
app.get('/user', function(req, res, next) {
  req.user = getTheUserSync();  // Hypothetical synchronous operation
  next();
}, function(req, res) {
  res.send(req.user);
});
```
- Middlewares must be mounted (the code written) BEFORE the routes that depend on them
- The req.query object holds parameters from GET requests URL?thing=value&otherthing=othervalue will store them in req.query.value, etc
- Bodyparser middleware (app.use(bodyParser.urlencoded({extended: false})) is used to parse data from POST requests (the extended one allows for Objects to be included in the POST request)
- 

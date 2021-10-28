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

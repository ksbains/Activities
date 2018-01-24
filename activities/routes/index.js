const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
var auth = require("../controllers/authController");
var user = require("../controllers/usersController");


//API Routes
router.use("/api", apiRoutes);

//Authentication Routes

// restrict index for logged in user only
router.get('/', auth.home);

router.get('/user', auth.user);

// route to register page
router.get('/register', auth.register);

// route for register action
router.post('/register', auth.doRegister);

// route to login page
router.get('/login', auth.login);

// route for login action
router.post('/login', auth.doLogin);

// route for logout action
router.post('/logout', auth.logout);

// if no Api routes are hit, send the React app
router.use(function(req,res) {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

module.exports = router;

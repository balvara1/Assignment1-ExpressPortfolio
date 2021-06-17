let express = require('express');
let router = express.Router();

//make a reference to the index.js in the controller folder
let indexController = require('../controllers/index');

/* GET Home Page. */
router.get('/', indexController.displayHomePage);

/* GET Home Page. */
router.get('/home', indexController.displayHomePage);

/* GET About Me Page. */
router.get('/about', indexController.displayAboutPage);

/* GET Projects Page. */
router.get('/projects', indexController.displayProjectsPage);

/* GET Services Page. */
router.get('/services', indexController.displayServicesPage);


/* GET Contact Me page. */
router.get('/contact', indexController.displayContactPage);


/* POST Contact Form page. */
router.post('/contact-form', function(req, res, next){
  console.log("Contact form request: ", req.body);
  res.redirect('/');
})

/* GET Route for displaying Login page */
router.get('/login', indexController.displayLoginPage);

/* POST Route for processing Login page */
router.post('/login', indexController.processLoginPage);

/* GET Route for displaying Register page */
router.get('/register', indexController.displayRegisterPage);

/* POST Route for processing Register page */
router.post('/register', indexController.processRegisterPage);

/* GET to perform User Logout */
router.get('/logout', indexController.performLogout);


module.exports = router;
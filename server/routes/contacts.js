let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');

//helper function for guard purposes
function requireAuth(req, res, next)
{
    //check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

//connect to our Contacts Model
//let Contacts = require('../models/contacts');

//creating access to the contactlistcontroller

let contactlistcontroller = require('../controllers/contacts');

/* GET Route for the Contact List page - READ Operation*/
router.get('/', requireAuth, contactlistcontroller.displayContactList);

/* GET Route for displaying Add Contact List page - CREATE Operation*/
router.get('/add', requireAuth, contactlistcontroller.displayAddPage);

/* POST Route for processing Add Contact List page - CREATE Operation*/
router.post('/add', requireAuth, contactlistcontroller.processAddPage);

/* GET Route for displaying Edit Contact List page - UPDATE Operation*/
router.get('/edit/:id', requireAuth, contactlistcontroller.displayEditPage);

/* POST Route for processing Edit Contact List page - UPDATE Operation*/
router.post('/edit/:id', requireAuth, contactlistcontroller.processEditPage);

/* GET to perform Deletion - DELETE Operation */
router.get('/delete/:id', requireAuth, contactlistcontroller.performDelete);

module.exports = router;
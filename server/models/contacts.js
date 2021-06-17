let mongoose = require('mongoose');

//create a model class
let contactsModel = mongoose.Schema({
    username: String,
    password: String,
    name: String,
    number: Number,
    email: String
},
{
    collection: "contacts"
});

module.exports = mongoose.model('Contacts', contactsModel);
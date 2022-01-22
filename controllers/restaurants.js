const { restaurants } = require(".");
const db = require("../models");

// Show - Show details for one restaurant
const show = (req, res) => {
    db.Profile.findOne({"restaurants._id":req.params.id}, function (err, profile) {
        if (err) return res.send(err);
        const restpos = profile.restaurants.id(req.params.id)
        const context = {restaurants: restpos, profile:profile, user: req.user};
        return res.render("restaurants/show", context);
    });
};

// Add - When "add a new restaurant" is clicked, take a user to the add page  
const newRestaurant = (req,res) => {
    db.Profile.findById(req.params.id, function (err, profile) {
        if (err) return res.send(err);
        const context = {profile: profile, user: req.user};
        return res.render('restaurants/new', context);
    });
};

// Create - Save the input from the user and create a new restaurant
const create = (req, res) => {
    db.Profile.findById(req.params.id, function (err, profile) {
        profile.restaurants.push(req.body);
        profile.save(function (err) {
            if (err) return res.send(err);
            res.redirect(`/profiles/${profile._id}`);
        });
    });
};

// Edit - When an edit button is clicked, take a user to the edit page
const edit = (req, res) => {
    db.Profile.findOne({"restaurants._id":req.params.id}, function (err, profile) {
        if (err) return res.send(err);
        const restpos = profile.restaurants.id(req.params.id)
        const context = {restaurants: restpos, profile:profile, user: req.user};
        return res.render("restaurants/edit", context);
    });
};

// Update - When a user is done making changes to one restaurant and clicks update, save that update
const update = (req, res) => {
    db.Profile.findOne({"restaurants._id":req.params.id}, function (err, profile) {
        const restDoc = profile.restaurants.id(req.params.id); 
        restDoc.set(req.body);
        profile.save(function(err){
            if(err) return res.send(err);
            return res.redirect(`/profiles/${profile._id}`);
        });
    });
};

// Destroy - Delete a restaurant 
const destroy = (req, res) => {
    db.Profile.findOne({"restaurants._id":req.params.id}, function (err, profile) {
        if (err) return res.send(err);
        const restDoc = profile.restaurants.id(req.params.id);
        restDoc.remove();
        profile.save(function(err){
            if(err) return res.send(err);
            return res.redirect(`/profiles/${profile._id}`);
        });
    });
};



module.exports = {
    show,
    newRestaurant,
    create,
    edit,
    update,
    destroy,
}
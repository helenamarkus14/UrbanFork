const db = require("../models");

// Index - finding all info under all users
const idx = (req,res, next) => {
    db.Profile.find({}, function (err, allProfiles) {
        if (err) return res.send(err);
        const context = {profiles: allProfiles, user: req.user,};
        return res.render('profiles/index', context);
    });
};

// About - same as index to pass user info 
const about = (req, res) => {
    db.Profile.findById(req.params.id, function (err, profile) {
        if (err) return res.send(err);
        const context = {profile: profile, user: req.user};
        return res.render("about", context);
    });
};

// Show - Listing all info under one user to render a restaurant list page
const show = (req, res) => {
    db.Profile.findById(req.params.id, function (err, profile) {
        if (err) return res.send(err);
        const context = {profile: profile, user: req.user,};
        return res.render("profiles/show", context);
    });
};

// Austin - same as show page but filtering out city
const austin = (req,res) => {
    db.Profile.findById(req.params.id, function (err, profile) {
        const newarray = [];
        profile.restaurants.forEach(function(r){
            if(r.city === "Austin"){
            newarray.push(r);
            };
        });
        if (err) return res.send(err);
        const context = {profile:profile, restlist: newarray, user: req.user};
        return res.render("profiles/cities/austin", context);
    });
};

// Boston - same as show page but filtering out city
const boston = (req,res) => {
    db.Profile.findById(req.params.id, function (err, profile) {
        const newarray = [];
        profile.restaurants.forEach(function(r){
            if(r.city === "Boston"){
            newarray.push(r);
            };
        });
        if (err) return res.send(err);
        const context = {profile:profile, restlist: newarray, user: req.user};
        return res.render("profiles/cities/boston", context);
    });
};

// Boulder - same as show page but filtering out city
const boulder = (req,res) => {
    db.Profile.findById(req.params.id, function (err, profile) {
        const newarray = [];
        profile.restaurants.forEach(function(r){
            if(r.city === "Boulder"){
            newarray.push(r);
            };
        });
        if (err) return res.send(err);
        const context = {profile:profile, restlist: newarray, user: req.user};
        return res.render("profiles/cities/boulder", context);
    });
};

// Chicago - same as show page but filtering out city
const chicago = (req,res) => {
    db.Profile.findById(req.params.id, function (err, profile) {
        const newarray = [];
        profile.restaurants.forEach(function(r){
            if(r.city === "Chicago"){
            newarray.push(r);
            };
        });
        if (err) return res.send(err);
        const context = {profile:profile, restlist: newarray, user: req.user};
        return res.render("profiles/cities/chicago", context);
    });
};

// NYC - same as show page but filtering out city
const nyc = (req,res) => {
    db.Profile.findById(req.params.id, function (err, profile) {
        const newarray = [];
        profile.restaurants.forEach(function(r){
            if(r.city === "NYC"){
            newarray.push(r);
            };
        });
        if (err) return res.send(err);
        const context = {profile:profile, restlist: newarray, user: req.user};
        return res.render("profiles/cities/nyc", context);
    });
};

// Search - searching by specific text to render out results from the search bar
const search = (req,res) => {
    let searchTerm = req.body.searchTerm;
    db.Profile.find({ $text: { $search: searchTerm}}, function(err, searchresult){
        if (err) return res.send(err);
        const context = {searchresult:searchresult, user: req.user};
        return res.render("profiles/search", context);
    });
};

module.exports = {
    idx,
    about,
    show,
    austin,
    boston,
    boulder,
    chicago,
    nyc,
    search,
}
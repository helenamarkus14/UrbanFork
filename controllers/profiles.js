const db = require("../models");

// restful routes FULL CRUD

const idx = (req,res) => {
    db.Profile.find({}, function (err, allProfiles) {
        if (err) return res.send(err);
        const context = {profiles: allProfiles, user: req.user,};
        return res.render('profiles/index', context);
    });
};

const about = (req, res) => {
    db.Profile.findById(req.params.id, function (err, profile) {
        if (err) return res.send(err);
        const context = {profile: profile};
        return res.render("about", context);
    });
};

const show = (req, res) => {
    db.Profile.findById(req.params.id, function (err, profile) {
        if (err) return res.send(err);
        const context = {profile: profile};
        return res.render("profiles/show", context);
    });
};

const austin = (req,res) => {
    db.Profile.findById(req.params.id, function (err, profile) {
        const newarray = [];
        profile.restaurants.forEach(function(r){
            if(r.city === "Austin"){
            newarray.push(r);}
        });
        if (err) return res.send(err);
        const context = {profile:profile, restlist: newarray};
        return res.render("profiles/cities/austin", context);
});
};

const boston = (req,res) => {
    db.Profile.findById(req.params.id, function (err, profile) {
        const newarray = [];
        profile.restaurants.forEach(function(r){
            if(r.city === "Boston"){
            newarray.push(r);}
        });
        if (err) return res.send(err);
        const context = {profile:profile, restlist: newarray};
        return res.render("profiles/cities/boston", context);
});
};

const boulder = (req,res) => {
    db.Profile.findById(req.params.id, function (err, profile) {
        const newarray = [];
        profile.restaurants.forEach(function(r){
            if(r.city === "Boulder"){
            newarray.push(r);}
        });
        if (err) return res.send(err);
        const context = {profile:profile, restlist: newarray};
        return res.render("profiles/cities/boulder", context);
});
};

const chicago = (req,res) => {
    db.Profile.findById(req.params.id, function (err, profile) {
        const newarray = [];
        profile.restaurants.forEach(function(r){
            if(r.city === "Chicago"){
            newarray.push(r);}
        });
        if (err) return res.send(err);
        const context = {profile:profile, restlist: newarray};
        return res.render("profiles/cities/chicago", context);
});
};

const nyc = (req,res) => {
    db.Profile.findById(req.params.id, function (err, profile) {
        const newarray = [];
        profile.restaurants.forEach(function(r){
            if(r.city === "NYC"){
            newarray.push(r);}
        });
        if (err) return res.send(err);
        const context = {profile:profile, restlist: newarray};
        return res.render("profiles/cities/nyc", context);
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

}
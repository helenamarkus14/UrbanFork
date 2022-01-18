const { restaurants } = require(".");
const db = require("../models");


const show = (req, res) => {
    db.Profile.findOne({"restaurants._id":req.params.id}, function (err, profile) {
        if (err) return res.send(err);
        const restpos = profile.restaurants.id(req.params.id)
        const context = {restaurants: restpos, profile:profile};
        return res.render("restaurants/show", context);
    });

};

const newRestaurant = (req,res) => {
    db.Profile.findById(req.params.id, function (err, profile) {
        if (err) return res.send(err);
        const context = {profile: profile};
        return res.render('restaurants/new', context);
})
}


const create = (req, res) => {
    db.Profile.findById(req.params.id, function (err, profile) {
        console.log(req.body);
        profile.restaurants.push(req.body);
        profile.save(function (err) {
            if (err) return res.send(err);
            res.redirect(`/profiles/${profile._id}`);
        });
      });
    };

const edit = (req, res) => {
    db.Profile.findOne({"restaurants._id":req.params.id}, function (err, profile) {
        console.log(req.params.id)
        if (err) return res.send(err);
        const restpos = profile.restaurants.id(req.params.id)
        const context = {restaurants: restpos, profile:profile};
        return res.render("restaurants/edit", context);
    });
};


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


const destroy = (req, res) => {
    db.Profile.findOne({"restaurants._id":req.params.id}, function (err, profile) {
        if (err) return res.send(err);
        const restDoc = profile.restaurants.id(req.params.id)
        restDoc.remove();
        profile.save(function(err){
            if(err) return res.send(err);
            return res.redirect(`/profiles/${profile._id}`)
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
const db = require("../models");


const show = (req, res) => {
    db.Profile.findOne({"restaurants._id":req.params.id}, function (err, restaurants) {
        if (err) return res.send(err);
        const context = {restaurants: restaurants};
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
        profile.restaurants.push(req.body);
        profile.save(function (err) {
            if (err) return res.send(err);
            res.redirect(`/profiles/${profile._id}`);
        });
      });
    };

    // const edit = (req, res) => {
    //     db.Profile.findById(req.params.id, (err, foundRestaurant) => {
    //         if(err) return res.send(err);
    //         const context = {restaurants: foundRestaurant};
    //         res.render("restaurants/edit", context)
    //     })
    // }
    
// const destroy = {req, res} => {
//     db.Profile.find
// }]





module.exports = {
    show,
    newRestaurant,
    create,
}
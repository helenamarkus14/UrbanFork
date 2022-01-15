const db = require("../models");





const show = (req, res) => {
    db.Profile.findOne({"restaurants._id":req.params.id}, function (err, restaurants) {
        if (err) return res.send(err);
        const context = {restaurants: restaurants};
        return res.render("restaurants/show", context);
    });

};

// const destroy = {req, res} => {
//     db.Profile.find
// }]



module.exports = {
    show,
}
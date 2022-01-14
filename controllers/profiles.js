const db = require("../models");

// restful routes FULL CRUD

const idx = (req,res) => {
    db.Profile.find({}, function (err, allProfiles) {
        if (err) return res.send(err);
        const context = {profiles: allProfiles, user: req.user,};
        return res.render('profiles/index', context);
    });
};
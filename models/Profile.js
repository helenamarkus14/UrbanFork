const mongoose = require("mongoose");


const restaurantSchema = new mongoose.Schema(
    {
        name: String,
        cuisine: String,
        money: String,
        city: String,
        location: String,
        recMenu: String,  
        comment: String,
    }, 
    {
    timestamps: true,
    }
);



const profileSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        avatarURL: String,
        googleId: String,
        restaurants:[restaurantSchema],
    },
    {
        timestamps: true,
    }
);

profileSchema.index({name: "text"});

module.exports = mongoose.model('Profile', profileSchema);

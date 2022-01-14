const mongoose = require("mongoose");

const db = mongoose.connection;
const dbUrl = process.env.DATABASE_URL;


mongoose
	.connect(dbUrl)
	.then(() =>
		console.log(
			`MongoDB successfully connected at ${db.host}:${db.port}!`
		)
	)
	.catch((err) => console.log(`MongoDB connection FAILED: ${err}`));

module.exports = {
	Profile: require("./Profile"),
};
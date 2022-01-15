require("dotenv").config();

/* ==== External Modules ==== */
const express = require('express');
const morgan = require('morgan');
const session = require("express-session");
const passport = require("passport");
const methodOverride = require("method-override");

/* ==== Internal Modules ==== */
const routes = require("./routes");

/* ==== Instanced Modules  ==== */
const app = express();

/* ====  Configuration  ==== */
const PORT = 5000;
app.set("view engine", "ejs");


/* ====  Middleware  ==== */
// body data middleware
app.use(express.urlencoded({ extended: true }));
// method override middleware
app.use(methodOverride("_method"));
// serve public files
app.use(express.static("public"));
// logger
app.use((req, res, next) => {
	console.log(req.url, req.method);
	next();
});

/* ====  Routes & Controllers  ==== */
//Home Route
app.get("/", (req, res) => {
	res.render("index");
});

//404 Route
app.get((req, res) => {
	res.send("404! Error! Page not found :(");
});

//Internal Routes

app.use("/profiles", routes.profiles);
app.use("/", routes.restaurants);



/* ====  Server Listener  ==== */
app.listen(PORT, () => {
	console.log(`Express is listening on: http://localhost:${PORT}`);
});

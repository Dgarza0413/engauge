require('dotenv').config()
const express = require('express')
const session = require('express-session')
const mongoose = require('mongoose')
const path = require('path')
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001
const passport = require('./config/passport.js')


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
// Passport configuration
app.use(session({secret: process.env.SESSION_SECRET || "the cat ate my keyboard", resave: true, saveUninitialized: true}))
app.use(passport.initialize());
app.use(passport.session());

// Add routes, both API and view
app.use(routes);

app.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// Connect to the Mongo DB
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/engauge";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

// Start the API server
app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

process.on('SIGINT', () => {
    mongoose.connection.close().then( () => {
        console.log("Mongoose disconnected");
        process.exit(0);
    })
})
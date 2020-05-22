require('dotenv').config();
const fs = require('fs');
const path = require('path');
const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001
const passport = require('./config/passport.js')
const compression = require("compression")

// const { ApolloServer } = require('apollo-server-express');
// const filePath = path.join(__dirname, 'typeDefs.gql');
// const typeDefs = fs.readFileSync(filePath, 'utf-8');
// const resolvers = require('./resolvers');


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(compression())
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Passport configuration
app.use(session({ secret: process.env.SESSION_SECRET || "the cat ate my keyboard", resave: true, saveUninitialized: true }))
app.use(passport.initialize());
app.use(passport.session());

// Add routes, both API and view
app.use(routes);

// const server = new ApolloServer({ typeDefs, resolvers })
// server.applyMiddleware({ app });
// console.log(server)


// Connect to the Mongo DB
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/engauge";
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on ${PORT}`);
});


process.on('SIGINT', () => {
  mongoose.connection.close().then(() => {
    console.log("Mongoose disconnected");
    process.exit(0);
  })
})
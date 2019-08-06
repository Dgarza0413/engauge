require('dotenv').config()
const express = require('express')
const session = require('express-session')
const mongoose = require('mongoose')
const path = require('path')
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001
// const passport = require('./config/passport.js')
// const { google } = require("googleapis")

// const db = require("./models")

// const googleConfig = {
//     clientId: process.env.GOOGLE_CLIENT_ID,
//     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     redirect: process.env.GOOGLE_REDIRECT_URI
// }

// const defaultScope = [
//     'https://www.googleapis.com/auth/userinfo.email'
// ]

// function createConnection(){
//     return new google.auth.OAuth2(
//         googleConfig.clientId,
//         googleConfig.clientSecret,
//         googleConfig.redirect
//     )
// }
// function getConnectionUrl(){
//     return createConnection().generateAuthUrl({
//         access_type: 'offline',
//         prompt: 'consent',
//         scope: defaultScope
//     })
// }

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

// // API ROUTES GO HERE
// app.post('/api/login', passport.authenticate("local"),  (req, res) => {
//   res.json(req.user)
// })
// app.get('/api/logout', (req, res) => {
//   req.logout();
//   res.sendStatus(200);
// });

// app.get('/api/user/me', function(req, res){
//   if(req.user){
//       res.json({
//           email: req.user.email
//       })
//   } else {
//       res.sendStatus(401)
//   }
  
// })

// app.get('/api/google/url', (req, res) => {
//   res.json({url: getConnectionUrl()})
// })

// function getGoogleAccountFromCode(code){
//   console.log("CODE");
//   console.log(code);
//   return createConnection().getToken(code).then(data => {
//       console.log("DATA");
//       console.log(data.tokens)
//       return Promise.resolve(data.tokens)
//   })
// }

// app.post('/api/google/code', (req, res) => {
//   const { code } = req.body;
//   getGoogleAccountFromCode(code).then(tokens => {
//       console.log(tokens)
//       const userConnection = createConnection()
//       userConnection.setCredentials(tokens)
//       userConnection.getTokenInfo(tokens.access_token).then(data => {
//           console.log("TOKEN INFO");
//           console.log(data);
//           const {email, sub } = data;

//           db.User.findOne({ email }).then(dbUser => {
//               if(!dbUser){
//                   // create a new user!
//                   db.User.create({
//                       email,
//                       authType: "google",
//                       googleId: sub
//                   }).then(finalDbUser => {
//                       req.login(finalDbUser, () => {
//                           res.json(true)
//                       })
//                   }).catch(err => {
//                       console.log(err)
//                       res.sendStatus(500)
//                   })

//               } else {
//                   // Check the type and googleId
//                   // if it matches, great! Login the user!
//                   // if not, something odd is up, reject it
//                   console.log(dbUser);
//                   if(dbUser.authType === "google" && dbUser.googleId === sub + ""){
//                       req.login(dbUser, () => {
//                           res.json(true)
//                       });
                      
//                   } else {
//                       res.sendStatus(500)
//                   }
//               }
//           })

//       }).catch(() => {
//           res.sendStatus(500)
//       })
//   })
// })

// app.get('/api/google/callback', function(req, res){
//   const code = req.query.code
//   getGoogleAccountFromCode(code).then(tokens => {
//       const userConnection = createConnection()
//       userConnection.setCredentials(tokens)
//       userConnection.getTokenInfo(tokens.access_token).then(data => {
//           const {email, sub } = data;
//           db.User.findOne({ email }).then(dbUser => {
//               console.log(dbUser);
//               if(!dbUser){
//                   console.log("NEW USER");
//                   // create a new user!
//                   db.User.create({
//                       email,
//                       authType: "google",
//                       googleId: sub
//                   }).then(finalDbUser => {
//                       req.login(finalDbUser, () => {
//                           res.redirect(process.env.NODE_ENV === "production" ? "/" : "http://localhost:3000/");
//                       })
//                   }).catch(err => {
//                       console.log(err)
//                       res.sendStatus(500)
//                   })

//               } else {
//                   if(dbUser.authType === "google" && dbUser.googleId === sub + ""){
//                       req.login(dbUser, () => {
//                           res.redirect(process.env.NODE_ENV === "production" ? "/" : "http://localhost:3000/");
//                       })
//                   } else {
//                       res.sendStatus(500)
//                   }
//               }
//           }).catch(err => console.log(err))

//       }).catch(err => {
//           console.log(err)
//           res.sendStatus(500)
//       })
//   })
// })

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

// process.on('SIGINT', () => {
//   mongoose.connection.close().then( () => {
//       console.log("Mongoose disconnected");
//       process.exit(0);
//   })
// })

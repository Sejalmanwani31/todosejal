const express = require('express');
const app = express();
const passport =require('passport')
const session = require('express-session');
const db = require('./models');
const seedData = require('./seeders/seedDB')
require('dotenv').config({})

require('./config/passport');

// assets middleware
app.use(express.static(__dirname + "/assets"));

// request body parser middleware
app.use(
    express.urlencoded({
        extended: true
    })
);
app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: false,
}))
app.use(passport.initialize());
app.use(passport.session());
//templating engine
app.set("views", `${__dirname}/views`);
app.set("view engine", "ejs");

//routes
require("./routes/r-index")(app);
app.get('/',(req,res) =>{
    return res.render('login')
})
db.sequelize.authenticate()
    .then(() => {
        console.log('Connection established');
    })
    .catch((err) => {
        console.error('unable to connect to database:', err);

    });
   
db.sequelize.sync({
    force: false,
}).then(() => seedData());




const PORT = process.env.Port;
app.listen(PORT, () => {
    console.error(`App is Running at http://localhost:${PORT}`);
});
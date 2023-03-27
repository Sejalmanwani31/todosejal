const express = require('express');
const app = express();
require('dotenv').config({})

// assets middleware
app.use(express.static(__dirname + "/assets"));

// request body parser middleware
app.use(
    express.urlencoded({
        extended: true
    })
);

//templating engine
app.set("views", `${__dirname}/views`);
app.set("view engine", "ejs");

//routes
require("./routes/r-index")(app);
app.get('/landing',(req,res) =>{
    return res.render('landing')
})


const PORT = process.env.Port;
app.listen(PORT, () => {
    console.error(`App is Running at http://localhost:${PORT}/toDo`);
});
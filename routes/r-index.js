const rToDo = require('./r-ToDo')
const passport = require('passport');

module.exports = (app) => {
    app.post('/landing',
    passport.authenticate('local', { failureRedirect:'/landing'}),
    (req , res) => {
        console.log("request body ====>" , req.body)
        console.log("user details ====>" , req.user)
        console.log("user authenticated ====>", req.isAuthenticated())
        return res.redirect('/toDo/');
    }
    )
    app.use("/toDo", rToDo)
}

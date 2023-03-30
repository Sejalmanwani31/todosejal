const passport = require('passport');
 const LocalStrategy = require('passport-local').Strategy;
 const users = [
    {id:1 , email:'manwani.sejal31@gmail.com' , password: '123@'},

 ]
 console.log("passport called")
passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    }, 
     (email, password, done) => {
        console.log( email, password);
  
        const user = users.find(user => {
            return user.email === email
        })
        console.log("user");
        if(!user) {
            return done(null , false ,{ message:'Incorrect email'});
        }
        if(user.password !== password) {
            return done(null, false , { message: 'Incorrect password'});
        } console.log("user2");
        return done(null, user);
    }
));
passport.serializeUser((user,done) => {
    done(null , user.id)
});
passport.deserializeUser((id , done) => {
    const user = users.find(user => user.id === id);
    return done (null , user);
});
module.exports = passport
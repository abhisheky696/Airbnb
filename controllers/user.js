const User=require("../models/user.js");
module.exports.renderSignupForm = (req,res) => {
    res.render("./users/signup.ejs");
}

module.exports.signup = async (req,res) => {
    let { username,email,password }=req.body;
    let newUser=new User({email,username});
    let registerUser=await User.register(newUser,password);
    req.login(registerUser, (err) => {
        if(err) {
            next(err);
        }
        req.flash("success","welcome to Airbnb");
        res.redirect("/listings");
    });  
}

module.exports.renderLoginForm = (req,res) => {
    res.render("./users/login.ejs");
};

module.exports.login = async (req,res) => {
    req.flash("success"," welcome to Airbnb");
    let redirectUrl=res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);   
}

module.exports.logout = (req,res) => {
    req.logout((err) => {
        if(err) {
            return next(err);
        }
    req.flash("success","logged out!");
    res.redirect("/listings"); 
    });
}
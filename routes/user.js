const express=require("express");
const router=express.Router();
const User=require("../models/user.js");
const wrapAsync=require("../utils/wrapAsync.js");
const passport=require("passport");
var GoogleStrategy = require('passport-google-oidc');
const {saveRedirectUrl}=require("../middleware.js");
const userController = require("../controllers/user.js");

//sign up form
router.get("/signup", userController.renderSignupForm);
router.post("/signup", wrapAsync(userController.signup));
// router.get('/login/federated/google', passport.authenticate('google'));
// router.get('/oauth2/redirect/google', passport.authenticate('google', {
//     successRedirect: '/',
//     failureRedirect: '/login'
//   }));
//login form
router.get("/login",userController.renderLoginForm);
router.post("/login",saveRedirectUrl,
    passport.authenticate('local',{ 
        failureRedirect: '/login', 
        failureFlash: true,
        // successRedirect: "/listings", 
    }), 
    userController.login
);
router.get("/logout", userController.logout);
module.exports=router;
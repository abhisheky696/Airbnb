const express=require("express");
const router=express.Router({mergeParams:true});
const wrapAsync=require("../utils/wrapAsync.js");
const ExpressError=require("../utils/ExpressError.js");
const {reviewSchema}=require("../schema.js");
const {isUserLoggedIn,isReviewAuthor}=require("../middleware.js");
const reviewController=require("../controllers/review.js");
const validateReview = (req,res,next) => {
    let {error} = reviewSchema.validate(req.body);
    if(error) {
      throw new ExpressError(500,error);
    }
    else {
      next();
    }
}
//REVIEWS
//post route for reviews
router.post("/",isUserLoggedIn,validateReview,wrapAsync(reviewController.createReview));
//Delete route for reviews
router.delete("/:reviewId",isUserLoggedIn,isReviewAuthor,wrapAsync(reviewController.destroyRoute));

module.exports=router;

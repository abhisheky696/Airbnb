const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { listingSchema } = require("../schema.js");
const { isUserLoggedIn, isOwner } = require("../middleware.js");
const listingController = require("../controllers/listings.js");
const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });
const validateListing = (req, res, next) => {
    let { error } = listingSchema.validate(req.body);
    if (error) {
        const msg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(500, error);
    } else {
        next();
    }
};
router.get("/filter/:id", wrapAsync(listingController.filter));
router.get("/search", wrapAsync(listingController.search));

router.get("/new", isUserLoggedIn, listingController.renderNewForm);

router
    .route("/")
    .get(wrapAsync(listingController.index))
    .post(
        isUserLoggedIn,
        upload.single("listing[image]"),
        validateListing,
        wrapAsync(listingController.createNewListing)
    );

router
    .route("/:id")
    .put(
        isUserLoggedIn,
        isOwner,
        upload.single("listing[image]"),
        validateListing,
        wrapAsync(listingController.updateListing)
    )
    .get(wrapAsync(listingController.showListing))
    .delete(
        isUserLoggedIn,
        isOwner,
        wrapAsync(listingController.destroyListing)
    );

router.get(
    "/:id/edit",
    isUserLoggedIn,
    isOwner,
    wrapAsync(listingController.renderEditForm)
);

module.exports = router;

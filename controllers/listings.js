const Listing = require("../models/listing.js");
module.exports.index = async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
};

module.exports.renderEditForm = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", "listing does not exist");
        res.redirect("/listings");
    }
    let originalUrl = listing.image.url;
    originalUrl = originalUrl.replace("/upload", "/upload/w_200");
    res.render("listings/edit.ejs", { listing, originalUrl });
};

module.exports.updateListing = async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    if (typeof req.file !== "undefined") {
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = { url, filename };
        await listing.save();
    }
    req.flash("success", "listing updated");
    res.redirect(`/listings/${listing.id}`);
};

module.exports.renderNewForm = (req, res) => {
    res.render("listings/new.ejs");
};

module.exports.createNewListing = async (req, res, next) => {
    const newlisting = new Listing(req.body.listing);
    let url = req.file.path;
    let filename = req.file.filename;
    newlisting.owner = req.user._id;
    newlisting.image = { url, filename };
    console.log(newlisting)
    await newlisting.save();
    req.flash("success", "listing added");
    res.redirect("/listings");
};

module.exports.showListing = async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id)
        .populate({
            path: "reviews",
            populate: {
                path: "author",
            },
        })
        .populate("owner");
    if (!listing) {
        req.flash("error", "listing does not exist");
        res.redirect("/listings");
    }
    res.render("listings/show.ejs", { listing });
};

module.exports.destroyListing = async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success", "listing deleted");
    res.redirect("/listings");
};
module.exports.filter = async(req,res,next)=> {
    let {id} = req.params;
    let allListings = await Listing.find({category: id});
    if(allListings.length != 0){
        res.render("listings/index.ejs", { allListings });
    }else{
        req.flash("error","This type of listing does not exist")
        res.redirect("/listings")
    }
}

module.exports.search = async (req, res) => {
    let { title } = req.query;
    const allListings = await Listing.find({ title });
    if(allListings.length>0) {
        res.render("./listings/index.ejs", { allListings });
    }
    else {
        req.flash("error","Listing you search  for does not exist")
        res.redirect("/listings")
    }
};

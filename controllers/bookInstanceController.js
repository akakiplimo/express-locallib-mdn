const BookInstance = require('../models/bookInstance')
const asyncHandler = require('express-async-handler')

// Display a list of bookInstances
exports.bookInstance_list = asyncHandler(async (req, res, next) => {
    const allBookInstances = await BookInstance.find().populate("book").exec();

    res.render("bookInstance_list", {
        title: "Book Instance List",
        bookInstance_list: allBookInstances
    });
});

// Display a detail page for a specific bookInstance
exports.bookInstance_detail = asyncHandler(async (req, res, next) => {
    const bookInstance = await BookInstance.findById(req.params.id)
        .populate("book")
        .exec();

    if (bookInstance === null) {
        // No results.
        const err = new Error("Book copy not found");
        err.status = 404;
        return next(err);
    }

    res.render("bookinstance_detail", {
        title: "Book:",
        bookinstance: bookInstance,
    });
});

// Display bookInstance create from a GET
exports.bookInstance_create_get = asyncHandler(async (req, res, next) => {
    res.send(`NOT IMPLEMENTED: bookInstance create GET`);
});

// Handle bookInstance create on POST.
exports.bookInstance_create_post = asyncHandler(async (req, res, next) => {
    res.send(`NOT IMPLEMENTED: bookInstance create POST`);
});

// Display bookInstance delete from a GET
exports.bookInstance_delete_get = asyncHandler(async (req, res, next) => {
    res.send(`NOT IMPLEMENTED: bookInstance delete GET`);
});

// Handle bookInstance delete on POST.
exports.bookInstance_delete_post = asyncHandler(async (req, res, next) => {
    res.send(`NOT IMPLEMENTED: bookInstance delete POST`);
});

// Display bookInstance update from a GET
exports.bookInstance_update_get = asyncHandler(async (req, res, next) => {
    res.send(`NOT IMPLEMENTED: bookInstance update GET`);
});

// Handle bookInstance update on POST.
exports.bookInstance_update_post = asyncHandler(async (req, res, next) => {
    res.send(`NOT IMPLEMENTED: bookInstance update POST`);
});
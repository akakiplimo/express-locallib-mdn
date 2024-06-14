const Book = require('../models/book')
const BookInstance = require('../models/bookInstance')
const Author = require('../models/author')
const Genre = require('../models/genre')
const asyncHandler = require('express-async-handler')

// Have an index page for the welcome page of the site
exports.index = asyncHandler(async (req, res, next) => {
   // Get details of books, book instances, authors and genre counts (in parallel)
    const [
        numBooks,
        numBookInstances,
        numAvailableBookInstances,
        numAuthors,
        numGenres
    ] = await Promise.all([
        Book.countDocuments({}).exec(),
        BookInstance.countDocuments({}).exec(),
        BookInstance.countDocuments({ status: 'Available' }).exec(),
        Author.countDocuments({}).exec(),
        Genre.countDocuments({}).exec(),

    ]);

    res.render("index", {
        title: "Local Library Home",
        book_count: numBooks,
        book_instance_count: numBookInstances,
        book_instance_available_count: numAvailableBookInstances,
        author_count: numAuthors,
        genre_count: numGenres,
    });
});

// Display a list of books
exports.book_list = asyncHandler(async (req, res, next) => {
    const allBooks = await Book.find({}, "title author")
        .sort({ title: 1 })
        .populate("author")
        .exec();

    res.render("book_list", { title: "Book List", book_list: allBooks });
});

// Display a detail page for a specific book
exports.book_detail = asyncHandler(async (req, res, next) => {
    // Display detail page for a specific book.
    const [book, bookInstances] = await Promise.all([
        Book.findById(req.params.id).populate("author").populate("genre").exec(),
        BookInstance.find({ book: req.params.id }).exec(),
    ]);

    if (book === null) {
        // No results
        const err = new Error("Book not found")
        err.status = 404
        return next(err)
    }

    res.render("book_detail", {
        title: book.title,
        book: book,
        book_instances: bookInstances,
    });
});

// Display book create from a GET
exports.book_create_get = asyncHandler(async (req, res, next) => {
    res.send(`NOT IMPLEMENTED: book create GET`);
});

// Handle book create on POST.
exports.book_create_post = asyncHandler(async (req, res, next) => {
    res.send(`NOT IMPLEMENTED: book create POST`);
});

// Display book delete from a GET
exports.book_delete_get = asyncHandler(async (req, res, next) => {
    res.send(`NOT IMPLEMENTED: book delete GET`);
});

// Handle book delete on POST.
exports.book_delete_post = asyncHandler(async (req, res, next) => {
    res.send(`NOT IMPLEMENTED: book delete POST`);
});

// Display book update from a GET
exports.book_update_get = asyncHandler(async (req, res, next) => {
    res.send(`NOT IMPLEMENTED: book update GET`);
});

// Handle book update on POST.
exports.book_update_post = asyncHandler(async (req, res, next) => {
    res.send(`NOT IMPLEMENTED: book update POST`);
});
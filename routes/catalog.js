const express = require("express")
const router = express.Router()

// Require Controller modules
const book_controller = require("../controllers/bookController")
const bookInstance_controller = require("../controllers/bookInstanceController")
const author_controller = require("../controllers/authorController")
const genre_controller = require("../controllers/genreController")

/**
 * BOOK ROUTES
 * */

/* GET catalog home page. */
router.get("/", book_controller.index);

// GET request for creating a book. NOTE: this must come before routes that display a Book
router.get("/book/create", book_controller.book_create_get);

// POST request for creating a book.
router.post("/book/create", book_controller.book_create_post);

// GET request for deleting a book
router.get("/book/:id/delete", book_controller.book_delete_get);

// POST request for delete a book.
router.post("/book/:id/delete", book_controller.book_delete_post);

// GET request for updating a book
router.get("/book/:id/update", book_controller.book_update_get);

// POST request for updating a book.
router.post("/book/:id/update", book_controller.book_update_post);

// GET request for a single book (detail view)
router.get("/book/:id", book_controller.book_detail);

// GET request for a list of all books (list view)
router.get("/books", book_controller.book_list);

/**
 * AUTHOR ROUTES
 * */

// GET request for creating an author. NOTE: this must come before routes that display a Author
router.get("/author/create", author_controller.author_create_get);

// POST request for creating an author.
router.post("/author/create", author_controller.author_create_post);

// GET request for deleting a author
router.get("/author/:id/delete", author_controller.author_delete_get);

// POST request for delete a author.
router.post("/author/:id/delete", author_controller.author_delete_post);

// GET request for updating a author
router.get("/author/:id/update", author_controller.author_update_get);

// POST request for updating a author.
router.post("/author/:id/update", author_controller.author_update_post);

// GET request for a single author (detail view)
router.get("/author/:id", author_controller.author_detail);

// GET request for a list of all authors (list view)
router.get("/authors", author_controller.author_list);

/**
 * GENRE ROUTES
 * */

// GET request for creating an genre. NOTE: this must come before routes that display a Genre
router.get("/genre/create", genre_controller.genre_create_get);

// POST request for creating an genre.
router.post("/genre/create", genre_controller.genre_create_post);

// GET request for deleting a genre
router.get("/genre/:id/delete", genre_controller.genre_delete_get);

// POST request for delete a genre.
router.post("/genre/:id/delete", genre_controller.genre_delete_post);

// GET request for updating a genre
router.get("/genre/:id/update", genre_controller.genre_update_get);

// POST request for updating a genre.
router.post("/genre/:id/update", genre_controller.genre_update_post);

// GET request for a single genre (detail view)
router.get("/genre/:id", genre_controller.genre_detail);

// GET request for a list of all genres (list view)
router.get("/genres", genre_controller.genre_list);

/**
 * BOOK INSTANCE ROUTES
 * */

// GET request for creating an bookInstance. NOTE: this must come before routes that display a bookInstance
router.get("/bookinstance/create", bookInstance_controller.bookInstance_create_get);

// POST request for creating an bookInstance.
router.post("/bookinstance/create", bookInstance_controller.bookInstance_create_post);

// GET request for deleting a bookInstance
router.get("/bookinstance/:id/delete", bookInstance_controller.bookInstance_delete_get);

// POST request for delete a bookInstance.
router.post("/bookinstance/:id/delete", bookInstance_controller.bookInstance_delete_post);

// GET request for updating a bookInstance
router.get("/bookinstance/:id/update", bookInstance_controller.bookInstance_update_get);

// POST request for updating a bookInstance.
router.post("/bookinstance/:id/update", bookInstance_controller.bookInstance_update_post);

// GET request for a single bookInstance (detail view)
router.get("/bookinstance/:id", bookInstance_controller.bookInstance_detail);

// GET request for a list of all bookInstances (list view)
router.get("/bookinstances", bookInstance_controller.bookInstance_list);


module.exports = router;
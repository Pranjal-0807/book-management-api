# book-management-api

## Setting up MongoDB connection

- Put the MONGO_URI in .env file
- Made a folder name db (./db)
- Made a file inside db named as database.js(./db/database)
- Configuring dotenv
- Now connecting to mongodb atlas using mongoose

## Defining the Book Schema

- Made a folder name models (./models)
- Made a file inside models named as book.js(./models/book)
- Made the book schema with the following fields
  - title (String, required, unique)
  - author (String, required)
  - publishedDate (Date, default)
  - genre (String, default)
  - price (Number, default, with validation for positive values)
- Created the model based on book schema
- exported the model

## Setting up the Server

- Made a file named server.js (./server.js)
- Configured dotenv to load environment variables
- Imported database.js (./db/database)
- Set up middleware (express.json())
- Imported and used the book routes
- Started the server

## Creating the Book Routes

- Made a folder named routes (./routes)
- Made a file inside routes named as books.js (./routes/books)
- Created the following routes:
  - POST /books - To Create a new book
  - GET /books - To Fetch all books
  - PUT /books/:title - To Update a book by title
  - DELETE /books/:title - To Delete a book by title
  - GET /books/genre/:genre - To Fetch a book by genre
- Exported the router

## Creating the Book Controllers (./controllers/books)

- Made a folder named controllers (./controllers)
- Made a file inside controllers named as books.js (./controllers/books)
- Imported the book model
- Created functions for the following operations:
  - createBook - Creating a new book
  - getAllBooks - Fetching all books
  - updateBookByTitle - Updating a book by title
  - deleteBookByTitle - Deleting a book by title
  - getBookByGenre - Fetching a single book by genre
- Exported the controller functions

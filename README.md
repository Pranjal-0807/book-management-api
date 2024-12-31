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

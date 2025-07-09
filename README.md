# 📘 Book Directory API

A RESTful API built using **Node.js**, **Express**, and **MongoDB** to manage a collection of books. It provides endpoints for creating, reading, updating, and deleting book records, with validation, modular structure, and structured JSON responses.

---

##  Features

-  Full CRUD operations on book resources
-  Joi-based input validation
-  Centralized error & async handler utilities
-  RESTful routing with modular controllers
-  MongoDB + Mongoose integration
-  Environment configuration using dotenv
-  Dev tools: Prettier, Morgan, Nodemon

---

##  Project Structure

book-api/
├── src/
│ ├── app.js # Express app setup
│ ├── index.js # Starts server & connects DB
│ ├── config/
│ │ └── db.js # MongoDB connection logic
│ ├── controllers/
│ │ └── book.controller.js # Business logic for books
│ ├── models/
│ │ └── book.model.js # Mongoose schema
│ ├── routes/
│ │ └── book.route.js # API routes
│ ├── validations/
│ │ └── bookValidation.js # Joi schema for validation
│ ├── utils/
│ │ ├── asyncHandler.util.js
│ │ ├── SuccessApiResponse.util.js
│ │ └── FailApiResponse.util.js


##  Package Overview

###  Dependencies

| Package       | Description |
|--------------|-------------|
| `express`     | Fast, minimalist web framework for building the RESTful API server and handling routing. |
| `mongoose`    | MongoDB object modeling tool that provides a schema-based solution to manage application data. |
| `joi`         | JavaScript validation library used to define and enforce schemas for incoming request data. |
| `dotenv`      | Loads environment variables from a `.env` file into `process.env`, keeping sensitive data out of source code. |
| `cors`        | Enables Cross-Origin Resource Sharing, allowing APIs to be accessed from different domains. |
| `morgan`      | HTTP request logger middleware used for logging incoming requests during development. |

---

###  Dev Dependencies

| Package       | Description |
|---------------|-------------|
| `nodemon`     | Watches for file changes and automatically restarts the server — ideal for development. |
| `prettier`    | Code formatter that helps maintain consistent code style across the project. |


---

##  Installation

```bash
git clone https://github.com/Gangadhar-mudhiraj/book-api.git
cd book-api
npm install
```


## Running the Server
```
npm start
```



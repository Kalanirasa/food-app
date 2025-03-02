FOOD-APP

A simple food application built with Node.js, Express, and MongoDB.

Features

User authentication with JWT

Secure password hashing with bcrypt

CRUD operations for users and contacts

Token validation middleware

Environment configuration with dotenv

Folder Structure

FOOD-APP/
│── config/
│   ├── dbConnection.js        # Database connection setup
│── controllers/
│   ├── contactController.js   # Contact-related logic
│   ├── userController.js      # User-related logic
│── middleware/
│   ├── errorHandler.js        # Error handling middleware
│   ├── validateTokenHandler.js # JWT token validation middleware
│── models/
│   ├── contactModel.js        # Mongoose schema for contacts
│   ├── userModel.js           # Mongoose schema for users
│── routes/
│   ├── contactRoutes.js       # Routes for contact operations
│   ├── userRoutes.js          # Routes for user operations
│── .env                       # Environment variables (not included in repo)
│── .gitignore                 # Git ignore file
│── constants.js               # Constants used in the app
│── package.json               # Dependencies and scripts
│── server.js                  # Main entry point of the app

Installation

Clone the repository:

git clone https://github.com/yourusername/food-app.git
cd food-app

Install dependencies:

npm install

Create a .env file in the root directory and configure environment variables:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

Start the server:

Development mode:

npm run dev

Production mode:

npm start

Technologies Used

Node.js

Express.js

MongoDB & Mongoose

JWT Authentication

bcrypt for password hashing

dotenv for environment variables

Nodemon for development

Author

kalanirasa

License

This project is licensed under the ISC License.

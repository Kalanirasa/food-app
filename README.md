# FOOD-APP

A simple food application built with Node.js, Express, and MongoDB.

## Features

- User authentication with JWT
- Secure password hashing with bcrypt
- CRUD operations for users and contacts
- Token validation middleware
- Environment configuration with dotenv

## Folder Structure

```
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
```

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/food-app.git
   cd food-app
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Create a `.env` file in the root directory and configure environment variables:

   ```
   PORT=5001
   CONNECTION_STRING=your_mongodb_connection_string
   ACCESS_TOKEN_SECRET=your_secret_key
   ```

4. Start the server:

   - Development mode:

     ```sh
     npm run dev
     ```

   - Production mode:

     ```sh
     npm start
     ```

## Technologies Used

- Node.js
- Express.js
- MongoDB & Mongoose
- JWT Authentication
- bcrypt for password hashing
- dotenv for environment variables
- Nodemon for development

## Author

[kalanirasa](https://github.com/kalanirasa)

## License

This project is licensed under the ISC License.


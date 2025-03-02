const express = require("express");
const dotenv = require("dotenv").config();
const errorHanddler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");

connectDb();
//rest object
const app = express();

const port = process.env.port || 5000;

app.use(express.json());
app.use("/api/contact", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHanddler);

app.listen(port, () => {
  console.log(`server running port ${port}`);
});

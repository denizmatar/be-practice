require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
// Import Routes
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

const DB_CONNECT = process.env.DB_CONNECT;
const PORT = 3000;

// Connect to DB
mongoose.connect(DB_CONNECT, () => console.log("connected to db"));

// Middleware
app.use(express.json());

// Route Middlewares
app.use("/api/user", authRoute);
app.use("/api/posts", postRoute);

app.listen(PORT, () =>
    console.log(`Server is running at http://localhost:${PORT}`)
);

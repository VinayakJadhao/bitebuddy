const express = require("express");
const mongoDB = require("./db");
require('dotenv').config();

const app = express();
const port = 5000;

// Connect to MongoDB
mongoDB();
app.use((req, res, next) => {
  // Make sure there is no extra space after the origin URL
  res.setHeader("Access-Control-Allow-Origin", "https://bite-buddy-sepia.vercel.app");

  // Set other CORS headers for the request
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  // Allow specific HTTP methods (optional)
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");

  next();
});


// Define routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(express.json()) 
 app.use('/api',require("./Routes/CreateUser"));
 app.use('/api',require("./Routes/DisplayData"));
 app.use('/api',require("./Routes/OrderData"));
// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

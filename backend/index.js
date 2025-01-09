const express = require("express");
const mongoDB = require("./db");
require('dotenv').config();
const cors = require('cors');

const app = express();
const port = 5000;
const FrontendURL = process.env.FRONTEND_URL;

// Connect to MongoDB
mongoDB();
// Middleware CORS handling
app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin", FrontendURL);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
})

app.use(cors());
app.use(cors({ origin: FrontendURL, credentials: true }));
app.use(express.json());


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

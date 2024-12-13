const mongoose = require("mongoose");
require('dotenv').config();


const mongoURL =
  process.env.MONGO_URI

  const mongoDB = async () => {
    try {
      await mongoose.connect(mongoURL); // Options no longer needed
      console.log("Connected to MongoDB");
  
      const fetched_data = mongoose.connection.db.collection("food_items");
      const data = await fetched_data.find({}).toArray() ;

      const foodCategoryCollection = mongoose.connection.db.collection("foodCategory");  
    const catData = await foodCategoryCollection.find({}).toArray();
    
            global.food_items=data;
            global.foodCategory=catData;
         
            console.log("Data loaded successfully!");
    } catch (err) {
      console.error("Error connecting to MongoDB:", err);
    }
  };
  
module.exports = mongoDB;

const express = require("express");
const cors = require("cors");
const pizzaData = require("./data")
const mongo = require("./mongo-utils");

const app = express();
const port = process.env.PORT || 5000;

async function main () {
  
  console.log(process.env.MONGO_URI);
  app.use(cors());

  await mongo.connect();

  app.get('/pizza-data', (req, res) => {
    res.send(pizzaData);
  });


  app.put("/add-to-cart", (req, res) => {
    const payload = req.body;
    console.log(payload);
    mongo.cart.insertOne(payload);
    res.send();
  });


  app.listen(port, () => {
    console.log(`server is running at ${port}`);
  });
};





main();
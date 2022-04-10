const { MongoClient } = require("mongodb");



const client = new MongoClient("mongodb+srv://admin:PasswordForDB@cluster0.ogdic.mongodb.net?retryWrites=true&w=majority");

module.exports = {
  db: null,
  users: null,
  orders: null,
  cart: null,

  async connect() {
    console.log("Connecting to DB");
    await client.connect(); //connect to DB
    //select db
    this.db = client.db("pizzas");
    

    //choose collection;
    this.users = this.db.collection("users");
    this.orders = this.db.collection("orders");
    this.cart = this.db.collection("cart");

    console.log("Connected to DB");
  },
};



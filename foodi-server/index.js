const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 6001;
require("dotenv").config();
// console.log(process.env.CONNECTING_URL);

// hrudayanandasahu3
// wXbAl0GOvmYXDtMM

// middleware
app.use(cors());
app.use(express.json());

// MongoDB config

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.CONNECTING_URL;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();

    //database and collections
    const menuCollections = client.db("demo-foodi-client").collection("menus");
    const cartCollections = client
      .db("demo-foodi-client")
      .collection("cartItems");

    // All menu Items  operations
    app.get("/menu", async (req, res) => {
      const result = await menuCollections.find().toArray();
      res.send(result);
    });

    // All Carts Operations

    // Posting Cart to DB
    app.post("/carts", async (req, res) => {
      const cartItem = req.body;
      const result = await cartCollections.insertOne(cartItem);
      res.send(result);
    });

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

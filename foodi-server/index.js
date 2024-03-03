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
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
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

const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// mongoDB
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.wu8kmms.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

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

    // create a new database collection
    const CoffeeCollection = client
      .db("coffeeCollectionDB")
      .collection("coffeeCollection");

    // add a new coffee inside db
    app.post("/coffee", async (req, res) => {
      const newCoffee = req.body;
      console.log(newCoffee);
      const result = await CoffeeCollection.insertOne(newCoffee);
      res.send(result);
    });

    // get all coffee
    app.get("/coffee", async (req, res) => {
      const cursor = CoffeeCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    // delete a coffee
    app.delete("/coffee/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await CoffeeCollection.deleteOne(query);
      res.send(result);
      console.log(result);
    });

    // Update Coffee
    app.get("/coffee/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await CoffeeCollection.findOne(query);
      res.send(result);
    });

    app.put("/coffee/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updateCoffee = req.body;
      const update = {
        $set: {
          name: updateCoffee.name,
          chef: updateCoffee.chef,
          supplier: updateCoffee.supplier,
          taster: updateCoffee.taster,
          category: updateCoffee.category,
          details: updateCoffee.details,
          photoUrl: updateCoffee.photoUrl,
        },
      };
      const result = await CoffeeCollection.updateOne(filter, update, options);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

// routes
app.get("/", (req, res) => {
  res.send("Coffee making server is running");
});

// listening port
app.listen(port, () => {
  console.log("coffee making server listening on port " + port);
});

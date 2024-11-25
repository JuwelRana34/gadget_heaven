const express = require("express");
const Phones = require("./phones.json");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

// mongodbg

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri =
  "mongodb+srv://rk370613:9HAQQ4vuzAR9Ko9L@cluster0.ocbhdf0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

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
    await client.db("juwelrana").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

const database = client.db("juwelrana");
const collection = database.collection("students");

app.get("/", async (req, res) => {
  const response = await collection.find();
  const data = await response.toArray();
  res.send(data);
});
app.get("/phones", (req, res) => {
  res.send(Phones);

});
app.post("/user", async (req, res) => {
  const user = req.body;
  const result = await collection.insertOne(user);
  res.send(result);

});

app.get("/users/:id", async (req, res) => {
  const id = req.params.id;
  const user = await collection.findOne({
    _id: new ObjectId(id)
  });
 res.send(user)

})
app.put("/users/:id", async (req, res) => {
  const id = req.params.id;
  const user = req.body;
   const result = await collection.updateOne(
    { _id: new ObjectId(id) },
    { $set: user }
  );
  res.send(result);

})

app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  const result = await collection.deleteOne({ _id: new ObjectId(id) });
  res.send(result);

});

app.get("/phone/:id", (req, res) => {
  const id = parseInt(req.params.id);

  res.send(Phones.find((phone) => phone.id === id));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

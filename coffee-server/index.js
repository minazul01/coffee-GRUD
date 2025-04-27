const express = require('express')
const cors = require('cors')
require('dotenv').config()
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express()
const port = process.env.PORT || 5000;

// midleware
app.use(express.json());
app.use(cors());



const uri =`mongodb+srv://${process.env.DB_user}:${process.env.DB_pass}@cluster0.eyk5ydv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const coffeCollection = client.db('coffeeDB').collection('coffee');

    app.get('/coffee', async (req, res) => {
      const coffee = coffeCollection.find();
      const result = await coffee.toArray();
      res.send(result);
    })

    app.post('/coffee', async (req, res) => {
      const coffeeUser = req.body;
      console.log(coffeeUser)
      const result = await coffeCollection.insertOne(coffeeUser);
      res.send(result)
    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.log);




app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
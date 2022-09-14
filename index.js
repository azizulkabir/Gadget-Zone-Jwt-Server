const express = require('express');
var cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 5000;
require('dotenv').config();
const app = express();

//middleware
app.use(cors());
app.use(express.json())

// user: GadgetZone
//password: Yw7JQCCeoSTBvHkO



//mongodb connect


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.crvvuvf.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function run() {
   try {
      await client.connect();
      console.log('db connected');
      const productCollection = client.db("gadgetZone").collection("products");

      //upload products
      app.post('/upload', async (req, res) => {
         const product = req.body;
         console.log(product);
         const result = await productCollection.insertOne(product);
         console.log(result);
         res.send(result);
      })


   } finally {
      //await client.close();
   }
}
run().catch(console.dir);

//Api create 

app.get('/', (req, res) => {
   res.send('My node is running......')
})

app.listen(port, () => {
   console.log('my node start on the port ${port}')
})



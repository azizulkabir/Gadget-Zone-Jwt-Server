const express = require('express');
var cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const { json } = require('express');
const app = express();
require('dotenv').config();
app.use(cors());
app.use(express.json())

// user: GadgetZone
//password: Yw7JQCCeoSTBvHkO



const port = process.env.PORT || 5000;


//mongodb connect


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.crvvuvf.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
   try {
     await client.connect();
     console.log('db connected');
      //upload products
      app.post('/uploadproduct', async(req, rea)=>{
        
      })


   } finally {
     await client.close();
   }
 }
 run().catch(console.dir);

//Api create 
app.get('/', (req, res) => {
   res.send('My node is running......')
})

app.get('/user', (req, res) => {
   res.send('this is user pages')
})

app.listen(port, () => {
   console.log('my node start on the port ${port}')
})



const express = require('express');
var cors = require('cors')
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express()
app.use(cors())

// user: GadgetZone
//password: Yw7JQCCeoSTBvHkO



const port = process.env.PORT || 5000;


app.get('/', (req, res) => {
   res.send('My node is running......')
})

app.get('/user', (req, res) => {
   res.send('this is user pages')
})

app.listen(port, () => {
   console.log('my node start on the port ${port}')
})

//mongodb connect


const uri = `mongodb+srv://GadgetZone:<password>@cluster0.crvvuvf.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
   const collection = client.db("gadgetzone").collection("products");
   // perform actions on the collection object
   console.log('connected database');
   client.close();
});

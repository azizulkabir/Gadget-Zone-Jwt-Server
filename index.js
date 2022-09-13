 const express = require('express');
 const app = express()
 const port = process.env.PORT || 5000;


 app.get('/', (req, res)=>{
    res.send('My node is running......')
 })

 app.listen(port, ()=>{
    console.log('my node start on the port ${port}')
 })
 const express = require('express');
 const app = express()
 const port = process.env.PORT || 5000;


 app.get('/', (req, res)=>{
    res.send('My node is running......')
 })

 app.get('/user', (req, res)=>{
    res.send('this is user pages')
 })

 app.listen(port, ()=>{
    console.log('my node start on the port ${port}')
 })
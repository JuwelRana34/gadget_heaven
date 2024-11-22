const express = require('express');
const Phones = require('./phones.json');
var cors = require('cors')
const app = express();
 const port =  3000 
 app.use(cors())

 app.get('/', (req, res) => {
     res.send('juwel Rana!');
 });
 app.get('/phones', (req, res) => {
     res.send(Phones);
 });
 app.get('/phone/:id', (req, res) => {
    const id = parseInt(req.params.id) 
   
     res.send(Phones.find(phone => phone.id === id));
 });




 app.listen(port, ()=>{
     console.log(`Server is running at http://localhost:${port}`)
 });
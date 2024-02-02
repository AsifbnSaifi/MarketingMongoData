require("dotenv").config();
const express = require("express");
const server = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const databaseConnect = require('./database/connectDatabase.js');
const getdata  = require('./routes/getmongodata.js')

// Use CORS middleware
server.use(cors())
server.use(bodyParser.json());

const port = process.env.PORT || 5000;  

//Check for Home is Working  Fine
server.get('/' , (req, res)=>{
    res.send('Home Route is Working Fine')
})

server.use(getdata)

databaseConnect().then(() => { 
    server.listen(port, () => {
        console.log(`server is running on port ${port}`)
    })
 });
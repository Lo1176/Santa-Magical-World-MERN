const express = require('express')
const cors = require("cors");
const app = express()
require('dotenv').config()
const port = process.env.DB_PORT || 5000;
console.log("This si the port : " + process.env.DB_PORT);
// const port = 3000
const MongoDBClient = require('./mongoClient')
const categoriesRoute = require('./routes/categoriesRoute')
const toysRoute = require('./routes/toysRoute')

// (Enable All CORS Requests)
app.use(cors());


app.use(express.urlencoded({ extended: false }))
app.use(express.json())


app.get('/', (req, res)=> {
    res.json({status: 200, msg: "ok"})
})

app.all('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next()
})
//Routes categories 
categoriesRoute(app)

//Route toys 
toysRoute(app)


app.listen(port, ()=>{
    console.log(`Connecté au port ${port}`)
    MongoDBClient.initialize()
})
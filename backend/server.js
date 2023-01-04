const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.DB_PORT || 5000;
// const port = 3000
const MongoDBClient = require('./mongoClient')
const categoriesRoute = require('./routes/categoriesRoute')
const toysRoute = require('./routes/toysRoute')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())


app.get('/', (req, res)=> {
    res.json({status: 200, msg: "ok"})
})

//Routes categories 
categoriesRoute(app)

//Route toys 
toysRoute(app)


app.listen(port, ()=>{
    console.log(`Connecté au port ${port}`)
    MongoDBClient.initialize()
})
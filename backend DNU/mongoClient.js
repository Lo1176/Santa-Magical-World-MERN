const mongoose = require('mongoose');
// const DB_NAME = "Santa'sMagicalWorld";
const URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.p59na4o.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;


const MongoDBClient = {
    initialize(){
        try {
            mongoose
              .set("strictQuery", true)
              .connect(URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
              })
              .then(() =>
                console.log(
                  `successfully connected to DB: ${process.env.DB_NAME}`
                )
              )
              .catch((error) => console.log("mongoose is not connected"));
        } catch(err) {
            throw Error(err)
        }
    }
}

module.exports = MongoDBClient;

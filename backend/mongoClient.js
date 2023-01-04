const mongoose = require('mongoose');
const DB = process.env.DB_NAME || "Santa-magical-world";
const URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.p59na4o.mongodb.net/${DB}?retryWrites=true&w=majority`;

const MongoDBClient = {
    initialize(){
        try {
            mongoose.connect(URI, 
                { 
                    useNewUrlParser: true, //dans la doc
                    useUnifiedTopology: true // dans la doc 
                })

            .then(() => console.log(`successfully connected to DB: ${DB}`))
            .catch((err)=> console.log(err))
        } catch(err) {
            throw Error(err)
        }
    }
}

module.exports = MongoDBClient;


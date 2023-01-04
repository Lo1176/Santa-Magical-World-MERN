const Mongoose = require('mongoose');

const toysSchema = new Mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: String, required: true},
    category: {type: String, required: true},
    creationDate: {type: Date, required: true}
}, {collection: "toys"})

module.exports = Mongoose.model('toys', toysSchema);

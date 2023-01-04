const Mongoose = require('mongoose');

const categoriesSchema = new Mongoose.Schema({
    name: {type: String, required: true},
    creationDate: {type: Date, required: true}
}, {collection: "categories"})

module.exports = Mongoose.model('categories', categoriesSchema);

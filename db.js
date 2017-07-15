var mongoose = require('mongoose')

// Mongoose deprecating promise
mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost/nasihat', {useMongoClient: true})

module.exports = mongoose

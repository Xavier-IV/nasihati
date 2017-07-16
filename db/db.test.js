var mongoose = require('mongoose')

// Mongoose deprecating promise
mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost/nasihat-test', {useMongoClient: true})

module.exports = mongoose

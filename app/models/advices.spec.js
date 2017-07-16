let db = require('../../db/db')
let Schema = db.Schema

var nasihatSchema = new Schema(
  {
    _id: Schema.Types.ObjectId,
    id: Number,
    text: String,
    source: String,
    source_link: String,
    show_at: { type: Date, default: Date.now }
  },
  { timestamps: { createdAt: 'created_at' }
  })

nasihatSchema.statics.findNextResource = function (currentId, callback) {
  'use strict'

  return this.find({id: {$gt: currentId}}, callback)
    .limit(1)
}

nasihatSchema.statics.findPrevResource = function (currentId, callback) {
  'use strict'

  return this.find({id: {$lt: currentId}}, callback)
    .sort({id: -1})
    .limit(1)
}

let Nasihat = db.model('nasihats_test', nasihatSchema)

module.exports = Nasihat

const mongoose = require('mongoose')

const Schema = mongoose.Schema

const mySchema = new Schema({
    text: String,
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    }
})

const model = mongoose.model('Note', mySchema)
module.exports = model
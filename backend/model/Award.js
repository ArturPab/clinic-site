const mongoose = require('mongoose')

const AwardSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },

    content: {
        type: String,
        required: true,
        min:6,
        max: 4096
    },

    imageUrl: {
        type: String,
        required: false,
        min: 1,
        max: 255
    }
})

module.exports = mongoose.model('Award', AwardSchema)
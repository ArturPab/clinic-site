const mongoose = require('mongoose')

const ManagementSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    jobPosition: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    about: {
        type: String,
        required: true,
        min: 30,
        max: 4096
    },
    img: {
        type: String
    },
})

module.exports = mongoose.model('Management', ManagementSchema)
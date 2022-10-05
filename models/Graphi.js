const mongoose = require('mongoose');

const Graphi_desing = mongoose.Schema({
    label: {
        type: String,
        required: [true, "Not your name"],
        trim: true,
        unique: [true, "names is unique"],
        minlength: [2, 'fast me at 3 section '],
        maxLength: [200, "So sorry bro i genaret 200 number max"]

    },
    yValue: {
        type: Number,
        required: [true, "Number"],
        min: [0, "minima prics"],
        max: [900000,"max prics"]
    },
    xValue: {
        type: Number,
        min: [0, "minima prics"],
        max: [900000,"max prics"]
    },
    user:{
        type: String,
        required: [true, "Number"],
    }

}, { timestamps: true })

const SingleBar = mongoose.model('singleBar', Graphi_desing)
const HorizentalBar = mongoose.model('horizentalBar', Graphi_desing)
const MultipleBar = mongoose.model('multipleBar', Graphi_desing)
const SimpleLine = mongoose.model('simpleLine', Graphi_desing)
const DualLine = mongoose.model('dualLine', Graphi_desing)
module.exports = { SingleBar, HorizentalBar, MultipleBar, SimpleLine,DualLine};
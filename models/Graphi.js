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
        max: [900000]
    },
    xValue: {
        type: Number,
        min: [0, "minima prics"],
        max: [900000]
    }

}, { timestamps: true })

const SingleBar = mongoose.model('SingleBar', Graphi_desing)
const HorizentalBar = mongoose.model('HorizentalBar', Graphi_desing)
const MultipleBar = mongoose.model('MultipleBar', Graphi_desing)
const SimpleLine = mongoose.model('SimpleLine', Graphi_desing)
const DualLine = mongoose.model('DualLine', Graphi_desing)
module.exports = { SingleBar, HorizentalBar, MultipleBar, SimpleLine,DualLine};
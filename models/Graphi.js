const mongoose = require('mongoose');

const Graphi_desing = mongoose.Schema({
    label: {
        type: String,
        required: [true, "Not your name"],
        unique: [false, "names is unique"],

    },
    yValue: {
        type: Number,
        required: [true, "Number"],
        unique: [false, "names is unique"],
    },
    xValue: {
        type: Number,
        min: [0, "minima prics"],
        max: [900000,"max prics"],
        unique: [false, "names is unique"],
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
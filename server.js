const mongoose = require('mongoose');
const dotenv = require('dotenv').config()
const app = require('./app')
const port = process.env.PORT || 5000;


/* ================ Database connetion ================ */
mongoose.connect(process.env.DATABASE).then(() => {
    console.log("susses full connection")
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


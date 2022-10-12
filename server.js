const mongoose = require('mongoose');
const dotenv = require('dotenv').config()
const server = require('./app')
const port = process.env.PORT || 5000;


/* ================ Database connection ================ */
mongoose.connect(process.env.DATABASE).then(() => {
    console.log("susses full connection")
})



server.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})



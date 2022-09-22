const express = require('express')
const app = express()
const cors = require('cors')
const GraphiRouter = require('./routes/Graphi.routes')

/* Middleiwres*/
app.use(express.json())
app.use(cors())




/* ==================== post Data  */
app.use('/api/v1/grap', GraphiRouter)






app.get('/', (req, res) => {
    res.send("This is a connet app js ")
})


module.exports = app;
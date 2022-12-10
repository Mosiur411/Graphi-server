const express = require('express')
const app = express()
const cors = require('cors')

const server = require("http").Server(app)

const io = require("socket.io")(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
})

const GraphiRouter = require('./routes/Graphi.routes')
const { send } = require('process')

/* Middleiwres*/
app.use(express.json())
app.use(cors())


app.get('/',(req,res)=>{
    res.send("hi")
})
/* ==================== post Data  */
app.use('/api/v1/grap', GraphiRouter)

app.get('/', (req, res) => {
    res.send("This is a connet app js ")
})

io.on('connection', (socket) => {
    socket.on('store_data', () => {
        socket.broadcast.emit("get_data")
    });
   
});
/* server export */
module.exports = server;


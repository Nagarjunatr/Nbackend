const connectMongo = require("./db")
const express = require('express')
var cors = require('cors')

const app = express()
const port = 5000
connectMongo()
app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
    res.send('Hello Worlds!')
})
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
})

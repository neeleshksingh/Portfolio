const express = require('express')
const connection = require('./connection/connection')
connection()
const cors = require('cors')

const app = express()

app.use(cors())

app.listen(5050 || process.env.PORT, ()=>console.log("Listening on port 5050"))
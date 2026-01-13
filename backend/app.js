const express = require('express')
const connection = require('./connection/connection')
connection()
const cors = require('cors')

const app = express()

app.use(cors());

app.use('/api', require('./routes/messages.route'));

app.get('/', (req, res) => {
    res.send("API is running")
});

app.get('*', (req, res) => {
    res.status(404).send("404 Not Found")
});

app.listen(5050 || process.env.PORT, () => console.log("Listening on port 5050"))
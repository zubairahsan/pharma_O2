const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const server = express();

const pharmaRoute = require('./api/routes/pharma_O2');
const db = require('./config/db').URI;
mongoose.connect(db)
    .then(() => {
        console.log('mongodb is connected')
    })
    .catch(err => {
        console.log(err)
    })



server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json());


server.use('/api/pharma', pharmaRoute);
const port = 8888;
server.listen(port, () => `server is listening at port ${port}`)




if(process.env.NODE_ENV !== 'production'){
    require("dotenv").config();
}

const express = require('express')
const cors = require('cors')
const app = express()

const errorHandler = require("./middlewares/errorHandler")
const router = require('./routes/index')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

app.use(errorHandler)

module.exports = app;
const express = require('express')
const app = express();
require('dotenv').config();
const port = 6500;
const db =require('./config/db')
const errorHandler = require('./middleware/errorHandler')
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use('/', require('./routes'));
app.listen(port, (error) => {
    if (error) {
        console.log('server starting in error');
    }
    console.log('server listening on port : ' + port);
})
app.use(errorHandler);
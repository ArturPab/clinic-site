const express = require('express');
const app = express();
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload');

//Import Routes
const authRoute = require('./routes/auth');
const aboutUsRoute = require('./routes/about-us');
const { required } = require('joi');

dotenv.config();

// Connect to DB
mongoose.connect(
    process.env.DB_CONNECT,
    { useUnifiedTopology: true, useNewUrlParser: true } ,
    () => console.log('connected to db'));

// Middleware
app.use(express.json())
app.use(cors())
app.use(fileUpload())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use('/public', express.static('public'));

//Route Middlewares
app.use('/api/user', authRoute);
app.use('/api/about-us', aboutUsRoute)


app.listen(3000, () => console.log('Server Up and running'));
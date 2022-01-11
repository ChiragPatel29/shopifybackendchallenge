const express = require('express')
var cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express()
const port = process.env.PORT || 8080
app.use(cors())

app.use(express.json());


//Connect to database
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true , useUnifiedTopology: true}
);

//Open a connection
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

//Route all requests to inventory router
const inventoryRouter = require('./inventoryroutes');
app.use('/', inventoryRouter);


//Host the server on the port
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

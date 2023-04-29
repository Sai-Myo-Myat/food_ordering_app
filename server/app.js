const express = require('express');
const mongoose = require('mongoose')


const foodRouter = require("./routes/food");

require('dotenv').config()

const app = express();

app.use(express.json()) // applications/json

app.use('/food',foodRouter)

mongoose
    .connect(
        process.env.DB_URL,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true 
        }    
   )
   .then(result => {
        console.log("connected")
        app.listen(process.env.PORT, _ => console.log("app is running on port " + process.env.PORT))
   })
   .catch(error => console.log(error))
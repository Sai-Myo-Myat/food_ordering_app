const express = require('express');


const foodRouter = require("./routes/food");

const app = express();

app.use('/food',foodRouter)

app.listen(8000, () => console.log("app is runing on port 8000"))
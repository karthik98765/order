const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./Routes/userRouter');
const productRouter = require('./Routes/productRouter');
const outletRouter = require('./Routes/outletRouter');

const app = express();
const port = process.env.PORT || 5000

app.use(bodyParser.urlencoded({ extended: false}))

app.use(bodyParser.json())

app.use(userRouter);
app.use(productRouter);
app.use(outletRouter);

app.listen(port, () => {
    console.log(`listen on port ${port}`)
})
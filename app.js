const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./Routes/userRouter');

const app = express();
const port = process.env.PORT || 5000

app.use(bodyParser.urlencoded({ extended: false}))

app.use(bodyParser.json())

app.use(userRouter);

app.listen(port, () => {
    console.log(`listen on port ${port}`)
})
const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const app = express()

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(('mongodb+srv://developer:FxW1Z4b1JnxO5Sjs@cluster0.kivxtrs.mongodb.net/coco?retryWrites=true&w=majority'),
                 (err, res) => {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log('Database Connected')
                    }
                 })



const indexRouter = require('./routes/index');
const contactRouter = require('./routes/contact');

app.use('/contact', contactRouter);
app.use('/', indexRouter);

const port = process.env.PORT || 5966
app.listen(port, () => {
    console.log('Server sudah berjalan')
})
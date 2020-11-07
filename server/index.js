const express = require('express');
const mongoose = require('mongoose');

const houses = require('./routes/houses');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the house listing API');
});

app.use('/api/houses', houses);

require('dotenv').config();

const port = process.env.PORT || 3000;

mongoose.connect('mongodb+srv://j33my:PaRwgUhxbwzdV97b@passportauth.eki46.mongodb.net/nyumba_app?retryWrites=true&w=majority')
    .then(result => {
        app.listen(port, () => console.log(`Server is running on port ${port}`))
    })
    .catch(err => console.log(err))

import express from 'express';
import mongoose from 'mongoose';
import Cors from 'cors';

import Cards from './models/cards.js';

// App configuration
const app = express();
const port = process.env.PORT || 8001;

const connection_url = 'mongodb+srv://tinder-admin:ncgtBjc5BgW31d4b@cluster0.n2usw.mongodb.net/tinderdb?retryWrites=true&w=majority';

// Middleware
app.use(express.json());
app.use(Cors());

// DB configuration
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

// API endpoints
app.get('/', (req, res) => {
    res.status(200).send('Hello world');
});

app.post('/tinder/cards', (req, res) => {
    const cards = req.body;
    
    Cards.create(cards, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    });
});

app.get('/tinder/cards', (req, res) => {
    Cards.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    });
});

// Listeners
app.listen(port, () => console.log(`listening on localhost: ${port}`));
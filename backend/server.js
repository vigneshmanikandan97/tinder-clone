import express from 'express';
import mongoose from 'mongoose';

// App configuration
const app = express();
const port = process.env.PORT || 8001;

// Middleware

// DB configuration

// API endpoints
app.get('/', (req, res) => {
    res.status(200).send('Hello world');
});

// Listeners
app.listen(port, () => console.log(`listening on localhost: ${port}`));
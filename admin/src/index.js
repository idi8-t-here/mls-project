require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');
const fs = require('fs');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const propertyRoutes = require('./routes/property');
const removeDuplicates = require('./utils/removeDuplicates');
const cors = require('cors');
const roleRoutes = require('./routes/roleRoutes');
const subscriptionRoutes = require('./routes/subscription');
const userRoutes = require('./routes/userRoutes');
require('./middlewares/subscriptionCron');

const app = express();
app.use(express.json());
app.use(cors());

// Middleware

app.use(passport.initialize());

// Database connection
connectDB();

// Passport configuration
require('./config/passport')(passport);

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);

app.use('/api/roles', roleRoutes);
app.use('/api/subscription', subscriptionRoutes);



app.use('/properties', propertyRoutes);

app.get('/', (req, res) => {
    scrapeWebsite()
        .then(() => {
            res.send('Scraping complete.');
        })
        .catch(error => {
            res.send('Error:', error);
        });
});

app.get('/api/scraped_data', (req, res) => {
    try {
        const scrapedData = JSON.parse(fs.readFileSync('data/scraped_data.json', 'utf8'));
        const uniqueData = removeDuplicates(scrapedData, ['title', 'category']);
        res.json(uniqueData);
    } catch (error) {
        console.error('Error reading scraped data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/api/data_change', (req, res) => {
    try {
        const scrapedData = JSON.parse(fs.readFileSync('data/changed_data.json', 'utf8'));
        const uniqueData = removeDuplicates(scrapedData, ['title', 'category']);
        res.json(uniqueData);
    } catch (error) {
        console.error('Error reading scraped data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

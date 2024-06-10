require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const propertyRoutes = require('./routes/property');
const removeDuplicates = require('./utils/removeDuplicates');
const cors = require('cors');
const roleRoutes = require('./routes/roleRoutes');
const bookmarkRoutes = require('./routes/bookmark');
const subscriptionRoutes = require('./routes/subscription');
const userRoutes = require('./routes/userRoutes');
require('./middlewares/subscriptionCron');
const axios = require('axios');


const app = express();
app.use(express.json());
app.use(cors());
app.use("/uploads/", express.static(path.join(__dirname, "uploads")));
app.use("/profile/", express.static(path.join(__dirname, "profile")));



const CHAPA_AUTH_KEY = 'CHASECK_TEST-x5EdlkEZReuCchRha52iXPi9FwWHcLC0'


app.post("/accept-payment", async (req, res) => {
    const {
      amount,
      currency,
      email,
      first_name,
      last_name,
      phone_number,
      tx_ref,
    } = req.body;
  
    try {
      const header = {
        headers: {
          Authorization: `Bearer ${CHAPA_AUTH_KEY}`,
          "Content-Type": "application/json",
        },
      };
      const body = {
        amount: amount,
        currency: currency,
        email: email,
        first_name: first_name,
        last_name: last_name,
        phone_number: phone_number,
        tx_ref: tx_ref,
        return_url: "",
      }
      let resp = "";
      await axios
        .post("https://api.chapa.co/v1/transaction/initialize", body, header)
        .then((response) => {
          resp = response;
        })
        .catch((error) => {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
          res.status(400).json({
            message: error,
          });
        });
      res.status(200).json(resp.data);
    } catch (e) {
      console.log(e),
      res.status(400).json({
        error_code: e.code,
        message: e.message,
      });
    }
  });

// Middleware

app.use(passport.initialize());

// Database connection
connectDB();

// Passport configuration
require('./config/passport')(passport);

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);

app.use('/api/bookmark', bookmarkRoutes);
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

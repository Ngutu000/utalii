const express = require('express');
const app = express();
const mongoose = require('mongoose');
const connectDB = require('./config');
const operators = require('./routes/operators');

app.use(express.json());

// Connect to the database
connectDB()
  .then(() => {
    console.log('Connected to Database');

    // Use routes
    app.use('/api', operators);

    // Start the server
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch(error => {
    console.error('Failed to connect to database:', error);
    process.exit(1); // Exit with error
  });

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const  connectDB = require('./config');
const operators = require('./routes/operators');

// Other middleware and configurations

app.use('/api', operators); // assuming you want to prefix all routes in the router with '/api'

// Other routes and configurations
if (connectDB) {
	console.log('Connected to Database');
	app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
	
}


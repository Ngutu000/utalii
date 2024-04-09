const mongoose = require('mongoose');
const connectDB = mongoose.connect('mongodb+srv://Utalii:utalii000@cluster0.xlshij1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

module.exports = connectDB;
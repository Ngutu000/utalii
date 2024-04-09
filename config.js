const mongoose = require('mongoose');

// Function to establish database connection
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://Utalii:utalii000@cluster0.xlshij1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
      useUnifiedTopology: true,
      
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    throw error;
  }
};

module.exports = connectDB;

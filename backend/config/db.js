const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Debugging: Log the Mongo URI to check it's being read properly
    console.log("Mongo URI:", process.env.MONGO_URI);  // Check if the URI is correct

    // Ensure that the Mongo URI is not undefined
    if (!process.env.MONGO_URI) {
      console.error('Mongo URI is undefined!');
      process.exit(1);  // Exit if the URI is not found
    }

    // Connect to MongoDB using the URI
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit if connection fails
  }
};

module.exports = connectDB;

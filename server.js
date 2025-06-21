import dotenv from 'dotenv';
import mongoose from 'mongoose';
import express from 'express';
import userRoutes from './userRoutes.js'; // ✅ Import your routes

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Routes
app.use('/', userRoutes); // ✅ Register routes

// MongoDB connection. //also cloud atlas
mongoose.connect(process.env.MONGODB_URI, {
 
})
  .then(() => {
    console.log('✅ Connected to MongoDB');
    app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
  })
  .catch(err => {
    console.error(' MongoDB connection error:', err);
  });

  //akhileshyadu001
  //7uN7K2RB6EJ2mYYi
  //mongodb+srv://<db_username>:<db_password>@cluster0.x3ne1tq.mongodb.net/

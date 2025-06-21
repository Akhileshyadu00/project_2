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

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('✅ Connected to MongoDB');
    app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
  })
  .catch(err => {
    console.error(' MongoDB connection error:', err);
  });

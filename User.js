import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    minlength: 3
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    match: [/.+\@.+\..+/, 'Email is invalid']
  },
  age: {
    type: Number,
    min: [1, 'Age must be at least 1'],
    max: 120
  }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
export default User;

import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Book title is required'],
      trim: true,
      maxlength: 150,
    },
    author: {
      type: String,
      required: [true, 'Author name is required'],
      trim: true,
      maxlength: 100,
    },
    description: {
      type: String,
      trim: true,
      maxlength: 1000,
    },
    publishedYear: {
      type: Number,
      min: [0, 'Invalid year'],
      max: [new Date().getFullYear(), 'Future years not allowed'],
    },
    genre: {
      type: String,
      enum: ['Fiction', 'Non-Fiction', 'Science', 'History', 'Fantasy', 'Other'],
      default: 'Other',
    },
    available: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt
  }
);

const Book = mongoose.model('Book', bookSchema);
export default Book;

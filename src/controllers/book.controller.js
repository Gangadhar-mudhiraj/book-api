import Book from '../models/book.model.js';
import SuccessApiResponse from '../utils/SuccessApiResponse.util.js';
import FailApiResponse from '../utils/FailApiResponse.util.js';
import { bookValidationSchema } from '../validations/bookValidation.js';
import { asyncHandler } from '../utils/AsyncHandler.util.js';

// @route   GET /api/books
export const getAllBooks = asyncHandler(async (_, res) => {
    const books = await Book.find();

    if (!books || books.length === 0) {
        return res.status(404).json(
            new FailApiResponse({ message: 'No books available currently' })
        );
    }

    return res.status(200).json(
        new SuccessApiResponse({
            message: 'Books fetched successfully',
            data: books,
        })
    );
});

// @route   POST /api/books
export const createBook = asyncHandler(async (req, res) => {
    const { error } = bookValidationSchema.validate(req.body, { abortEarly: false });

    if (error) {
        return res.status(400).json(
            new FailApiResponse({
                message: 'Validation failed',
                errors: error.details.map((err) => err.message),
            })
        );
    }

    const { title, author } = req.body;

    const existingBook = await Book.findOne({ title, author });

    if (existingBook) {
        return res.status(400).json(
            new FailApiResponse({
                message: 'Book already exists',
            })
        );
    }

    const newBook = new Book(req.body);
    const savedBook = await newBook.save();

    return res.status(201).json(
        new SuccessApiResponse({
            message: 'Book created successfully',
            data: savedBook,
        })
    );
});

// @route   GET /api/books/:id
export const getBookById = asyncHandler(async (req, res) => {
    const book = await Book.findById(req.params.id);

    if (!book) {
        return res.status(404).json(
            new FailApiResponse({
                message: 'Book not found',
            })
        );
    }

    return res.status(200).json(
        new SuccessApiResponse({
            message: 'Book retrieved successfully',
            data: book,
        })
    );
});

// @route   PUT /api/books/:id
export const updateBook = asyncHandler(async (req, res) => {
    const { error } = bookValidationSchema.validate(req.body, { abortEarly: false });

    if (error) {
        return res.status(400).json(
            new FailApiResponse({
                message: 'Validation failed',
                errors: error.details.map((err) => err.message),
            })
        );
    }

    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });

    if (!updatedBook) {
        return res.status(404).json(
            new FailApiResponse({ message: 'Book not found for update' })
        );
    }

    return res.status(200).json(
        new SuccessApiResponse({
            message: 'Book updated successfully',
            data: updatedBook,
        })
    );
});

// @route   DELETE /api/books/:id
export const deleteBook = asyncHandler(async (req, res) => {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);

    if (!deletedBook) {
        return res.status(404).json(
            new FailApiResponse({ message: 'Book not found for deletion' })
        );
    }

    return res.status(200).json(
        new SuccessApiResponse({
            message: 'Book deleted successfully',
            data: deletedBook,
        })
    );
});

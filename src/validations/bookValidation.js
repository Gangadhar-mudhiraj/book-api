import Joi from 'joi';

export const bookValidationSchema = Joi.object({
  title: Joi.string()
    .max(150)
    .required()
    .messages({
      'string.empty': 'Title is required',
      'any.required': 'Title is required',
    }),

  author: Joi.string()
    .max(100)
    .required()
    .messages({
      'string.empty': 'Author is required',
      'any.required': 'Author is required',
    }),

  description: Joi.string()
    .max(1000)
    .optional()
    .allow('')
    .messages({
      'string.max': 'Description can be at most 1000 characters',
    }),

  publishedYear: Joi.number()
    .integer()
    .min(0)
    .max(new Date().getFullYear())
    .optional()
    .messages({
      'number.base': 'Published year must be a number',
      'number.max': 'Published year cannot be in the future',
    }),

  genre: Joi.string()
    .valid('Fiction', 'Non-Fiction', 'Science', 'History', 'Fantasy', 'Other')
    .optional()
    .messages({
      'any.only': 'Genre must be one of Fiction, Non-Fiction, Science, History, Fantasy, Other',
    }),

  available: Joi.boolean().optional(),
});

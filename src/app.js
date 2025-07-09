import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

const app = express();

// Built-in body parser
app.use(express.json()); // Handles JSON
app.use(cors());
app.use(morgan('dev'));

import bookRoutes from "./routes/book.route.js"
app.use('/api/books', bookRoutes);

app.get('/verify', (_, res) => {
  res.json({ message: 'API is running' });
});

// 404 Not Found Handler
app.all('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Page not found',
  });
});


export default app;

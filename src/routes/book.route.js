import { Router } from "express";

const router=Router()

router.get('/', getAllBooks);        // GET /api/books
router.post('/', createBook);        // POST /api/books
router.get('/:id', getBookById);     // GET /api/books/:id
router.put('/:id', updateBook);      // PUT /api/books/:id
router.delete('/:id', deleteBook);   // DELETE /api/books/:id


export default router
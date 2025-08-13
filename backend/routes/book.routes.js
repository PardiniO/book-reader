const Express = require('express');
const router = Express.Router();

let books = [];

router.post('/', (req, res) => {
    const newBook = { id: books.length + 1, ...req.body };
    books.push(newBook);
    res.status(201).json({ message: 'Book added successfully', book: newBook });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    books = books.filter(book => book.id !== parseInt(id));
    res.json({ message: 'Book deleted successfully' });
});

router.get('/', (req, res) => {
    res.json(books);
});

module.exports = router;

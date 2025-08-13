const Express = require('express');
const router = Express.Router();

let notes = [];

router.get('/', (req, res) => {
    res.json(notes);
});

router.post('/', (req, res) => {
    const newNote = { id: notes.length + 1, ...req.body };
    notes.push(newNote);
    res.status(201).json({ message: 'Note added successfully', note: newNote });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    notes = notes.filter(note => note.id !== parseInt(id));
    res.json({ message: 'Note deleted successfully' });
});

module.exports = router;

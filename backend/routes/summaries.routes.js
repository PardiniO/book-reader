const Express = require('express');
const router = Express.Router();

let summaries = [];

router.get('/', (req, res) => {
    res.json(summaries);
});

router.post('/', (req, res) => {
    const newSummary = { id: summaries.length + 1, ...req.body };
    summaries.push(newSummary);
    res.status(201).json({ message: 'Summary added successfully', summary: newSummary });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    summaries = summaries.filter(summary => summary.id !== parseInt(id));
    res.json({ message: 'Summary deleted successfully' });
});

module.exports = router;

const Express = require('express');
const app = Express();
const port = 3000;

const usersRoute = require('./routes/users.routes');
const booksRoute = require('./routes/book.routes');
const notesRoute = require('./routes/notes.routes');
const summariesRoute = require('./routes/summaries.routes');

app.use('/V1', Router);
app.use('/V1/users', usersRoute);
app.use('/V1/books', booksRoute);
app.use('/V1/notes', notesRoute);
app.use('/V1/summaries', summariesRoute);

app.get('/', (req, res) => {
    res.send('Server working!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


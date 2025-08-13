const Express = require('express');
const app = Express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, (req, res) => {
    res.send(`Server is running on http://localhost:${port}`);
    console.log(`Server is running on http://localhost:${port}`);
});

app.use('/V1', Router);
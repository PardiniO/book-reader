const Express = require('express');
const router = Express.Router();

let users = [];

router.post('/log-on', (req, res) => {
    const { username, email, password } = req.body;
    const exist = users.find(user => user.username === username || user.email === email);

    if (exist) {
        return res.status(400).json({ message: 'User already exists' });
    }
    
    const newUser = { id: users.length + 1, username, email, password };
    users.push(newUser);
    res.status(201).json({ message: 'User created successfully', user: newUser });
});

router.post('/log-in', (req, res) => {
    const { username, email, password } = req.body;
    const user = users.find(user => user.email === email && user.password === password);

    if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }
    res.json({ message: 'Login successful', user });
});

module.exports = router;
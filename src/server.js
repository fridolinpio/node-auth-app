const express = require('express');
const signupMessage = require('./signup');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Auth App is running');
});

app.get('/signup', (req, res) => {
    res.send(signupMessage);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

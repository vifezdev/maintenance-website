const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const PORT = 3000; // Change the port
const PASSWORD = "password123"; // Set the password

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/login', (req, res) => {
    const { password } = req.body;
    if (password === PASSWORD) {
        const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
        console.log(`[LOG] ${ip}:${PORT} Has logged in`);
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
const db = require('../config/db');

const createUser = (req, res) => {
    const { username, password } = req.body;
    const query = 'INSERT INTO user (username, password) VALUES (?, ?)';
    db.query(query, [username, password], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ id: result.insertId });
    });
};

const getUserById = (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM user WHERE user_id = ?';
    db.query(query, [id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (result.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(result[0]);
    });
};

module.exports = { createUser, getUserById };
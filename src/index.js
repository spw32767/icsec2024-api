const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

console.log("Initializing database connection...");

// Database connection
const connection = mysql.createConnection({
    host: '119.59.96.62', // Remote server IP
    port: 3306,          // Standard MySQL port
    user: 'dbicsec2024',  // Database username
    password: 'icsec2024', // Database password
    database: 'icsec2024db' // Database name
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        process.exit(1); // Exit the process with an error code
    } else {
        console.log('Connected to the database.');
    }
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Global error handlers
process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

const fs = require("fs");
const sqlite3 = require("sqlite3").verbose();
const filepath = "./transaction.db";

function createDbConnection() {
    if (fs.existsSync(filepath)) {
        return new sqlite3.Database(filepath);
    } else {
        const db = new sqlite3.Database(filepath, (error) => {
            if (error) {
                return console.error(error.message);
            }
            createTable(db);
        });
        console.log("Connection with SQLite has been established");
        return db;
    }
}

function createTable(db) {
    db.run(`CREATE TABLE IF NOT EXISTS transactions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      hash TEXT, 
      type TEXT,
      amount REAL,
      token TEXT,
      from_address TEXT,
      to_address TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`, (error) => {
        if (error) {
            console.error('Error creating table:', error.message);
        } else {
            console.log('Table created successfully!');
        }
    });
}

module.exports = {
    db: createDbConnection()
};
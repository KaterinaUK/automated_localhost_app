const {db} = require('../config/db');

class TransactionRepository {
    constructor(db) {
        this.db = db;
    }

    insertTransaction(transaction) {
        const sql = `INSERT INTO transactions (hash, type, amount, token, from_address, to_address, created_at, updated_at)
      VALUES (?, ?, ?, ?, ?, ? , ? , ?)`;
        const values = [transaction.hash, transaction.type, transaction.amount, transaction.token, transaction.from, transaction.to, transaction.createdAt, transaction.updatedAt];
        this.db.run(sql, values, (error) => {
            if (error) {
                console.error('error inserting transaction:', error.message);
            } else {
                console.log('transaction inserted successfully!');
            }
        });
    }

    getTransactionsByHash(hash) {
        return new Promise((resolve, reject) => {
            this.db.serialize(() => {
                this.db.get(`SELECT * FROM transactions WHERE hash = "${hash}"`, [], (err, rows) => {
                    if (err) reject(err);
                    resolve(rows);
                });
            });
        });
    };

    close() {
        this.db.close((error) => {
            if (error) {
                console.error('Error closing database:', error.message);
            } else {
                console.log('Database closed successfully!');
            }
        });
    }
}

module.exports = {
    transactionRepo: new TransactionRepository(db)
};

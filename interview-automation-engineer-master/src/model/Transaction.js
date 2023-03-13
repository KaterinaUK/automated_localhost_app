class Transaction {
    constructor(hash, type, amount, token, from, to) {
        this.hash = hash,
        this.type = type;
        this.amount = amount;
        this.token = token;
        this.from = from;
        this.to = to;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }

    toString() {
        return `hash: ${this.hash},type: ${this.type}, amount: ${this.amount}, token: ${this.token}, from: ${this.from}, to: ${this.to} createdAt: ${this.createdAt} updatedAt: ${this.updatedAt}`;
    }
}

module.exports = Transaction;
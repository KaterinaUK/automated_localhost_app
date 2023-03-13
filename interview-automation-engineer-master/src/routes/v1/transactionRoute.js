const express = require('express');
const { transactionController } = require('../../controllers/index');

const router = express.Router();

router.route('/').post(transactionController.getTransactionsByHash);

module.exports = router;

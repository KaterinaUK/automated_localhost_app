const catchAsync = require('../utils/catchAsync');
const {transactionRepo} = require('../repository/TransactionRepository');

const getTransactionsByHash = catchAsync(async (req, res) => {
  const data = await transactionRepo.getTransactionsByHash(req.body["hash"]);
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify(data));
});

module.exports = {
  getTransactionsByHash,
};

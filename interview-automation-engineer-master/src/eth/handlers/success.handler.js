const {erc20TransferProcessor} = require("../processor/erc20TransferProcessor");
const logger = require('../../config/logger');
const {transactionRepo} = require('../../repository/TransactionRepository');

async function readRandomly(){
    let response =  await transactionRepo.getTransactionsByHash("0xbe286d0528d0ee55c307fae43b9cd0552d329ba6f9e6b71178402a6efe620dfb");
    logger.info("random_reader" + JSON.stringify(response) );
}


async function successHandler(web3, event) {
   const transaction = await erc20TransferProcessor(web3, event);
   if(transaction !== undefined){
       logger.info(`processed event ${transaction}`);
       await transactionRepo.insertTransaction(transaction);
   }

   await readRandomly();
}

module.exports = {
  successHandler,
};

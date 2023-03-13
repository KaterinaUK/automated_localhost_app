### a simple ethereum indexer

This project contains the codebase for a simple ethereum indexer. We have also implemented a rest api, that will let us query a transaction based on the transaction hash.

#### request and response
```curl

curl --location --request POST 'localhost:5002/v1/transaction' \
--header 'Content-Type: application/json' \
--data-raw '{
    "hash" : "0xbe286d0528d0ee55c307fae43b9cd0552d329ba6f9e6b71178402a6efe620dfb"
}'

{
    "id": 85,
    "hash": "0xbe286d0528d0ee55c307fae43b9cd0552d329ba6f9e6b71178402a6efe620dfb",
    "type": "ERC20_TRANSFER",
    "amount": 2.4029381585039946,
    "token": "WETH",
    "from_address": "0xCab82C42B5195624671b92b1b0D91adf171f103c",
    "to_address": "0xFb3cEe83A0a97C8d7999eBD59496A4fde4f40033",
    "created_at": 1676992575856,
    "updated_at": 1676992575856
}

```
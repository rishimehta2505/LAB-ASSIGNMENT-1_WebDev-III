# Smart Utility Toolkit

A simple Node.js lab project using only core modules (process, http, fs, crypto)
— no external packages, no Express.

## Files

- `calculator.js` — CLI calculator using `process.argv`
- `modules/isEven.js` — custom module (checks even/odd)
- `modules/logger.js` — custom logger module (adds timestamps)
- `app.js` — reuses `isEven` and `logger` modules
- `server.js` — basic HTTP server with `/`, `/about`, `/contact` routes
- `fileManager.js` — Create/Read/Update/Delete a file using `fs`
- `dice.js` — random dice roller (1–6) using `crypto`

## How to run each part

```bash
# 1. Calculator
node calculator.js add 10 5
node calculator.js sub 10 5
node calculator.js mul 10 5
node calculator.js div 10 5

# 2. Custom module demo (isEven + logger)
node app.js

# 3. HTTP server (visit http://localhost:3000/, /about, /contact in browser)
node server.js

# 4. File manager (create -> read -> update -> read -> delete test.txt)
node fileManager.js

# 5. Dice roller
node dice.js
```

No `npm install` needed — everything uses Node's built-in modules.

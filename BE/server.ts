import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
// Initialize the express engine
const app: express.Application = express();
 
// Take a port 3000 for running server.
const port = process.env.PORT || 3000;
 
// Handling Request
app.get('/', (_req, _res) => {
    _res.send("TypeScript With Express");
});
 
// Server setup
app.listen(port, () => {
    console.log(`Engine running on http://localhost:${port}/`);
});
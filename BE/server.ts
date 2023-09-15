import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
// Initialize the express engine
const app: express.Application = express();
 
// Take a port 3000 for running server.
const port = process.env.PORT || 5000;
 
// Handling Request
app.get('/', (_req, _res) => {
    _res.send("Express is the server!");
});

//routers
app.use('/api/v1/auth', require('./routes/authRoute.ts'));
app.use('/api/v1/user', require('./routes/userRoute.ts'));
app.use('/api/v1/sitter', require('./routes/sitterRoute.ts'));
app.use('/api/v1/parent', require('./routes/parentRoute.ts'));
app.use('/api/v1/booking', require('./routes/bookingRoute.ts'));
app.use('/api/v1/poposal', require('./routes/proposalRoute.ts'));
app.use('/api/v1/feedback', require('./routes/feedbackRoute.ts'));
app.use('/api/v1/conract', require('./routes/contractRoute.ts'));

 
// Server setup
app.listen(port, () => {
    console.log(`Engine running on http://localhost:${port}/`);
});
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();
// Initialize the express engine
const app: express.Application = express();

// Take a port 3000 for running server.
const port = process.env.PORT || 5000;

const D = new Date();
const ts = `${D.getHours()}:${D.getMinutes()}:${D.getSeconds()}`;

app.options('*', cors());

app.use((req, res, next) => {
  console.log(` - ${ts} - ${req.method}:${req.url}`);
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Handling Request
app.get('/', (_req, _res) => {
  _res.send('Express is the server!');
});

//routers
app.use('/api/v1/auth', require('./routes/authRoute.ts').default);
app.use('/api/v1/user', require('./routes/userRoute.ts').default);
app.use('/api/v1/sitter', require('./routes/sitterRoute.ts').default);
app.use('/api/v1/parent', require('./routes/parentRoute.ts').default);
app.use('/api/v1/booking', require('./routes/bookingRoute.ts').default);
app.use('/api/v1/poposal', require('./routes/proposalRoute.ts').default);
app.use('/api/v1/feedback', require('./routes/feedbackRoute.ts').default);
app.use('/api/v1/conract', require('./routes/contractRoute.ts').default);

// Server setup
app.listen(port, () => {
  console.log(`Engine running on http://localhost:${port}/`);
});

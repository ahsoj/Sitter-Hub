import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import http from 'http';
import { Server } from 'socket.io';

dotenv.config();
// Initialize the express engine
const app: express.Application = express();
const server = http.createServer(app);
const io = new Server(server);

// Take a port 5000 for running server.
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

// websocket connection
io.on('connection', (socket) => {
  socket.emit('hello', 'World!');

  socket.on('howdy', (arg) => {
    console.log(arg);
  });
});

// Server setup
server.listen(port, () => {
  console.log(`Engine running on http://localhost:${port}/`);
});

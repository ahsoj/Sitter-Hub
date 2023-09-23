import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import http from 'http';

dotenv.config();
// Initialize the express engine

// socet connection imports
import { Server } from 'socket.io';
import { createAdapter } from '@socket.io/redis-adapter';
import { createClient } from 'redis';
import { connectionHandler } from './socket/connectionHandlers';

const app: express.Application = express();

const server = http.createServer(app);

// Take a port 5000 for running server.
const port = process.env.PORT || 5000;

const D = new Date();
const ts = `${D.getHours()}:${D.getMinutes()}:${D.getSeconds()}`;

app.options('*', cors());

app.use((req, res, next) => {
  console.log(` - ${ts} - ${req.method}:${req.url}`);
  next();
});

const io = new Server(server, {
  cors: {
    origin: '*',
    // allowedHeaders: ['chat-interview-header'],
  },
});

// const pubClient = createClient({
//   url: 'redis-16690.c289.us-west-1-2.ec2.cloud.redislabs.com:16690',
// });
// const subClient = pubClient.duplicate();

// Promise.all([pubClient.connect(), subClient.connect()]).then(() => {
//   io.adapter(createAdapter(pubClient, subClient));
//   io.listen(5005);
// });

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
app.use('/api/v1/chat/', require('./routes/conversationRoute').default);

// establishing socket connection
io.on('connection', connectionHandler);
// Server setup
server.listen(port, () => {
  console.log(`Engine running on http://localhost:${port}/`);
});

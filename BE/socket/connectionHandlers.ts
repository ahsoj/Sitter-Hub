import { Socket } from 'socket.io';
import { prisma } from '../utils/prisma';

export const connectionHandler = (socket: Socket) => {
  console.log('Connection Waiting ...');
  socket.emit('welcome', 'Welcome to Sitter-Hub.');

  socket.on('establish:connection', async (conversationId: string) => {
    console.log(socket.id);
    let _conversationId = conversationId;
    const conversation = await prisma.conversation.findUnique({
      where: { id: _conversationId },
    });
    if (conversation) {
      socket.emit('recent:connection', conversation);
    } else {
      const new_conversation = await prisma.conversation.create({
        data: {
          topic: socket.id,
        },
      });
      _conversationId = new_conversation.id;
      socket.emit('new:connection', _conversationId);
    }
    socket.join(socket.id);
    socket.broadcast.to(socket.id).emit('visibility:type', 'online');

    socket.on('on:conversation', (data) => {
      console.log(data);
      const message = {
        sender: data.sender,
        reciever: data.reciever,
        conversationId: data.conversationId,
        content: data.message,
      };
      socket.broadcast.to(data.toid).emit('on:send', data.message);
    });
  });
};

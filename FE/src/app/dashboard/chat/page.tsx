'use client';
import { io } from 'socket.io-client';
import ChatLayout from './(chatComponent)/chatLayout';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import axios from '@/lib/axios';

interface ConversationProps {
  id: string;
  createdAt: string;
  topic: string;
}

const ChatPage = () => {
  const [visibility, setVisibility] = useState<boolean>(false);
  const socket = io(`ws://localhost:5000`);
  useEffect(() => {
    socket.on('welcome', (msg) => {
      console.log(msg);
    });
    const chat_session_id =
      Cookies.get('conversationId') || '650eabf2f6b9a3488dfb9e26';
    socket.emit('establish:connection', chat_session_id);
    socket.on('new:connection', (conversationId) => {
      // console.log(conversationId);
      Cookies.set('conversationId', conversationId);
    });
    socket.on('recent:connection', (conversation: ConversationProps) => {
      // console.log(conversation);
      axios
        .get(`/chat/recent_chat_peoples/${conversation.id}`)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    });
  }, []);

  socket.on('visibility:type', (type: string) =>
    setVisibility(type === 'online')
  );

  socket.on('on:send', (data) => {
    console.log(data);
  });

  const socketId = 'pJo-tEuBEX7kRHZTAAAf';

  const sendMessage = (message: string) => {
    socket.emit('on:conversation', { toid: socketId, message });
  };

  return (
    <div className="flex transition-all duration-200 ease-in-out items-start">
      <ChatLayout visibility={visibility} sendMessage={sendMessage} />
    </div>
  );
};

export default ChatPage;

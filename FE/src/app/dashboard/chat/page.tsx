import { io } from 'socket.io-client';
import { RiUserSearchLine, RiMenuLine } from 'react-icons/ri';
import { twmesh } from '@/utils/twmesh';
import ChatLayout from './(chatComponent)/chatLayout';

const ChatPage = () => {
  // const socket = io(`ws://localhost:5000`);

  // socket.on('hello', (arg) => {
  //   console.log(arg);
  // });
  // socket.emit('howdy', 'Stranger');
  return (
    <div className="flex transition-all duration-200 ease-in-out items-start">
      <ChatLayout />
    </div>
  );
};

export default ChatPage;

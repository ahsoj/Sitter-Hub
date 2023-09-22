'use client';
import { useState } from 'react';
import ChatListBar from './sidebar';
import { BiSearchAlt } from 'react-icons/bi';
import { RiUserSearchLine } from 'react-icons/ri';

const ChatLayout = () => {
  const [chatlistVisibility, setChatListVisibility] = useState<boolean>(false);

  const handleChatlistVisibility = () => {
    setChatListVisibility(!chatlistVisibility);
  };

  return (
    <>
      <ChatListBar
        chatlistVisibilityHandler={handleChatlistVisibility}
        chatlistVisibility={chatlistVisibility}
      />
      <div className="grow bg-white">
        <div className="p-3">
          <div className="flex items-center border rounded-3xl px-3 gap-x-2 grow">
            <button
              type="button"
              className="inline-flex sm:hidden justify-center items-center font-semibold transition-all"
            >
              <RiUserSearchLine
                onClick={handleChatlistVisibility}
                fontSize={25}
              />
            </button>
            <input
              type="text"
              className="p-2 block w-full grow outline-none text-base focus:border-blue-500 focus:ring-blue-500"
              placeholder="Input text"
            />
            <button
              type="button"
              className="inline-flex justify-center items-center font-semibold transition-all"
            >
              <BiSearchAlt fontSize={25} />
            </button>
          </div>
        </div>
        <div className="">03</div>
      </div>
    </>
  );
};

export default ChatLayout;

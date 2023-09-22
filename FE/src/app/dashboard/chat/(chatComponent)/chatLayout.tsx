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
        <div className="h-full min-h-screen"></div>
        <div className="px-2 sticky bottom-0">
          <div className="relative border border-slate-300 rounded-lg">
            <textarea
              className="p-4 pb-12 block w-full outline-none border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Ask me anything..."
            ></textarea>

            <div className="absolute bottom-px inset-x-px p-2 rounded-b-md bg-white">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <button
                    type="button"
                    className="inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-blue-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  >
                    <svg
                      className="h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                      <path d="M11.354 4.646a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708l6-6a.5.5 0 0 1 .708 0z" />
                    </svg>
                  </button>

                  <button
                    type="button"
                    className="inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-blue-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  >
                    <svg
                      className="h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z" />
                    </svg>
                  </button>
                </div>

                <div className="flex items-center gap-x-1">
                  <button
                    type="button"
                    className="inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-blue-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  >
                    <svg
                      className="h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                      <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0v5zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z" />
                    </svg>
                  </button>

                  <button
                    type="button"
                    className="inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  >
                    <svg
                      className="h-3.5 w-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatLayout;

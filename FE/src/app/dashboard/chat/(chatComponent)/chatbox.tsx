'use client';
import { twmesh } from '@/utils/twmesh';
import React, { useRef } from 'react';
import { RxAvatar } from 'react-icons/rx';

type ChatBoxProps = {
  from: string;
  message: string;
}[];

const ChatBox: React.FC<{ conversation: ChatBoxProps; isTyping: boolean }> = ({
  conversation,
  isTyping,
}) => {
  const scrollBottomRef = useRef<HTMLDivElement | null>(null);
  if (scrollBottomRef.current) {
    scrollBottomRef.current.scrollTop = scrollBottomRef.current.scrollHeight;
  }
  return (
    <div
      ref={scrollBottomRef}
      className="max-h-[75vh] overflow-y-scroll kjshkjtrfghjbsdfsd"
    >
      <ul className="mt-16 space-y-5">
        {conversation.map((data, idx) => (
          <li
            key={idx}
            className={twmesh(
              'flex gap-x-2 flex-row sm:gap-x-4 p-2',
              data.from === 'parent' && 'flex-row-reverse'
            )}
          >
            <div
              className={twmesh(
                'flex-shrink-0 w-[2.375rem] flex items-center justify-center h-[2.375rem] rounded-full',
                data.from === 'parent' ? 'bg-blue-500' : 'bg-red-500'
              )}
            >
              <RxAvatar fontSize={30} className="text-white fill-white" />
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4 space-y-3">
              <p className="mb-1.5 text-sm text-gray-800">{data.message}</p>
            </div>
          </li>
        ))}
        {isTyping && (
          <li className="flex gap-x-2 flex-row-reverse sm:gap-x-4 p-2">
            <svg
              className="flex-shrink-0 w-[2.375rem] h-[2.375rem] rounded-full"
              width="38"
              height="38"
              viewBox="0 0 38 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="38" height="38" rx="6" fill="#2563EB" />
              <path
                d="M10 28V18.64C10 13.8683 14.0294 10 19 10C23.9706 10 28 13.8683 28 18.64C28 23.4117 23.9706 27.28 19 27.28H18.25"
                stroke="white"
                stroke-width="1.5"
              />
              <path
                d="M13 28V18.7552C13 15.5104 15.6863 12.88 19 12.88C22.3137 12.88 25 15.5104 25 18.7552C25 22 22.3137 24.6304 19 24.6304H18.25"
                stroke="white"
                stroke-width="1.5"
              />
              <ellipse cx="19" cy="18.6554" rx="3.75" ry="3.6" fill="white" />
            </svg>

            <div className="bg-slate-200 border border-gray-200 rounded-lg p-2 space-y-3">
              <p className="text-sm text-gray-800">...typing</p>
            </div>
          </li>
        )}
      </ul>
    </div>
  );
};

export default ChatBox;

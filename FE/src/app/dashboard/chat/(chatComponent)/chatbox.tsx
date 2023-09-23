import { twmesh } from '@/utils/twmesh';
import React from 'react';

type ChatBoxProps = {
  from: string;
  message: string;
}[];

const ChatBox: React.FC<{ conversation: ChatBoxProps }> = ({
  conversation,
}) => {
  return (
    <div className="max-h-[80vh] overflow-y-scroll kjshkjtrfghjbsdfsd">
      <ul className="mt-16 space-y-5">
        {conversation.map((data, idx) => (
          <li
            key={idx}
            className={twmesh(
              'flex gap-x-2 flex-row sm:gap-x-4 p-2',
              data.from === 'parent' && 'flex-row-reverse'
            )}
          >
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

            <div className="bg-white border border-gray-200 rounded-lg p-4 space-y-3">
              <p className="mb-1.5 text-sm text-gray-800">{data.message}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatBox;

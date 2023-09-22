'use client';
import { twmesh } from '@/utils/twmesh';
import React, { useState } from 'react';
import { RiUserSearchLine } from 'react-icons/ri';
import { GrClose } from 'react-icons/gr';

interface ChatlistBarProps {
  chatlistVisibilityHandler: () => void;
  chatlistVisibility: boolean;
}

const ChatListBar = ({
  chatlistVisibilityHandler,
  chatlistVisibility,
}: ChatlistBarProps) => {
  return (
    <div
      className={twmesh(
        'w-full fixed min-h-screen sm:block sm:relative transition-all duration-200 ease-in-out bg-black/[0.01] sm:bg-transparent top-[3.65rem] sm:top-auto z-20 sm:z-auto left-0 sm:max-w-xs',
        chatlistVisibility && 'hidden'
      )}
    >
      <div className="flex w-full max-w-xs min-h-screen shadow-md sm:shadow-none bg-white">
        <div className="w-full p-2">
          <div className="flex flex-col justify-center relative isolate text-center">
            <button
              onClick={chatlistVisibilityHandler}
              className="inline-flex sm:hidden absolute z-20 right-2 top-2"
            >
              <GrClose />
            </button>
            <span className="w-32 h-32 mx-auto flex items-center justify-center rounded-full bg-gray-200">
              A
            </span>
            <h3 className="text-2xl">Joshua</h3>
          </div>
          <div className="cs-divider my-4 opacity-40" />
          <div className="space-y-4">
            {[1, 2, 3, 4].map((_, idx) => (
              <div key={idx} className="flex gap-x-2  items-center">
                <div className="relative">
                  <span className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200">
                    K
                  </span>
                  <span className="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white rounded-full"></span>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <h6 className="text-sm text-gray-700">Kirubael</h6>
                    <span className="text-[10px]">2/04/23</span>
                  </div>
                  <span className="text-xs text-slate-500">
                    Lorem ipsum dolor sit amet morgan los an ...
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatListBar;

import Link from 'next/link';
import React from 'react';
import { BiMessageRoundedDetail } from 'react-icons/bi';
import { RiStarSLine, RiStarSFill, RiStarHalfSFill } from 'react-icons/ri';

const Ratings: React.FC<{ limit: number }> = ({ limit }) => {
  return (
    <div className="flex items-center gap-0.5 text-yellow-500 text-base">
      <RiStarSFill />
      <RiStarSFill />
      <RiStarSFill />
      <RiStarHalfSFill />
      <RiStarSLine />
    </div>
  );
};

const Talent = () => {
  return (
    <div className="mx-auto max-w-7xl w-full">
      <div className="flex gap-x-6 gap-y-4 justify-center px-3 flex-wrap">
        {[1, 2, 3, 4, 5, 6].map((_, idx) => (
          <div
            className="group/seekers shadow-sm flex border p-1 max-w-sm border-gray-300 bg-white rounded-md"
            key={idx}
          >
            <img
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
              alt="Image Description"
              className="object-cover rounded-full w-32 h-32 aspect-square"
            />
            <div className="p-2">
              <div className="flex items-center justify-between pb-1">
                <Link
                  href="/"
                  className="group-hover/seekers:text-brand hover:underline text-lg font-bold text-gray-700"
                >
                  Joshua
                </Link>
                <span>98%</span>
              </div>
              <p className="text-gray-500 text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Debitis, sunt!
              </p>
              <div className="my-1 flex justify-between items-center">
                <Ratings limit={4} />
                <div className="peer/messageme relative">
                  <button
                    type="button"
                    className="peer/messageme inline-flex relative justify-center items-center"
                  >
                    <BiMessageRoundedDetail
                      fontSize={25}
                      className="text-brand"
                    />
                  </button>
                  <span
                    className="peer-hover/messageme:opacity-100 peer-hover/messageme:visible opacity-0 transition-opacity inline-block isolate absolute invisible z-20 py-1 px-2 right-full mr-3 -mt-4 before:absolute before:bg-gray-600 before:h-4 before:w-4 before:bottom-4 before:-right-2 before:-z-50 before:rotate-45 whitespace-nowrap bg-gray-600 text-sm font-medium text-white rounded-md shadow-sm"
                    role="tooltip"
                  >
                    Start messaging <br />
                    with Joshua
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Talent;

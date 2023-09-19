import { twmesh } from '@/utils/twmesh';
import React from 'react';
import { GrClose } from 'react-icons/gr';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';

type JonViewModalProps = {
  jobViewOpened: boolean;
  handleJobViewOpened: () => void;
};

const JobViewModal = ({
  jobViewOpened,
  handleJobViewOpened,
}: JonViewModalProps) => {
  return (
    <div>
      <div
        id="full-screen-modal-below-sm"
        className={twmesh(
          'w-full h-full hidden fixed top-0 left-0 bg-brand/[0.05] z-[60] overflow-x-hidden overflow-y-auto',
          jobViewOpened && 'block'
        )}
      >
        <div
          className={twmesh(
            'mt-10 opacity-0 transition-all max-w-full w-full sm:mt-0 sm:max-w-lg sm:mx-auto',
            jobViewOpened && 'mt-0 opacity-100 duration-500 sm:mt-10'
          )}
        >
          <div className="flex flex-col bg-white sm:border sm:rounded-xl sm:shadow-sm">
            <div className="flex justify-between items-center py-3 px-4 border-b">
              <h4 className="font-bold text-gray-800">Sitter-Hub - Jobs</h4>
              <button
                type="button"
                onClick={handleJobViewOpened}
                className="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm"
                data-hs-overlay="#hs-full-screen-modal-below-sm"
              >
                <span className="sr-only">Close</span>
                <GrClose fontSize={20} />
              </button>
            </div>
            <div className="p-4 overflow-y-auto">
              <p className="mt-1 text-gray-800">
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
              </p>
            </div>
            <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t">
              <button
                type="button"
                className="py-2 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-brand font-semibold text-brand hover:bg-brand/[0.1] outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 transition-all text-sm"
                data-hs-overlay="#hs-full-screen-modal-below-sm"
              >
                <MdFavoriteBorder fontSize={20} />
                Save Job
              </button>
              <a
                className="py-2 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-brand text-white hover:bg-brand/[0.9] outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 transition-all text-sm"
                href="#"
              >
                Apply now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobViewModal;

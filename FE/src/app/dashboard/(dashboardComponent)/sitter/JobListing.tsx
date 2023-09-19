'use client';
import Link from 'next/link';
import { twmesh } from '@/utils/twmesh';
import JobViewModal from './JobViewModal';
import { useState } from 'react';
import { VscVerifiedFilled } from 'react-icons/vsc';

type JobListingProps = {
  Typography: string;
};

const JobListing = ({ Typography }: JobListingProps) => {
  const [jobViewOpened, setJobViewOpened] = useState<boolean>(false);
  const handleJobViewOpened = () => setJobViewOpened(!jobViewOpened);
  return (
    <>
      <JobViewModal
        jobViewOpened={jobViewOpened}
        handleJobViewOpened={handleJobViewOpened}
      />
      <div className="border p-4 space-y-2 group/jobpost hover:bg-brand/[0.1] rounded-md border-slate-200">
        <span className="text-xs text-sky-500">Full time</span>
        <br />
        <button onClick={handleJobViewOpened}>
          <h1 className="text-gray-600 hover:underline group-hover/jobpost:text-indigo-500">
            Make My Website Responsive Device Compatible
          </h1>
        </button>
        <p className="text-gray-500 text-sm">
          {Typography}
          <button
            className={twmesh(
              'text-xs text-brand hidden ml-2',
              Typography.length >= 200 && 'flex'
            )}
          >
            ...see more
          </button>
        </p>
        <span className="text-sm flex items-center gap-1 text-gray-600">
          <VscVerifiedFilled className="text-brand text-lg" /> Verified . posted
          3 days ago
        </span>
        <div className="flex items-center flex-wrap gap-x-4 gap-y-1">
          <div className="whitespace-nowrap">
            <span className="text-gray-400 text-xs">Location:</span>{' '}
            <span className="text-xs text-gray-600">Addis abeba</span>
          </div>
          <div className="whitespace-nowrap">
            <span className="text-gray-400 text-[10px]">Industry:</span>{' '}
            <span className="text-xs text-gray-600">Digital Marketplace</span>
          </div>
          <div className="whitespace-nowrap">
            <span className="text-gray-400 text-[10px]">Salary:</span>{' '}
            <span className="text-xs text-gray-600">$64/hour</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobListing;

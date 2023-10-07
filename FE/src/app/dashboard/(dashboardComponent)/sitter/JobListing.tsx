'use client';
import Link from 'next/link';
import { twmesh } from '@/utils/twmesh';
import JobViewModal from './JobViewModal';
import { useState } from 'react';
import { VscVerifiedFilled } from 'react-icons/vsc';
import { JobBooks } from '@/types/types';
import { ISOConvert } from '@/utils/dateConvert';
import { getLocationType } from 'geolocation-utils';

type JobListingProps = {
  Typography: string;
  jobListings: JobBooks;
};

const JobListing = ({ Typography, jobListings }: JobListingProps) => {
  const [jobViewOpened, setJobViewOpened] = useState<boolean>(false);
  const handleJobViewOpened = () => setJobViewOpened(!jobViewOpened);
  return (
    <>
      <JobViewModal
        jobListings={jobListings}
        jobViewOpened={jobViewOpened}
        handleJobViewOpened={handleJobViewOpened}
      />
      <div className="border p-4 space-y-2 group/jobpost hover:bg-brand/[0.1] rounded-md border-slate-200">
        <span className="text-xs font-bold text-sky-500">
          {jobListings.experiance}
        </span>
        <br />
        <button onClick={handleJobViewOpened}>
          <h1 className="text-gray-600 hover:underline group-hover/jobpost:text-indigo-500">
            {jobListings.title}
          </h1>
        </button>
        <h4 className="text-sm text-gray-600 font-medium">
          {`Number of childs: ${jobListings.numberChiled}`}
        </h4>
        <p className="text-gray-500 text-sm">
          {jobListings.description}
          {/* <button
            className={twmesh(
              'text-xs text-brand hidden ml-2',
              jobListings.description.length >= 200 && 'flex'
            )}
          >
            ...see more
          </button> */}
        </p>
        <span className="text-sm flex items-center gap-1 text-gray-600">
          <VscVerifiedFilled className="text-brand text-lg" /> Verified . posted
          <span className="px-1 text-xs text-slate-600">
            {ISOConvert(jobListings.createdAt)}
          </span>
        </span>
        <div className="flex items-center flex-wrap gap-x-4 gap-y-1">
          <div className="whitespace-nowrap">
            <span className="text-gray-400 text-xs">Location:</span>{' '}
            <span className="text-xs text-gray-600">
              {jobListings.location}
            </span>
          </div>
          <div className="whitespace-nowrap">
            <span className="text-gray-400 text-xs">Time Long:</span>{' '}
            <span className="text-xs text-gray-600">
              {jobListings.timeLong}
            </span>
          </div>
          <div className="whitespace-nowrap">
            <span className="text-gray-400 text-xs">Salary:</span>{' '}
            <span className="text-xs text-gray-600">$99/day</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobListing;

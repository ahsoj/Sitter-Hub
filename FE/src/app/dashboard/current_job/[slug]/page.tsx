import axios from '@/lib/axios';
import React from 'react';
import TableComponent from '../(table)/tableComponent';
import { CurrentJobPostType } from '@/types/types';

async function myCurrentJobs({ slug }: { slug: string }) {
  const res = await fetch(
    `http://localhost:5000/api/v1/booking/current_book/${slug}`
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

const CurrentOpen = async ({ params }: { params: { slug: string } }) => {
  const current_job = (await myCurrentJobs(params)) as CurrentJobPostType[];

  return (
    <div className="mx-auto justify-center max-w-[70rem]">
      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="overflow-hidden">
              <TableComponent current_job={current_job} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentOpen;

'use client';
import axios from '@/lib/axios';
import { CurrentJobPostType } from '@/types/types';
import React from 'react';
import { useRouter } from 'next/navigation';

const TableComponent = ({
  current_job,
}: {
  current_job: CurrentJobPostType[];
}) => {
  const router = useRouter();
  const handleJobDeleting = async (id: string) => {
    await axios
      .delete(`/booking/delete_book/${id}`)
      .then((res) => {
        console.log(res.data);
        router.refresh();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  if (current_job.length < 1) {
    return (
      <div className="flex items-center justify-center">
        <h3 className="text-xl text-gray-600 font-medium">
          Pusblish a new post to see here
        </h3>
      </div>
    );
  }
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <caption className="py-2 pl-4 text-left text-sm text-gray-600">
        Opened Jobs ({current_job.length})
      </caption>
      <thead>
        <tr>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
          >
            Name
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
          >
            NO. Childs
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
          >
            Address
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase"
          >
            Action
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {current_job.map((table, idx) => (
          <tr key={idx}>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
              {`${table.title.slice(0, 25)}...`}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
              {table.numberChiled}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
              {table.location}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <button
                onClick={() => handleJobDeleting(table.id)}
                className="text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;

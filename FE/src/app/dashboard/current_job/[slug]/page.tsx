import React from 'react';

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
  const current_job = await myCurrentJobs(params);
  console.log(current_job);
  return <div>Currently Opened Jobs (2)</div>;
};

export default CurrentOpen;

import { JobBooks } from '@/types/types';
import JobListing from './JobListing';

const Typography =
  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis\
              unde in veniam, repellendus ipsam enim veritatis, quae magni\
              tempore culpa reiciendis. Culpa magni quasi dolorum praesentium\
              animi reprehenderit cumque rem!';

async function getJobs() {
  const res = await fetch('http://localhost:5000/api/v1/booking/books');
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

const Findjob = async () => {
  const bookings = (await getJobs()) as JobBooks[];
  return (
    <div className="relative">
      <div className="space-y-4 max-w-[50rem] bg-white p-4 rounded-md w-full mx-auto justify-center items-center">
        {bookings.map((booking, idx) => (
          <JobListing key={idx} Typography={Typography} jobListings={booking} />
        ))}
        {/* JobViewModal */}
      </div>
    </div>
  );
};
// ;
export default Findjob;

import JobListing from './JobListing';

const Typography =
  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis\
              unde in veniam, repellendus ipsam enim veritatis, quae magni\
              tempore culpa reiciendis. Culpa magni quasi dolorum praesentium\
              animi reprehenderit cumque rem!';

const Findjob = () => {
  return (
    <div className="relative">
      <div className="space-y-4 max-w-[50rem] bg-white p-4 rounded-md w-full mx-auto justify-center items-center">
        {[1, 2, 3, 4, 5].map((_, idx) => (
          <JobListing key={idx} Typography={Typography} />
        ))}
        JobViewModal
      </div>
    </div>
  );
};

export default Findjob;

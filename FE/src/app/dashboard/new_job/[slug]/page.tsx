import React from 'react';
import PublishForm from '../(formComponent)/publishForm';

const Createnew = async ({ params }: { params: { slug: string } }) => {
  return (
    <div className="justify-center flex max-w-[50rem] mx-auto">
      <div className="w-full px-3 my-24 grow">
        <h3>Post a new job</h3>
        <PublishForm id={params.slug} />
      </div>
    </div>
  );
};

export default Createnew;

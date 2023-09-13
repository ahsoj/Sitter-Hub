import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Sitter-Hub | How It Works',
  description: 'Pricing page',
};

const HowItWorks = () => {
  return (
    <>
      <div className="py-16 md:py-24 lg:py-32 w-full flex justify-center px-4 relative bg-black/[.7] wer56iojlkwe5iugsdfg">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl text-white font-semibold">
            How it works
          </h2>
          <p className="text-slate-300 text-lg">
            Sitter-hub is a public community platform connecting parents with
            babysitters
          </p>
        </div>
      </div>
      <div className="max-w-5xl mx-auto space-y-8 p-4">
        <div className="flex gap-4 flex-col md:flex-row">
          <div>
            <h3 className="text-xl text-gray-800 font-semibold py-3">
              Why use Sitter-hub ?
            </h3>
            <p className="text-lg text-slate-700 tracking-wide">
              Whether you are looking for a great babysitter or babysitting job,
              Sitter-hub makes it easy and transparent. You are in full control
              or your profile, prices, who you choose to work with, and how you
              interact with other members
            </p>
          </div>
          <div>
            <h3 className="text-xl text-gray-800 font-semibold py-3">
              We give you control
            </h3>
            <p className="text-lg text-slate-700 tracking-wide">
              read reviews and detailed profiles with trustworthy user
              verifications, Screen, interview and make your choice. Plan and
              pay appointments via the platform. Sitter-hub brings you peace of
              mind at every step, from finding a babysitter or babysitting job
              to planning appointments.
            </p>
          </div>
        </div>
        <div className="">
          <div className="cs-divider my-8" />
          <div className="text-center">
            <h2 className="text-gray-800 text-2xl font-semibold">
              Safety and transparency are our priorities
            </h2>
            <p className="text-slate-700 text-lg">
              Sitter-hub offers a transparent platform, so you can rest assured
              that your children are in good hands .
            </p>
          </div>
          <div className="flex items-center flex-wrap justify-between gap-8 mx-auto max-w-3xl py-8">
            <span className="text-gray-800 text-xl font-semibold">
              GovermentID/Passport
            </span>
            <span className="text-gray-800 text-xl font-semibold">
              Secure Payments
            </span>
            <span className="text-gray-800 text-xl font-semibold">
              Basic background check
            </span>
            <span className="text-gray-800 text-xl font-semibold">
              Affordable for families
            </span>
            <span className="text-gray-800 text-xl font-semibold">
              Reviews an References
            </span>
            <span className="text-gray-800 text-xl font-semibold">
              Secure Messaging
            </span>
          </div>
        </div>
        <div className="text-center">
          <div className="cs-divider my-8" />
          <div>
            <h2 className="text-xl text-gray-800 font-semibold">
              Your babysitter or babysitting job in 3 steps
            </h2>
          </div>
          <div>
            <ol className="flex items-center justify-center w-full">
              <li className="flex w-full items-center text-blue-600 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-2 after:inline-block">
                <span className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full lg:h-12 lg:w-12 shrink-0">
                  <svg
                    className="w-3.5 h-3.5 text-blue-600 lg:w-4 lg:h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                </span>
              </li>
              <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block">
                <span className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 shrink-0">
                  <svg
                    className="w-4 h-4 text-gray-500 lg:w-5 lg:h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 16"
                  >
                    <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z" />
                  </svg>
                </span>
              </li>
              <li className="flex items-center">
                <span className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 shrink-0">
                  <svg
                    className="w-4 h-4 text-gray-500 lg:w-5 lg:h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 20"
                  >
                    <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z" />
                  </svg>
                </span>
              </li>
            </ol>
          </div>
          <button className="bg-brand text-center px-4 py-2 my-6 rounded-lg text-white">
            Start for free
          </button>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;

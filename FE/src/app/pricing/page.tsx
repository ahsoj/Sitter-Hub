import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Sitter-Hub | Pricing',
  description: 'Pricing page',
};

const Pricing = () => {
  return (
    <>
      <div className="py-16 md:py-24 lg:py-32 w-full flex justify-center px-4 relative bg-black/[.7] wer56iojlkwe5iugsdfg">
        <h1 className="text-3xl lg:text-4xl font-bold text-white">
          Affordable for families, free for babysitters
        </h1>
      </div>
      <div className="max-w-3xl mx-auto space-y-8 px-4">
        {' '}
        <div>
          <h3 className="text-2xl tracking-wide text-gray-800 py-4">
            Pricing for families
          </h3>
          <p className="text-slate-700 text-lg">
            parents can create an account and start looking for a babysitter for
            free. To connect with childcare providers, parents need to subscribe
            to a premium account. The monthly subscription allows to send
            messges and requests. As parent, you upgrade when you&#39;re ready
            to go.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch gap-4 justify-around my-6">
            <div className="p-4 border border-slate-400 rounded-lg min-h-[20vh] grow">
              <div className="border-b pb-5">
                <h2 className="text-xl">Sitter-hub</h2>
                <span>Free</span>
              </div>
              <ul className="pl-4 text-slate-700 list-image-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxNCAxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjMzhiZGY4Ij48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMy42ODUuMTUzYS43NTIuNzUyIDAgMCAxIC4xNDMgMS4wNTJsLTggMTAuNWEuNzUuNzUgMCAwIDEtMS4xMjcuMDc1bC00LjUtNC41YS43NS43NSAwIDAgMSAxLjA2LTEuMDZsMy44OTQgMy44OTMgNy40OC05LjgxN2EuNzUuNzUgMCAwIDEgMS4wNS0uMTQzWiIgLz48L3N2Zz4=')] ml-4 space-y-3 py-4">
                <li>Create a Profile.</li>
                <li>Read full profiles.</li>
                <li>Updates on new babysitters in your area</li>
                <li>
                  <del className="text-slate-500">
                    Respond to interested babysitters
                  </del>
                </li>
                <li>
                  <del className="text-slate-500">
                    Contact babysitters and/or nannies
                  </del>
                </li>
                <li>
                  <del className="text-slate-500">
                    Book and Pay though Sitter-hub.
                  </del>
                </li>
                <li>
                  <del className="text-slate-500">
                    Download payment receipts
                  </del>
                </li>
              </ul>
              <button className="bg-brand py-2 px-4 text-white">
                start free
              </button>
            </div>
            <div className="p-4 border border-slate-400 rounded-lg min-h-[20vh] grow">
              <div className="border-b">
                <h2 className="text-xl">
                  Sitter-hub{' '}
                  <sup className="relative before:block before:absolute before:-inset-1 py-1 before:-skew-y-3 ml-0.5 text-white before:bg-brand before:-z-10 inline-block">
                    Premium
                  </sup>
                </h2>
                <span>only $9.99 per/month</span>
                <br />
                <span>cancel anytime.</span>
              </div>
              <ul className="pl-4 text-slate-700 list-image-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxNCAxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjMzhiZGY4Ij48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMy42ODUuMTUzYS43NTIuNzUyIDAgMCAxIC4xNDMgMS4wNTJsLTggMTAuNWEuNzUuNzUgMCAwIDEtMS4xMjcuMDc1bC00LjUtNC41YS43NS43NSAwIDAgMSAxLjA2LTEuMDZsMy44OTQgMy44OTMgNy40OC05LjgxN2EuNzUuNzUgMCAwIDEgMS4wNS0uMTQzWiIgLz48L3N2Zz4=')]  ml-4 space-y-3 py-4">
                <li>Create a Profile.</li>
                <li>Read full profiles.</li>
                <li>Updates on new babysitters in your area</li>
                <li>Respond to interested babysitters</li>
                <li>Contact babysitters and/or nannies</li>
                <li>Book and Pay though Sitter-hub.</li>
                <li>Download payment receipts</li>
              </ul>
              <button className="bg-brand py-2 px-4 text-white">
                start premium
              </button>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-2xl tracking-wide text-gray-800 py-4">
            Free for babysitters
          </h3>
          <p className="text-slate-700 text-lg">
            babysitters can create an account, search for babyssitting jobs, and
            contact parents completely free of charge. if yout want to enjoy
            extra security we recommend planning yout bookings and recieving
            payments through Sitter-hub. we believe it&#39;s important that
            babyistters recieve 100% of the money they&#39;re earned. That&#39;s
            why no fee deducated from a babysitter&#39;s pay when using
            bookings.
          </p>
        </div>
        <div>
          <h3 className="text-2xl tracking-wide text-gray-800 py-4">
            Hourly rates for babysitting
          </h3>
          <p className="text-slate-700 text-lg">
            Parents and childcare providers indicate their expected hourly rated
            to other community members via their profile. However, this is not a
            fixed rate and you are always able to negotiate.
          </p>
          <ul className="text-slate-700 text-lg space-y-1 p-2 list-disc ml-5 marker:text-pink-600">
            <li>Avarage rate that babysitters ask: $14.99</li>
            <li>Avarage rate that nannies ask: $17.99</li>
            <li>Avarage rate that families offer: $16.99</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Pricing;

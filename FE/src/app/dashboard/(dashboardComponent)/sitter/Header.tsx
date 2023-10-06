'use client';
import React from 'react';
import { RiSearchLine, RiNotification3Line, RiMailLine } from 'react-icons/ri';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSession, getSession } from 'next-auth/react';
import { VscSignOut } from 'react-icons/vsc';
import { CgProfile } from 'react-icons/cg';
import { LuSettings } from 'react-icons/lu';
import { twmesh } from '@/utils/twmesh';
import { AccessJwt } from '@/types/types';

const SittersHeader = ({ userInfo }: { userInfo: AccessJwt }) => {
  const { data: session, status } = useSession();
  // console.log(session, status);
  const current_path = usePathname();
  console.log(current_path);
  return (
    <>
      <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white border-b text-sm py-2.5 sm:py-4">
        <nav
          className="max-w-7xl flex basis-full items-center w-full mx-auto px-4 sm:px-6 lg:px-8"
          aria-label="Global"
        >
          <div className="mr-5 md:mr-8">
            <a
              className="flex-none text-xl font-semibold "
              href="/dashboard"
              title="Sitter-hub"
              aria-label="Brand"
            >
              <Image
                alt=""
                src="/logo.png"
                className="object-contain"
                width={40}
                height={40}
              />
            </a>
          </div>
          <div className="hidden gap-3 px-2 sm:flex items-center">
            {[
              { lable: 'Find Job', path: '/dashboard' },
              { lable: 'My Jobs', path: '/my_jobs' },
              { lable: 'Saved Jobs', path: '/saved_jobs' },
            ].map((label, idx) => (
              <Link
                href={idx !== 0 ? `/dashboard${label.path}` : label.path}
                className={twmesh(
                  'whitespace-nowrap text-sm font-bold text-gray-600 hover:border-b-2 hover:border-brand',
                  current_path === label.path &&
                    'border-b-2 text-brand border-brand'
                )}
                key={idx}
              >
                {label.lable}
              </Link>
            ))}
          </div>

          <div className="w-full flex items-center justify-end ml-auto sm:justify-between sm:gap-x-3 sm:order-3">
            <div className="sm:hidden">
              <button
                type="button"
                className="inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-xs"
              >
                <RiSearchLine fontSize={20} />
              </button>
            </div>

            <div className="hidden grow sm:block">
              <label htmlFor="icon" className="sr-only">
                Search
              </label>
              <div className="relative border flex rounded-md">
                <input
                  type="text"
                  id="icon"
                  name="icon"
                  className="py-2 px-4 border-none outline-none block w-full border-gray-200 shadow-sm rounded-md text-base focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Search"
                />
                <div className="bg-brand text-white py-0.5 inset-y-0 flex items-center pointer-events-none px-4">
                  <RiSearchLine fontSize={20} />
                </div>
              </div>
            </div>

            <div className="flex flex-row items-center justify-end gap-4 px-4">
              <button
                type="button"
                className="inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-xs"
              >
                <RiNotification3Line fontSize={20} />
              </button>
              <button
                type="button"
                className="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-xs"
                data-hs-offcanvas="#hs-offcanvas-right"
              >
                <RiMailLine fontSize={20} />
              </button>

              <div
                className="relative inline-flex"
                data-hs-dropdown-placement="bottom-right"
              >
                <button
                  id="hs-dropdown-with-header"
                  type="button"
                  className="peer/profile inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-xs"
                >
                  <img
                    className="inline-block h-[2.375rem] w-[2.375rem] rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                    alt="Image Description"
                  />
                </button>

                <div
                  className="absolute right-0 mt-12 transition-[opacity,margin,display] duration peer-focus/profile:block peer-focus/profile:opacity-100 opacity-0 hidden min-w-[15rem] z-10 bg-white shadow-md rounded-lg p-2"
                  aria-labelledby="hs-dropdown-with-header"
                >
                  <div className="py-3 px-5 -m-2 bg-gray-100 rounded-t-lg">
                    <p className="text-sm text-gray-500">Signed in as</p>
                    <p className="text-sm font-medium text-gray-800">
                      {userInfo.email}
                    </p>
                  </div>
                  <div className="mt-2 py-2 first:pt-0 last:pb-0">
                    <a
                      className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                      href="/dashboard/profile"
                    >
                      <CgProfile fontSize={22} />
                      Profile
                    </a>
                    <a
                      className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                      href="/dashboard/settings"
                    >
                      <LuSettings fontSize={22} />
                      Settings
                    </a>
                    <button className="flex grow w-full items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-red-100 hover:text-red-500">
                      <VscSignOut fontSize={22} />
                      Signout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default SittersHeader;

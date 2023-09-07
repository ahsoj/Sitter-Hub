'use client';
import { twmesh } from '@/utils/twmesh';
import React, { useState } from 'react';
import Image from 'next/image';
import { HiMenuAlt3 } from 'react-icons/hi';
import { IconButton } from '@/components/Button';

const header_content = [
  {
    label: 'Babysiter wanted',
    path: '/b_wanted',
  },
  {
    label: 'Babysitting jobs',
    path: '/b_jobs',
  },
  {
    label: 'How it works',
    path: '/howitswork',
  },
  {
    label: 'Pricing',
    path: '/pricing',
  },
];

const HeaderContent = ({ mode }: { mode: 'desktop' | 'mobile' }) => {
  return header_content.map((head, idx) => (
    <a
      key={idx}
      className={twmesh(
        'flex items-center gap-x-3.5 py-2 px-3 rounded-md  font-semibold text-gray-500 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500',
        mode === 'desktop' ? 'text-base ' : 'text-lg'
      )}
      href={head.path}
    >
      {head.label}
    </a>
  ));
};

const Header = () => {
  const [canvasOpen, setOffCanvasOpen] = useState<boolean>(false);
  const canvasToggle = () => {
    setOffCanvasOpen(!canvasOpen);
  };

  return (
    <>
      <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white border-b border-gray-200 text-sm py-0">
        <nav
          className="relative max-w-[100rem] flex basis-full items-center w-full mx-auto px-4 sm:items-center justify-between"
          aria-label="Global"
        >
          <a
            className="flex-none text-xl font-semibold "
            href="/"
            title="Sitter-hub"
            aria-label="Brand"
          >
            <Image
              alt=""
              src="/logo.png"
              className="object-contain"
              width={55}
              height={55}
            />
          </a>
          <div
            id="navbar-offcanvas-example"
            className="flex items-center justify-end lg:justify-between transition-all duration-300 transform w-full z-[60] bg-white basis-full grow sm:transition-none sm:basis-auto"
            tabIndex={-1}
            data-hs-overlay-close-on-resize
          >
            <div className="hidden flex-row lg:flex items-center sm:pl-4">
              <HeaderContent mode="desktop" />
            </div>
            <div className="flex items-center gap-x-3">
              <a
                className="py-2 px-3 inline-flex justify-center items-center rounded-md font-semibold text-base text-gray-500 hover:text-blue-600 hover:bg-blue-50"
                href="#"
              >
                Log in
              </a>
              <a
                className="py-1.5 px-3 inline-flex justify-center items-center rounded-md border-2 border-blue-400 font-semibold text-blue-600 hover:bg-blue-50 hover:border-blue-100 outline-none transition-all text-base"
                href="#"
              >
                Get started
              </a>
              <div className="order-3">
                <IconButton
                  type="button"
                  onClick={canvasToggle}
                  className="lg:hidden p-1 inline-flex justify-center items-center rounded-md font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 transition-all text-lg"
                  data-hs-overlay="#navbar-secondary-content"
                  aria-controls="navbar-secondary-content"
                  aria-label="Toggle navigation"
                >
                  <HiMenuAlt3 fontSize={30} />
                </IconButton>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div
        id="navbar-secondary-content"
        className={twmesh(
          'hidden isolate -translate-x-full fixed top-0 left-0 transition-all duration-500 ease-in-out transform h-full w-full z-[60] bg-black/[.3] border-r',
          canvasOpen && 'translate-x-0 block'
        )}
        tabIndex={-1}
      >
        <div className="max-w-sm h-full bg-white">
          <div className="flex justify-between items-center px-4 border-b">
            <a
              className="flex-none text-xl font-semibold "
              href="/"
              title="Sitter-hub"
              aria-label="Brand"
            >
              <Image
                alt=""
                src="/logo.png"
                className="object-contain"
                width={55}
                height={55}
              />
            </a>
            <button
              type="button"
              onClick={canvasToggle}
              className="inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white text-sm"
              data-hs-overlay="#navbar-secondary-content"
            >
              <span className="sr-only">Close offcanvas</span>
              <svg
                className="w-3.5 h-3.5"
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
          <div className="p-4">
            <div className="flex flex-col text-start gap-x-6">
              <HeaderContent mode="mobile" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

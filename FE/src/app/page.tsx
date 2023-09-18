'use client';
import { TbArrowNarrowRight } from 'react-icons/tb';
import Form, { Field } from 'rc-field-form';
import Header from '@/container/header';

export default function Home() {
  const handleSearchQuery = () => {};
  return (
    <main>
      <Header />
      <div className="bg-slate-300 relative h-fit isolate after:absolute after:z-10 after:inset-x-0 after:bottom-0 after:-mb-3 after:content-[url(/hero_wave.svg)]">
        <header className="py-16 px-4 max-w-[90rem] w-full mx-auto flex flex-col lg:flex-row-reverse justify-center items-center text-start relative">
          {/* <div className="absolute top-0 right-0">
          <img
            src="/lottie/rainbow.gif"
            className="-rotate-[140deg] w-48"
            alt=""
          />
        </div> */}
          <div className="relative lg:w-[60rem] justify-center isolate after:absolute after:z-10 after:bg-gradient-to-t after:from-slate-300 after:inset-0">
            <img
              className="w-fit block object-contain"
              src="/hero_image_transparent.png"
              title="Sitter-hub"
              alt=""
            />
          </div>
          <div className="max-w-2xl lg:pl-6 flex flex-col gap-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl transition-all duration-75 ease-in-out font-black">
              <b className="text-white relative isolate inline-block before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-orange-600 before:-z-10">
                Childcare
              </b>{' '}
              For Your Busy Life.
            </h1>
            <p className="text-base text-zinc-600 text-justify">
              A babysitter app serves as a platform to connect parents in need
              of childcare services with qualified babysitters or caregivers.
            </p>
            <Form onFinish={handleSearchQuery}>
              <div className="w-full max-w-lg">
                <div className="flex items-center gap-2 flex-col bg-white sm:flex-row border-2 rounded-lg border-brand p-0.5 peer-focus/fin_active:border-indigo-500">
                  <div className="w-full">
                    <label htmlFor="hero-input" className="sr-only">
                      Search
                    </label>
                    <Field name="hero-input">
                      <input
                        type="text"
                        id="hero-input"
                        name="hero-input"
                        className="peer/fin_active outline-none py-2 px-4 block w-full"
                        placeholder="city or postal code"
                      />
                    </Field>
                  </div>
                  <button className="w-full sm:w-auto whitespace-nowrap inline-flex justify-center items-center gap-x-3 text-center bg-brand hover:bg-brand/[.8] border border-transparent text-white font-medium rounded-md outline-none transition py-2 px-4 ">
                    Find
                  </button>
                </div>
              </div>
            </Form>
            <a
              className="group/hero-anchor transition-all ease-in-out py-2 px-3 max-w-[10em] inline-flex justify-center items-center gap-2 rounded-md border border-transparent hover:bg-white hover:text-brand hover:border-brand font-semibold text-slate-50 bg-brand outline-none"
              href="/register"
            >
              Get started
              <TbArrowNarrowRight className="text-brand text-lg hidden group-hover/hero-anchor:flex transition-all group-hover/hero-anchor:transition-transform" />
            </a>
          </div>
        </header>
      </div>
    </main>
  );
}

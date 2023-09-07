import Header from '@/container/header';

export default function Home() {
  return (
    <>
      <header className="flex flex-col justify-center text-start w-[100vw] h-[100vh] relative isolate bg-[url('/hero_image_2.png')] bg-contain bg-no-repeat bg-right-top before:inset-0 before:absolute before:-z-10 before:md:bg-gradient-to-r before:bg-gradient-to-t before:from-white before:via-white">
        <div className="max-w-2xl px-4 flex flex-col gap-4">
          <h1 className="text-7xl font-black">Lorem ipsum dolor sit amet.</h1>
          <p className="text-base text-zinc-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            aperiam quod consequatur excepturi accusamus ex!
          </p>
          <form>
            <div className="w-full max-w-lg">
              <div className="flex items-center gap-2 flex-row border rounded-lg border-slate-400 p-0.5 peer-focus/fin_active:border-indigo-500">
                <div className="w-full">
                  <label htmlFor="hero-input" className="sr-only">
                    Search
                  </label>
                  <input
                    type="text"
                    id="hero-input"
                    name="hero-input"
                    className="peer/fin_active outline-none py-3 px-4 block w-full"
                    placeholder="city or postal code"
                  />
                </div>
                <button className="w-full sm:w-auto whitespace-nowrap inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-white font-medium rounded-md outline-none transition py-2.5 px-4 ">
                  Find
                </button>
              </div>
            </div>
          </form>
          <a
            className="py-2 px-3 max-w-[10em] inline-flex justify-center items-center gap-2 rounded-md border-2 border-gray-200 font-semibold text-blue-600 hover:bg-blue-50 hover:border-blue-100 outline-none"
            href="#"
          >
            Get started
          </a>
        </div>
      </header>
    </>
  );
}

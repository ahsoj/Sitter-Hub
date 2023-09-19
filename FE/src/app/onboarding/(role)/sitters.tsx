import { VscFilePdf } from 'react-icons/vsc';
import { LuImagePlus } from 'react-icons/lu';
const OnboardingSitters = () => {
  return (
    <div className="flex bg-white mx-auto max-w-[30rem] py-12 items-center justify-center px-4">
      <div className="space-y-4 w-full flex flex-col grow">
        <h2 className="text-2xl text-gray-700">...You almost done.</h2>
        <div className="cs-divider my-4" />
        <div className="flex flex-col gap-y-4">
          <div className="space-y-2">
            <span>Upload your profile</span>
            <div className="flex items-center w-full">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full max-w-[15em] h-full max-h-[12em] p-2 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <LuImagePlus fontSize={40} className="text-slate-400 mb-6" />
                  <p className="mb-2 text-sm text-gray-500">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>
          </div>
          <div className="space-y-2">
            <span>Upload your CV/RESUME</span>
            <div className="flex items-center w-full">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full max-w-[20em] h-full p-4 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <VscFilePdf fontSize={40} className="text-slate-400 mb-6" />
                  <p className="mb-2 text-sm text-gray-500">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500">only with PDF format</p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>
          </div>
          <div>
            <label
              htmlFor="city"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Birth Date
            </label>
            <input
              type="date"
              defaultValue="2023-10-19"
              id="birsthdate"
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="countries"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Gender
            </label>
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full py-2 px-4"
            >
              <option selected>Select your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="city"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              City
            </label>
            <input
              type="text"
              placeholder="your living city"
              id="city"
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button className="px-4 py-2 text-slate-50 bg-brand max-w-[8rem] rounded-lg">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingSitters;

import ConfirmPassword from '@/container/ConfirmPassword';
import axios from '@/lib/axios';

const SetPassword: React.FC<{ params: { slug: string } }> = async ({
  params,
}) => {
  if (!params.slug && window !== undefined) window.location.href = '/';
  let userId;
  try {
    const { data } = await axios
      .get(`http://127.0.0.1:5000/api/v1/auth/confirm_email/${params.slug}`)
      .then((res) => res);

    if (!data)
      return (
        <div className="flex items-center w-full h-100vh justify-center text-red-500 grow pt-32 text-3xl">
          <h1>Error Occured when trying to verify your email.</h1>
        </div>
      );
    return (
      <main className="w-full max-w-md mx-auto p-6">
        <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm relative">
          <div className="p-4 sm:p-7">
            <div className="text-start">
              <h1 className="block text-2xl font-unbounded font-bold text-gray-800 ">
                Setup Your Password
                <code className="text-3xl text-red-500">.</code>
              </h1>
            </div>
            <ConfirmPassword slug={data} />
          </div>
        </div>
      </main>
    );
  } catch (err) {
    console.log(err);
    return (
      <div className="flex items-center w-full h-100vh justify-center text-red-500 grow pt-32 text-3xl">
        <h1>Error Occured when trying to verify your email.</h1>
      </div>
    );
  }
};

export default SetPassword;

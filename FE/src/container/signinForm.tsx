'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { FormikProps, Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { signIn } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { twmesh } from '@/utils/twmesh';
import Authentication from '@/lib/Authentication';
import { enqueueSnackbar } from 'notistack';

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
  remember_me: Yup.boolean(),
});

interface FormValues {
  email: string;
  password: string;
  remember_me?: boolean;
}

const SigninForm = () => {
  const [formSubmitting, setFormSubmitting] = useState<boolean>(false);
  const initialValues: FormValues = {
    email: '',
    password: '',
    remember_me: false,
  };
  const router = useRouter();
  const callbackUrl = useSearchParams().get('callbackUrl');
  return (
    <div className="mt-7 bg-white border border-gray-200 relative rounded-xl shadow-sm ">
      <div
        className={twmesh(
          'absolute hidden inset-0 z-20 cursor-not-allowed justify-center items-center bg-white/[.5]',
          formSubmitting && 'flex'
        )}
      >
        <div
          className="inline-block h-12 w-12 animate-spin pointer-events-none rounded-full border-4 border-solid border-brand border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        ></div>
      </div>
      <div className="p-4 sm:p-7">
        <div className="text-start">
          <h1 className="block font-unbounded font-black text-2xl text-gray-800 ">
            Welcome back <code className="text-3xl text-red-500">.</code>
          </h1>
          <p className="mt-2 text-sm text-gray-600 ">
            Don&#39;t have an account yet?
            <Link
              className="text-brand decoration-2 ml-2 hover:underline font-medium"
              href="/register"
            >
              Sign up here
            </Link>
          </p>
        </div>

        <div className="mt-5">
          {/* <button
              type="button"
              className="w-full my-3 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-brand transition-all text-sm"
            >
              <FcGoogle className="text-2xl" />
              Sign in with Google
            </button>

            <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:mr-6 font-black after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ml-6 ">
              Or
            </div> */}

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={async (values, actions) => {
              setFormSubmitting(false);
              await Authentication.signIn({
                email: values.email,
                password: values.password,
                callbackUrl: callbackUrl || '/onboarding',
              })
                .then((res) => {
                  // console.log(res);
                  enqueueSnackbar('Login Successfull! Redirecting ...', {
                    variant: 'success',
                  });
                  // router.push(callbackUrl || '/dashboard');
                  setFormSubmitting(false);
                  actions.setSubmitting(false);
                  actions.resetForm();
                })
                .catch((err) => {
                  console.log(err);
                  enqueueSnackbar(
                    "Oohh Something went wrong let's take one more try",
                    {
                      variant: 'error',
                    }
                  );
                });
            }}
          >
            {({
              errors,
              touched,
              isValid,
              isSubmitting,
            }: FormikProps<FormValues>) => (
              <Form>
                <div className="grid gap-y-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="after:content-['*'] after:text-red-500 after:text-xl after:ml-1 block text-sm mb-2 "
                    >
                      Email address
                    </label>
                    <div className="relative">
                      <Field
                        type="email"
                        id="email"
                        name="email"
                        placeholder="name@example.com"
                        className={twmesh(
                          'py-3 px-4 block w-full outline-none border border-gray-200 rounded-md text-sm focus:border-brand focus:ring-brand ',
                          touched?.email &&
                            errors.email &&
                            'border-red-400 text-red-400'
                        )}
                        required
                        aria-describedby="email-error"
                      />
                    </div>
                    {touched?.email && errors.email && (
                      <div className="text-[12px] text-right text-red-500">
                        {errors.email}
                      </div>
                    )}
                  </div>

                  <div>
                    <div className="flex justify-between items-center">
                      <label
                        htmlFor="password"
                        className="after:content-['*'] after:text-red-500 after:text-xl after:ml-1 block text-sm mb-2 "
                      >
                        Password
                      </label>
                      <Link
                        className="text-sm text-brand decoration-2 hover:underline font-medium"
                        href="/signin/reset"
                      >
                        Forgot password?
                      </Link>
                    </div>
                    <div className="relative">
                      <Field
                        type="password"
                        id="password"
                        name="password"
                        placeholder="************"
                        className={twmesh(
                          'py-3 px-4 block w-full outline-none border border-gray-200 rounded-md text-sm focus:border-brand focus:ring-brand ',
                          touched?.email &&
                            errors.email &&
                            'border-red-400 text-red-400'
                        )}
                        required
                        aria-describedby="password-error"
                      />
                    </div>
                    {touched?.password && errors.password && (
                      <div className="text-[12px] text-right text-red-500">
                        {errors.password}
                      </div>
                    )}
                  </div>

                  <div className="flex items-center">
                    <div className="flex">
                      <Field
                        id="remember_me"
                        name="remember_me"
                        type="checkbox"
                        className="shrink-0 mt-0.5 border-gray-200 rounded text-brand focus:ring-brand"
                      />
                    </div>
                    <div className="ml-3">
                      <label htmlFor="remember_me" className="text-sm ">
                        Remember me
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={!isValid || isSubmitting}
                    className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-brand text-white disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-brand focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 transition-all text-sm"
                  >
                    Sign in
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default SigninForm;

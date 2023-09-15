'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FormikProps, Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { BsGithub } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { twmesh } from '@/utils/twmesh';

const validationSchema = Yup.object({
  Fname: Yup.string()
    .min(3, 'First Name should be of minimum 4 characters length')
    .required('first name is required'),
  Lname: Yup.string()
    .min(3, 'Last Name should be of minimum 4 characters length')
    .required('last name is required'),
  email: Yup.string()
    .email('Enter a valid email')
    .required('Email is required'),
  //   password: Yup.string()
  //     .required('Password is required')
  //     .min(8, 'Password should be of minimum 8 characters length'),
  //   confirmPassword: Yup.string()
  //     .label('confirm password')
  //     .required('Please confirm your password')
  //     .oneOf([Yup.ref('password')], 'Both Passwords must be match.'),
});

interface FormValues {
  Fname: string;
  Lname: string;
  email: string;
}

const CreateAccount: React.FC<FormikProps<FormValues>> = (props) => {
  // const { touched, errors, isSubmitting, message } = props;
  // console.log(touched, errors, isSubmitting, message);
  const [formSubmitting, setFormSubmitting] = useState<boolean>(false);
  const initialValues: FormValues = {
    Fname: '',
    Lname: '',
    email: '',
  };
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <main className="w-full max-w-md mx-auto p-6">
      <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm relative">
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
            <h1 className="block text-2xl font-unbounded font-bold text-gray-800 ">
              Create New Account{' '}
              <code className="text-3xl text-red-500">.</code>
            </h1>
            <p className="mt-2 text-sm text-gray-600 ">
              Already have an account?
              <Link
                className="text-brand ml-2 hover:underline decoration-2  font-medium"
                href="/signin"
              >
                Sign in here
              </Link>
            </p>
          </div>

          <div className="mt-5">
            {/* <button
              type="button"
              className="w-full my-3 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-brand transition-all text-sm"
            >
              <FcGoogle className="text-2xl" />
              Sign up with Google
            </button>
            <div className="py-3 flex items-center text-xs text-gray-400 uppercase font-antonio before:flex-[1_1_0%] before:border-t before:border-gray-200 before:mr-6 font-black after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ml-6 ">
              Or
            </div> */}
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={async (values, actions) => {
                console.log(values);
              }}
            >
              {({ errors, touched, isSubmitting }) => (
                <Form>
                  <div className="grid gap-y-4">
                    <label htmlFor="underline_select" className="sr-only">
                      Continue as
                    </label>
                    <select
                      id="underline_select"
                      className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                    >
                      <option selected value="parent">
                        Parent
                      </option>
                      <option value="sitter">Sitter</option>
                    </select>
                    <div>
                      <label
                        htmlFor="Fname"
                        className="after:content-['*'] after:text-red-500 after:text-xl after:ml-1 block text-sm mb-2 "
                      >
                        First Name
                      </label>
                      <div className="relative">
                        <Field
                          type="text"
                          id="Fname"
                          name="Fname"
                          placeholder="John"
                          className={twmesh(
                            'py-3 px-4 block w-full outline-none border border-gray-200 rounded-md text-sm focus:border-brand focus:ring-brand ',
                            touched?.Fname &&
                              errors.Fname &&
                              'border-red-400 text-red-400'
                          )}
                          required
                          aria-describedby="name-error"
                        />
                      </div>
                      {touched?.Fname && errors.Fname && (
                        <div className="text-[12px] text-right text-red-500">
                          {errors.Fname}
                        </div>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="Lname"
                        className="after:content-['*'] after:text-red-500 after:text-xl after:ml-1 block text-sm mb-2 "
                      >
                        Last Name
                      </label>
                      <div className="relative">
                        <Field
                          type="text"
                          id="Lname"
                          name="Lname"
                          placeholder="Doe"
                          className={twmesh(
                            'py-3 px-4 block w-full outline-none border border-gray-200 rounded-md text-sm focus:border-brand focus:ring-brand ',
                            touched?.Lname &&
                              errors.Lname &&
                              'border-red-400 text-red-400'
                          )}
                          required
                          aria-describedby="name-error"
                        />
                      </div>
                      {touched?.Lname && errors.Lname && (
                        <div className="text-[12px] text-right text-red-500">
                          {errors.Lname}
                        </div>
                      )}
                    </div>
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
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-brand text-white disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-brand focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 transition-all text-sm "
                    >
                      Sign up
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CreateAccount;

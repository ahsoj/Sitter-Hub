'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FormikProps, Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { twmesh } from '@/utils/twmesh';

const validationSchema = Yup.object({
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password should be of minimum 8 characters length'),
  confirmPassword: Yup.string()
    .label('confirm password')
    .required('Please confirm your password')
    .oneOf([Yup.ref('password')], 'Both Passwords must be match.'),
});

interface FormValues {
  password: string;
  confirmPassword: string;
}

const SetPassword: React.FC<FormikProps<FormValues>> = (props) => {
  const [formSubmitting, setFormSubmitting] = useState<boolean>(false);
  const initialValues: FormValues = {
    password: '',
    confirmPassword: '',
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
              Setup Your Password
              <code className="text-3xl text-red-500">.</code>
            </h1>
          </div>
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
                  <div>
                    <label
                      htmlFor="password"
                      className="after:content-['*'] after:text-red-500 after:text-xl after:ml-1 block text-sm mb-2 "
                    >
                      Password
                    </label>
                    <div className="relative">
                      <Field
                        type="password"
                        id="password"
                        name="password"
                        placeholder="************"
                        className={twmesh(
                          'py-3 px-4 block w-full outline-none border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 ',
                          touched?.password &&
                            errors.password &&
                            'border-red-400 text-red-400'
                        )}
                        required
                        aria-describedby="password-error"
                      />
                    </div>
                    {touched?.password && errors.password && (
                      <div className="text-[12px] text-red-500">
                        {errors.password}
                      </div>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="confirmPassword"
                      className="after:content-['*'] after:text-red-500 after:text-xl after:ml-1 block text-sm mb-2 "
                    >
                      Password (Confirm)
                    </label>
                    <div className="relative">
                      <Field
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="************"
                        className={twmesh(
                          'py-3 px-4 block w-full outline-none border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 ',
                          touched?.confirmPassword &&
                            errors.confirmPassword &&
                            'border-red-400 text-red-400'
                        )}
                        required
                        aria-describedby="confirm-password-error"
                      />
                    </div>
                    {touched?.confirmPassword && errors.confirmPassword && (
                      <div className="text-[12px] text-red-500">
                        {errors.confirmPassword}
                      </div>
                    )}
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-brand text-white disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-brand focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 transition-all text-sm "
                  >
                    Submit
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </main>
  );
};

export default SetPassword;

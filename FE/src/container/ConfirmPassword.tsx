'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FormikProps, Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { twmesh } from '@/utils/twmesh';
import { PiEyeThin, PiEyeSlashThin } from 'react-icons/pi';
import axios from '@/lib/axios';

const validationSchema = Yup.object({
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password should be of minimum 8 characters length'),
  confirmPassword: Yup.string()
    .label('confirm password')
    .required('Please confirm your password')
    .oneOf([Yup.ref('password')], 'Both Passwords must be match.'),
  remember_me: Yup.boolean(),
});

interface FormValues {
  password: string;
  confirmPassword: string;
}

const ConfirmPassword: React.FC<{ slug: string }> = ({ slug }) => {
  const [formSubmitting, setFormSubmitting] = useState<boolean>(false);
  const [hidePassword, setHidePassword] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const initialValues: FormValues = {
    password: '',
    confirmPassword: '',
  };
  const router = useRouter();

  return (
    <Formik
      className="animate-pulse"
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, actions) => {
        await axios
          .post('/auth/confirm_password/', {
            userId: slug,
            password: values['password'],
          })
          .then((res) => {
            router.push('/signin');
            actions.setSubmitting(false);
            actions.resetForm();
          })
          .catch((err) => {
            console.log('error', err);
          });
      }}
    >
      {({ errors, touched, isValid, isSubmitting }) => (
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
                  type={hidePassword ? 'password' : 'text'}
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
                <div className="text-[12px] text-end text-red-500">
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
                  type={hidePassword ? 'password' : 'text'}
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
                <div className="text-[12px] text-end text-red-500">
                  {errors.confirmPassword}
                </div>
              )}
            </div>
            <div className="flex items-center">
              <div className="ml-3 text-end text-indigo-500">
                <span
                  onClick={() => setHidePassword(!hidePassword)}
                  className="text-sm flex items-center gap-2 cursor-default"
                >
                  {hidePassword ? (
                    <PiEyeSlashThin fontSize={25} />
                  ) : (
                    <PiEyeThin fontSize={25} />
                  )}{' '}
                  {hidePassword ? 'Show' : 'Hide'} Password
                </span>
              </div>
            </div>
            <button
              type="submit"
              disabled={!isValid || isSubmitting}
              className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-brand text-white disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-brand focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 transition-all text-sm "
            >
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ConfirmPassword;

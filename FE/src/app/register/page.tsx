'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FormikProps, Formik, Form, Field, useField } from 'formik';
import * as Yup from 'yup';
import { BsGithub } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { twmesh } from '@/utils/twmesh';
import axios from 'axios';
import PhoneInput, {
  formatPhoneNumber,
  formatPhoneNumberIntl,
  isValidPhoneNumber,
} from 'react-phone-number-input';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = Yup.object({
  firstName: Yup.string()
    .min(3, 'First Name should be of minimum 4 characters length')
    .required('first name is required'),
  lastName: Yup.string()
    .min(3, 'Last Name should be of minimum 4 characters length')
    .required('last name is required'),
  email: Yup.string()
    .email('Enter a valid email')
    .required('Email is required'),
  phoneNumber: Yup.string()
    .min(9, 'Phone number must be at least 10 characters long.')
    .max(15, 'Phone number must be less than 15 characters.')
    .required('Phone number is required.'),
  roleType: Yup.string().required().oneOf(['Parent', 'Sitter']),
  // .label('Selected Country'),
  //   password: Yup.string()
  //     .required('Password is required')
  //     .min(8, 'Password should be of minimum 8 characters length'),
  //   confirmPassword: Yup.string()
  //     .label('confirm password')
  //     .required('Please confirm your password')
  //     .oneOf([Yup.ref('password')], 'Both Passwords must be match.'),
});

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  roleType: string;
  phoneNumber: string;
}

const PhoneNumberField = ({ ...props }) => {
  const [field, meta, helpers] = useField(props.name);
  return (
    <PhoneInput
      // international
      className="flex"
      {...field}
      {...props}
      defaultCountry="ET"
      placeholder="Enter phone number"
      value={meta.value}
      onChange={helpers.setValue}
      error={
        meta.value
          ? isValidPhoneNumber(meta.value)
            ? undefined
            : 'Invalid phone number'
          : 'Phone number required'
      }
    />
  );
};

const SuccessBanner = ({ success }: { success: boolean }) => {
  const router = useRouter();
  return (
    <div
      id="hs-task-created-alert"
      className={twmesh(
        'hidden w-full h-full bg-black/[.4] fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto',
        success && 'flex'
      )}
    >
      <div
        className={twmesh(
          'mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto',
          success && 'mt-7 opacity-100 duration-500 '
        )}
      >
        <div className="relative flex flex-col bg-white shadow-lg rounded-xl">
          <div className="absolute top-2 right-2">
            <button
              type="button"
              onClick={() => router.push('/')}
              className="inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm"
              data-hs-overlay="#hs-task-created-alert"
            >
              <span className="sr-only">Close</span>
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

          <div className="p-4 sm:p-10 text-center overflow-y-auto">
            <span className="mb-4 w-[10rem] aspect-square inline-flex justify-center items-center rounded-full border-4 border-green-50 bg-green-100 text-green-500">
              <img src="/congrats.gif" className="object-contain" alt="" />
            </span>

            <h3 className="mb-2 text-xl font-bold text-gray-800">
              Thank you for Joining us.
            </h3>
            <p className="text-gray-500">
              Okay, Now go and verify your email to get the coupon code that
              used for 50% discount for all packages and save it.
            </p>

            <div className="mt-6 flex justify-center gap-x-4">
              <button
                type="button"
                onClick={() => router.push('https://mail.google.com')}
                className="py-2.5 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium text-slate-300 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white bg-blue-600 focus:ring-blue-600 transition-all text-sm"
                data-hs-overlay="#hs-task-created-alert"
              >
                verify now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CreateAccount: React.FC<FormikProps<FormValues>> = (props) => {
  // const { touched, errors, isSubmitting, message } = props;
  // console.log(touched, errors, isSubmitting, message);
  const [formSubmitting, setFormSubmitting] = useState<boolean>(false);
  const initialValues: FormValues = {
    firstName: '',
    lastName: '',
    roleType: '',
    email: '',
    phoneNumber: '',
  };
  const router = useRouter();
  const [success, setSuccess] = useState<boolean>(false);

  return (
    <main className="w-full max-w-md mx-auto p-6">
      <SuccessBanner success={success} />
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
                setFormSubmitting(true);
                await axios
                  .post('/api/auth/register/', {
                    firstName: values.firstName,
                    lastName: values.lastName,
                    email: values.email,
                    phoneNumber: formatPhoneNumberIntl(values.phoneNumber),
                  })
                  .then((res) => {
                    setFormSubmitting(false);
                    actions.setSubmitting(false);
                    actions.resetForm();
                    setSuccess(!success);
                  })
                  .catch((err) => setFormSubmitting(false));
                // console.log({
                //   firstName: values.firstName,
                //   lastName: values.lastName,
                //   email: values.email,
                //   roleType: values.roleType,
                //   phoneNumber: formatPhoneNumberIntl(values.phoneNumber),
                // });
              }}
            >
              {({ errors, touched, isValid, isSubmitting }) => (
                <Form>
                  <div className="grid gap-y-4">
                    <label htmlFor="underline_select" className="sr-only">
                      Continue as
                    </label>
                    <Field
                      className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                      as="select"
                      name="roleType"
                    >
                      <option disabled value="">
                        Continue as ...
                      </option>
                      {['Parent', 'Sitter'].map((label, idx) => (
                        <option value={label} key={idx}>
                          {label}
                        </option>
                      ))}
                    </Field>
                    <div>
                      <label
                        htmlFor="firstName"
                        className="after:content-['*'] after:text-red-500 after:text-xl after:ml-1 block text-sm mb-2 "
                      >
                        First Name
                      </label>
                      <div className="relative">
                        <Field
                          type="text"
                          id="firstName"
                          name="firstName"
                          placeholder="John"
                          className={twmesh(
                            'py-3 px-4 block w-full outline-none border border-gray-200 rounded-md text-sm focus:border-brand focus:ring-brand ',
                            touched?.firstName &&
                              errors.firstName &&
                              'border-red-400 text-red-400'
                          )}
                          required
                          aria-describedby="name-error"
                        />
                      </div>
                      {touched?.firstName && errors.firstName && (
                        <div className="text-[12px] text-right text-red-500">
                          {errors.firstName}
                        </div>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="after:content-['*'] after:text-red-500 after:text-xl after:ml-1 block text-sm mb-2 "
                      >
                        Last Name
                      </label>
                      <div className="relative">
                        <Field
                          type="text"
                          id="lastName"
                          name="lastName"
                          placeholder="Doe"
                          className={twmesh(
                            'py-3 px-4 block w-full outline-none border border-gray-200 rounded-md text-sm focus:border-brand focus:ring-brand ',
                            touched?.lastName &&
                              errors.lastName &&
                              'border-red-400 text-red-400'
                          )}
                          required
                          aria-describedby="name-error"
                        />
                      </div>
                      {touched?.lastName && errors.lastName && (
                        <div className="text-[12px] text-right text-red-500">
                          {errors.lastName}
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
                    <div>
                      <label
                        htmlFor="phoneNumber"
                        className="after:content-['*'] after:text-red-500 after:text-xl after:ml-1 block text-sm mb-2"
                      >
                        Phone Number
                      </label>
                      <div
                        className={twmesh(
                          'block relative w-full px-2 outline-none border border-gray-200 rounded-md text-sm focus:border-brand focus:ring-brand ',
                          touched?.phoneNumber &&
                            errors.phoneNumber &&
                            'border-red-400 text-red-400'
                        )}
                      >
                        <PhoneNumberField name="phoneNumber" id="phoneNumber" />
                      </div>
                      {touched?.phoneNumber && errors.phoneNumber && (
                        <div className="text-[12px] text-right text-red-500">
                          {errors.phoneNumber}
                        </div>
                      )}
                    </div>
                    <button
                      type="submit"
                      disabled={!isValid || isSubmitting}
                      // disabled={isSubmitting}
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

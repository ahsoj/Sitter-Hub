'use client';

import { RxAvatar } from 'react-icons/rx';
import { Form, Formik, FormikProps, Field } from 'formik';
import * as Yup from 'yup';
import { twmesh } from '@/utils/twmesh';
import { useState } from 'react';

type FormValues = {
  profile: any;
  resume: any;
  birthdate: string;
  gender: string;
  city: string;
};

const OnboardingSitters = () => {
  const [{ addResume, addProfile }, setFieldValue] = useState<{
    addResume?: File;
    addProfile?: File;
  }>({});
  const initialValues: FormValues = {
    profile: undefined,
    resume: undefined,
    birthdate: Date.toString(),
    gender: '',
    city: '',
  };
  return (
    <div className="flex bg-white mx-auto max-w-[30rem] py-12 items-center justify-center px-4">
      <div className="space-y-4 w-full flex flex-col grow">
        <h2 className="text-2xl text-gray-700">...You almost done.</h2>
        <div className="cs-divider my-4" />
        <Formik
          initialValues={initialValues}
          // validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            console.log(values);
            setTimeout(() => {
              actions.setSubmitting(false);
            }, 3000);
          }}
        >
          {({
            errors,
            touched,
            isValid,
            isSubmitting,
          }: FormikProps<FormValues>) => (
            <Form>
              <div className="flex flex-col gap-y-6">
                <div className="space-y-2">
                  <span>Upload your profile</span>
                  <div className="flex items-center w-full">
                    <label
                      htmlFor="dropzone-file"
                      className={twmesh(
                        'flex flex-col items-center justify-center w-full max-w-[10em] aspect-square p-2 border-2 border-gray-300 border-dashed rounded-full cursor-pointer bg-gray-50',
                        touched?.profile &&
                          errors.profile &&
                          'border-red-400 text-red-400'
                      )}
                    >
                      <div className="flex flex-col items-center justify-center">
                        <RxAvatar
                          fontSize={50}
                          className="text-slate-300 mb-4"
                        />
                        <p className="mb-2 text-sm text-center text-gray-500">
                          <span className="font-semibold">Click to upload</span>{' '}
                          or drag and drop
                        </p>
                      </div>
                      <Field
                        id="dropzone-file"
                        type="file"
                        name="profile"
                        onChange={(
                          event: React.ChangeEvent<HTMLInputElement>
                        ) => {
                          if (event.currentTarget.files) {
                            setFieldValue({
                              addResume,
                              addProfile: event.currentTarget.files[0],
                            });
                          }
                        }}
                        className="hidden"
                        required
                      />
                    </label>
                  </div>
                  {touched?.profile && errors.profile && (
                    <div className="text-[12px] text-right text-red-500">
                      {`${errors.profile}`}
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="block space-y-2">
                    <span className="">Upload your CV/Resume</span>
                    <Field
                      type="file"
                      name="resume"
                      accept="application/pdf"
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {
                        if (event.currentTarget.files) {
                          setFieldValue({
                            addProfile,
                            addResume: event.currentTarget.files[0],
                          });
                        }
                      }}
                      required
                      className={twmesh(
                        'block border rounded-md p-2 w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-500  file:text-white hover:file:bg-blue-400',
                        touched?.resume &&
                          errors.resume &&
                          'border-red-400 text-red-400'
                      )}
                    />
                  </label>
                  {touched?.resume && errors.resume && (
                    <div className="text-[12px] text-right text-red-500">
                      {`${errors.resume}`}
                    </div>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="city"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Birth Date
                  </label>
                  <Field
                    type="date"
                    defaultValue="1998-10-20"
                    max="2004-01-01"
                    id="birthdate"
                    // required
                    className={twmesh(
                      'block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500',
                      touched?.birthdate &&
                        errors.birthdate &&
                        'border-red-400 text-red-400'
                    )}
                  />
                  {touched?.birthdate && errors.birthdate && (
                    <div className="text-[12px] text-right text-red-500">
                      {`${errors.birthdate}`}
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="countries"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Gender
                  </label>
                  <Field
                    as="select"
                    id="countries"
                    name="gender"
                    required
                    className={twmesh(
                      'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full py-2 px-4',
                      touched?.gender &&
                        errors.gender &&
                        'border-red-400 text-red-400'
                    )}
                  >
                    <option selected>Select your gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </Field>
                  {touched?.gender && errors.gender && (
                    <div className="text-[12px] text-right text-red-500">
                      {errors.gender}
                    </div>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="city"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    City
                  </label>
                  <Field
                    type="text"
                    placeholder="your living city"
                    id="city"
                    required
                    name="city"
                    className={twmesh(
                      'outline-none block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-base focus:ring-blue-500 focus:border-blue-500',
                      touched?.city &&
                        errors.city &&
                        'border-red-400 text-red-400'
                    )}
                  />
                  {touched?.city && errors.city && (
                    <div className="text-[12px] text-right text-red-500">
                      {errors.city}
                    </div>
                  )}
                </div>
                <button
                  type="submit"
                  // disabled={!isValid || isSubmitting}
                  disabled={isSubmitting}
                  className="px-4 py-2 text-slate-50 bg-brand max-w-[8rem] rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default OnboardingSitters;

'use client';

import { RxAvatar } from 'react-icons/rx';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { Form, Formik, FormikProps, Field } from 'formik';
import * as Yup from 'yup';
import { twmesh } from '@/utils/twmesh';
import { useState } from 'react';
import axios from '@/lib/axios';

const validationSchema = Yup.object({
  gender: Yup.string().required('Gender is required.'),
  city: Yup.string().required('City is required.'),
  birthdate: Yup.string().required('Birth date is required.'),
  // profilePic: Yup.string().required('Profile picture is required.'),
});

type FormValues = {
  profile: any;
  birthdate: string;
  gender: string;
  city: string;
};

type ProfileDataProps = {
  // id: string;
  gender: string;
  city: string;
  profilePic: string;
};

interface OnboardingParentProps extends React.HTMLAttributes<HTMLDivElement> {
  userId: string;
}

const OnboardingParents: React.FC<OnboardingParentProps> = ({ userId }) => {
  const [addProfile, setFieldValue] = useState<Partial<File>>({});
  const [coverImage, setCoverImage] = useState<any>({
    file: null,
    imgURL: null,
  });
  const handleGetImage = (event: React.BaseSyntheticEvent) => {
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      setCoverImage({ file: file, imgURL: reader.result });
    };
    reader.readAsDataURL(file);
  };
  const initialValues: FormValues = {
    profile: undefined,
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
          onSubmit={async (values, actions) => {
            try {
              const formData = new FormData();
              formData.set('parent_profile', coverImage.file);
              let data: ProfileDataProps = {
                profilePic: '',
                // id: userId,
                gender: values['gender'],
                city: values['city'],
              };
              if (coverImage.file) {
                actions.setSubmitting(true);
                await axios
                  .post('/parent/profile/p/upload/', formData, {
                    headers: {
                      'Content-Type': 'multipart/form-data',
                    },
                  })
                  .then(async (resp) => {
                    data.profilePic = resp.data;
                    await axios
                      .post(`/parent/${userId}/profile/`)
                      .then((res) => console.log(res));
                  })
                  .catch((err) => console.log(err));
              }
            } catch (error) {
              console.log(error);
            }
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
                  {!coverImage.imgURL ? (
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
                            <span className="font-semibold">
                              Click to upload
                            </span>{' '}
                            or drag and drop
                          </p>
                        </div>
                        <input
                          id="dropzone-file"
                          type="file"
                          name="profile"
                          onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                          ) => {
                            handleGetImage(event);
                          }}
                          className="hidden"
                          required
                        />
                      </label>
                    </div>
                  ) : (
                    <div className="relative group/profile w-full max-w-[10em] border aspect-square rounded-full overflow-hidden">
                      <img
                        src={coverImage.imgURL || ''}
                        className="block w-full h-full object-cover group-hover/profile:blur-[1px]"
                        alt=""
                      />
                      <div className="absolute hidden group-hover/profile:flex justify-center inset-0">
                        <button
                          onClick={() =>
                            setCoverImage({ file: '', imgURL: '' })
                          }
                          className="self-center p-1.5 text-white border border-slate-300 rounded-md hover:text-red-200 hover:border-red-300 hover:bg-red-600/[.6] align-middle bg-slate-500/[.5] text-xl"
                        >
                          <RiDeleteBin5Line />
                        </button>
                      </div>
                    </div>
                  )}
                  {touched?.profile && errors.profile && (
                    <div className="text-[12px] text-right text-red-500">
                      {`${errors.profile}`}
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
                  {/* <Field name="birthdate"> */}
                  <input
                    type="date"
                    // defaultValue="1998-10-20"
                    min="1977-01-01"
                    max="2008-01-01"
                    id="birthdate"
                    required
                    name="birthdate"
                    // required
                    className={twmesh(
                      'block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500',
                      touched?.birthdate &&
                        errors.birthdate &&
                        'border-red-400 text-red-400'
                    )}
                  />
                  {/* </Field> */}
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

export default OnboardingParents;

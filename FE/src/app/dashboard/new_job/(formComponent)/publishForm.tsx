'use client';
import React, { useState } from 'react';
import Form, { Field } from 'rc-field-form';
import { useRouter } from 'next/navigation';
import axios from '@/lib/axios';
import { enqueueSnackbar } from 'notistack';

const PublishForm = ({ id }: { id: string }) => {
  const [isSubmitting, setSubmitting] = useState<boolean>(false);
  const router = useRouter();
  return (
    <Form
      onFinish={async (values) => {
        setSubmitting(true);
        const new_post = {
          timeLong: values['job_time_long'],
          numberChiled: values['number_of_children'] as number,
          location: values['job_location'],
          title: values['job_title'],
          experiance: values['job_exp'],
          description: values['job_description'],
          parentId: id,
        };
        await axios
          .post('/booking/create_book', new_post)
          .then(() => {
            enqueueSnackbar(
              "Successfully Created, We'll back to you soon with surprise.",
              { variant: 'success' }
            );
            router.push('/dashboard');
            setSubmitting(false);
          })
          .catch(() => {
            enqueueSnackbar(
              'Something wrong on your job posting Check Something In your form.',
              { variant: 'error' }
            );
            setSubmitting(false);
          });
      }}
      className="my-6 space-y-5"
    >
      <div className="flex grow flex-col space-y-2">
        <label
          htmlFor="job_title"
          className="font-medium text-base text-slate-500"
        >
          Job Title *
        </label>
        <Field name="job_title">
          <input
            type="text"
            name="job_title"
            id="job_title"
            placeholder="Urgent: I want babysitter for my two childrens"
            className="placeholder:text-gray-500 w-full grow font-medium text-base px-4 py-2 border border-slate-200 rounded-md focus:placeholder:text-gray-300 outline-none focus:border-indigo-500"
          />
        </Field>
      </div>
      <div className="flex grow flex-col space-y-2">
        <label
          htmlFor="number_of_children"
          className="font-medium text-base text-slate-500"
        >
          Number of Childs *
        </label>
        <Field name="number_of_children">
          <input
            type="number"
            name="number_of_children"
            id="number_of_children"
            placeholder="1"
            inputMode="numeric"
            defaultValue={1}
            min={1}
            className="placeholder:text-gray-500 w-full grow font-medium text-base px-4 py-2 border border-slate-200 rounded-md focus:placeholder:text-gray-300 outline-none focus:border-indigo-500"
          />
        </Field>
      </div>
      <div className="flex grow flex-col space-y-2">
        <label
          htmlFor="job_location"
          className="font-medium text-base text-slate-500"
        >
          Experience Needed *
        </label>
        <Field name="job_exp">
          <select
            name="job_exp"
            className="w-full grow font-medium text-gray-500 text-base px-4 py-2 bg-white border border-slate-200 rounded-md outline-none focus:border-indigo-500"
          >
            <option disabled className="text-gray-400" value="" selected>
              Select Experience Needed
            </option>
            <option value="Entry">Entry</option>
            <option value="Intermideate">Intermideate</option>
            <option value="Expert">Expert</option>
          </select>
        </Field>
      </div>
      <div className="flex grow flex-col space-y-2">
        <label
          htmlFor="job_location"
          className="font-medium text-base text-slate-500"
        >
          Time Long *
        </label>
        <Field name="job_time_long">
          <select
            name="job_time_long"
            className="w-full grow font-medium text-gray-500 text-base px-4 py-2 bg-white border border-slate-200 rounded-md outline-none focus:border-indigo-500"
          >
            <option disabled className="text-gray-400" value="" selected>
              Select For How Much Long
            </option>
            <option value="Less than 6 month">Less than 6 month</option>
            <option value="Less than a Year">Less than a Year</option>
            <option value="More than 6 month">More than 6 month</option>
            <option value="More than a year">More than a year</option>
          </select>
        </Field>
      </div>
      <div className="flex grow flex-col space-y-2">
        <label
          htmlFor="job_location"
          className="font-medium text-base text-slate-500"
        >
          Job Location *
        </label>
        <Field name="job_location">
          <input
            type="text"
            name="job_location"
            id="job_location"
            placeholder="Saris, Addis Abeba, Ethiopia"
            className="placeholder:text-gray-500 w-full grow font-medium text-base px-4 py-2 border border-slate-200 rounded-md focus:placeholder:text-gray-300 outline-none focus:border-indigo-500"
          />
        </Field>
      </div>
      <div className="flex grow flex-col space-y-2">
        <label
          htmlFor="job_description"
          className="font-medium text-base text-slate-500"
        >
          Job Descriptions *
        </label>
        <Field name="job_description">
          <textarea
            rows={4}
            name="job_description"
            id="job_description"
            placeholder="Your job specification for a job seekers"
            className="resize-none placeholder:text-gray-500 w-full grow font-medium text-base px-4 py-2 border border-slate-200 rounded-md focus:placeholder:text-gray-300 outline-none focus:border-indigo-500"
          />
        </Field>
      </div>
      <button
        disabled={isSubmitting}
        className="px-4 py-2 bg-brand disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold rounded-md text-end float-right"
      >
        Publish
      </button>
    </Form>
  );
};

export default PublishForm;

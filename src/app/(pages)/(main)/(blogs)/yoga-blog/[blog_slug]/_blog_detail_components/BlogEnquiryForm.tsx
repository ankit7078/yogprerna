"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { LuCircleCheck, LuMail, LuSend, LuUser } from "react-icons/lu";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';
import { BlogsProps } from "../../../../../../../types/types";

// Validation schema
const BlogEnquiryValidation = Yup.object().shape({
  name: Yup.string().required("Full name is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  mobile_no: Yup.string().min(10, "Must be a valid phone number").required("Contact number is required"),
  message: Yup.string(),
});

const BlogEnquiryForm = ({ blog }: { blog: BlogsProps | null }) => {
  const [submitted, setSubmitted] = React.useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile_no: "",
      message: "",
      blogId: blog?.uniqueId || 0,
    },
    enableReinitialize: true,
    validationSchema: BlogEnquiryValidation,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      console.log("Form Submitted with values:", values);

      await new Promise(resolve => setTimeout(resolve, 1500));

      toast.success("Enquiry sent successfully!");
      setSubmitting(false);
      setSubmitted(true);
      resetForm();
    },
  });

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl shadow-sm mt-8 p-8 text-center">
        <LuCircleCheck className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
        <p className="text-gray-600 mb-6">Your enquiry has been submitted. We'll be in touch soon.</p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-purple-600 font-medium hover:underline transition-colors"
        >
          Send Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[var(--primary-color)] text-[var(--subprimary-color)] rounded-2xl shadow-sm mt-8 p-6 md:p-8">
      <h3 className="text-2xl font-bold mb-6 text-center">Have a Question? Send an Enquiry</h3>
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name *</label>
          <div className="relative">
            <LuUser className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.name}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
              placeholder="Enter your full name"
            />
            {formik.touched.name && formik.errors.name && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
            )}
          </div>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address *</label>
          <div className="relative">
            <LuMail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
              placeholder="you@example.com"
            />
          </div>
          {formik.touched.email && formik.errors.email && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="mobile_no" className="block text-sm font-medium mb-1">
            Contact Number *
          </label>
          <PhoneInput
            country={'in'}
            value={formik.values.mobile_no}
            onChange={phone => formik.setFieldValue('mobile_no', phone)}
            className="rounded-lg"
            inputStyle={{
              width: '100%',
              backgroundColor: '[var(--text-primary)]',
            }}
            buttonStyle={{
              backgroundColor: '[var(--text-primary)]',

            }}
            dropdownStyle={{
              backgroundColor: '[vara(--text-color-primary)]',
              color: 'black',
            }}
            inputProps={{
              name: 'mobile_no',
              required: true,
            }}
          />
          {formik.touched.mobile_no && formik.errors.mobile_no && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.mobile_no}</p>
          )}
        </div>


        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
          <textarea
            id="message"
            name="message"
            onChange={formik.handleChange}
            value={formik.values.message}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
            placeholder="Write your message here..."
            rows={4}
          />
          {formik.touched.message && formik.errors.message && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.message}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={formik.isSubmitting}
          className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg flex items-center justify-center gap-2 hover:bg-purple-700 disabled:bg-purple-300 transition-colors"
        >
          {formik.isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Sending...</span>
            </>
          ) : (
            <>
              <LuSend className="w-5 h-5" />
              <span>Send Enquiry</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default BlogEnquiryForm;

"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { LuCircleCheck, LuMail, LuSend, LuUser } from "react-icons/lu";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';
import { BlogsProps } from "../../../../../../../types/types";
import { InputGroup, TextareaGroup } from "@/common/FormComponents";
import { phoneInputClass } from "@/common/ExtraData";
import ButtonGroup2, { ButtonGroup } from "@/common/ButtonGroup";

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
    <div className="bg-[var(--primary-bg)] text-[var(--primary-text)] rounded-custom shadow-custom p-5">
      <h2 className="heading font-bold mb-5">Send Enquiry</h2>
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="relative">
              <InputGroup
                label="Full Name"
                id="name"
                type="text"
                placeholder="Enter your full name"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name && (
                <p className="text-[var(--danger-button)] mt-1">{formik.errors.name}</p>
              )}
            </div>
          </div>
          <div>
            <div className="relative">
              <InputGroup
                label="Email Address"
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </div>
            {formik.touched.email && formik.errors.email && (
              <p className="text-[var(--danger-button)] mt-1">{formik.errors.email}</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="mobile_no" className="block text-sm text-xs text-[var(--primary-text)] mb-1">
            Contact Number
          </label>
          <PhoneInput
            country={'in'}
            value={formik.values.mobile_no}
            onChange={phone => formik.setFieldValue('mobile_no', phone)}
            inputClass={phoneInputClass()?.input}
            dropdownClass={phoneInputClass()?.dropdown}
            buttonClass={phoneInputClass()?.button}
            inputProps={{
              name: 'mobile_no',
              required: true,
            }}
          />
          {formik.touched.mobile_no && formik.errors.mobile_no && (
            <p className="text-[var(--danger-button)] mt-1">{formik.errors.mobile_no}</p>
          )}
        </div>

        <div>
          <TextareaGroup
            label="Message"
            id="message"
            name="message"
            placeholder="Write your message here..."
            onChange={formik.handleChange}
            value={formik.values.message}
          />
          {formik.touched.message && formik.errors.message && (
            <p className="text-[var(--danger-button)] mt-1">{formik.errors.message}</p>
          )}
        </div>

        <ButtonGroup2
          label="Send Enquiry"
          type="submit"
          disabled={formik.isSubmitting}
          isSubmitting={formik.isSubmitting}
          className="w-full"
        />
      </form>
    </div>
  );
};

export default BlogEnquiryForm;

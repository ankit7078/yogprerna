"use client";
import { useFormik } from "formik";
import { LuMail, LuUser, LuLock, LuEye, LuEyeOff } from "react-icons/lu";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { RegisterValidation } from "@/contexts/ValidationSchema";
import toast from "react-hot-toast";
import API from "@/contexts/API";
import { useRouter } from "next/navigation";
import PhoneInput from "react-phone-input-2";

const RegisterLayout1 = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [agree, setAgree] = useState(false);
  const [step, setStep] = useState(1);

  const formik = useFormik({
    initialValues: {
      username: "",
      name: "",
      email: "",
      mobile_no: "",
      password: "",
      confirm_password: "",
    },
    validationSchema: RegisterValidation,
    onSubmit: async (values) => {
      if (!agree) return toast.error("Please agree to the terms");
      setIsLoading(true);
      try {
        const res = await API.post("/profile/register", values);
        toast.success(res.data.message);
        router.push(`/auth/verify-email/send/${values.email}`);
      } catch (err: any) {
        toast.error(err.response?.data?.error || "Something went wrong.");
      } finally {
        setIsLoading(false);
      }
    },
  });

  const nextStep = () => {
    if (step === 1 && (!formik.values.username || !formik.values.name)) {
      toast.error("Please fill out all fields");
      return;
    }
    if (step === 2 && (!formik.values.email || !formik.values.mobile_no)) {
      toast.error("Please fill out all fields");
      return;
    }
    setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  return (
    <div className="flex min-h-screen bg-[#0f0f15] text-gray-100">
      {/* Left Image Section */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <Image src="/img/reset_password.jpg" alt="Register" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-white backdrop-blur-sm">
        {/* Logo */}
          <Link href="/" className="flex justify-center mb-8">
            <Image src="/img/logo/logo-white.png" alt="Logo" width={160} height={40} />
          </Link>
          <h2 className="text-3xl font-bold mb-2">Join Our Platform</h2>
          <p className="max-w-sm text-center text-gray-300">
            Connect and grow with a global learning community.
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 px-8 py-10 overflow-y-auto flex justify-center">
        <div className="max-w-md w-full bg-[#1a1a25]/70 p-8 rounded-2xl shadow-lg border border-[#2d2d3a] backdrop-blur-md">

          {/* Title */}
          <h1 className="text-2xl font-semibold text-center mb-6 text-white">
            {step === 1 && "Step 1: Personal Info"}
            {step === 2 && "Step 2: Contact Info"}
            {step === 3 && "Step 3: Security Setup"}
          </h1>

          {/* Progress Bar */}
          <div className="flex justify-between mb-6">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`h-2 w-1/3 rounded-full transition-all ${
                  s <= step ? "bg-gradient-to-r from-purple-500 to-indigo-600" : "bg-[#2d2d3a]"
                }`}
              />
            ))}
          </div>

          {/* Form */}
          <form onSubmit={formik.handleSubmit} className="space-y-5">
            {/* Step 1 */}
            {step === 1 && (
              <>
                {[{ id: "username", label: "Username" }, { id: "name", label: "Full Name" }].map(
                  ({ id, label }) => (
                    <div key={id}>
                      <label className="block text-sm mb-2">{label}</label>
                      <div className="relative">
                        <LuUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          id={id}
                          name={id}
                          type="text"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values[id as keyof typeof formik.values]}
                          className="w-full pl-10 pr-3 py-3 bg-[#11121a] border border-[#2d2d3a] text-gray-100 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all"
                          placeholder={label}
                        />
                      </div>
                    </div>
                  )
                )}
              </>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <>
                <div>
                  <label className="block text-sm mb-2">Email</label>
                  <div className="relative">
                    <LuMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                      className="w-full pl-10 pr-3 py-3 bg-[#11121a] border border-[#2d2d3a] text-gray-100 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                      placeholder="Email"
                    />
                  </div>
                </div>

                <div>
                  <PhoneInput
                    country="in"
                    value={formik.values.mobile_no}
                    onChange={(v) => formik.setFieldValue("mobile_no", v)}
                    inputClass="!w-full !py-3 !pl-14 !pr-4 !rounded-lg !border !border-[#2d2d3a] !bg-[#11121a] !text-gray-100 focus:!ring-2 focus:!ring-purple-500"
                  />
                </div>
              </>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <>
                {[{ id: "password", label: "Password", show: showPass, set: setShowPass },
                  { id: "confirm_password", label: "Confirm Password", show: showConfirm, set: setShowConfirm },
                ].map(({ id, label, show, set }) => (
                  <div key={id}>
                    <label className="block text-sm mb-2">{label}</label>
                    <div className="relative">
                      <LuLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        id={id}
                        type={show ? "text" : "password"}
                        onChange={formik.handleChange}
                        value={formik.values[id as keyof typeof formik.values]}
                        placeholder={label}
                        className="w-full pl-10 pr-12 py-3 bg-[#11121a] border border-[#2d2d3a] text-gray-100 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                      />
                      <button
                        type="button"
                        onClick={() => set(!show)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-200"
                      >
                        {show ? <LuEyeOff /> : <LuEye />}
                      </button>
                    </div>
                  </div>
                ))}

                <div className="flex items-start gap-3 mt-3">
                  <input
                    type="checkbox"
                    checked={agree}
                    onChange={(e) => setAgree(e.target.checked)}
                    className="accent-purple-500 w-4 h-4 mt-1"
                  />
                  <label className="text-sm text-gray-300">
                    I agree to the{" "}
                    <Link href="#" className="text-purple-400 hover:underline">
                      Terms & Conditions
                    </Link>
                  </label>
                </div>
              </>
            )}

            {/* Buttons */}
            <div className="flex justify-between items-center pt-2">
              {step > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-5 py-2 bg-[#2d2d3a] text-gray-200 rounded-lg hover:bg-[#3a3a4d] transition"
                >
                  Back
                </button>
              )}
              {step < 3 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="ml-auto px-5 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg hover:opacity-90 transition"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isLoading}
                  className="ml-auto px-5 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg hover:opacity-90 transition"
                >
                  {isLoading ? "Registering..." : "Register"}
                </button>
              )}
            </div>

            <p className="text-sm text-center mt-6 text-gray-400">
              Already have an account?{" "}
              <Link href="/auth/login" className="text-purple-400 hover:underline">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterLayout1;

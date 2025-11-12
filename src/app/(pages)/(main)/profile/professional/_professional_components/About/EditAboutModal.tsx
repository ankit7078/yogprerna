import { UserProps } from "@/types/types";
import React from "react";
import { LuX } from "react-icons/lu";
import { useFormik } from "formik";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import API from "@/contexts/API";
import { ProfileAboutValidation } from "@/contexts/ValidationSchema";
import { InputGroup, TextareaGroup } from "@/common/FormComponents";
import { ButtonGroup, ButtonGroupSecondary } from "@/common/ButtonGroup";

interface EditAboutModalProps {
  profile: UserProps | null;
  onSave: () => void;
  onClose: () => void;
}

const EditAboutModal: React.FC<EditAboutModalProps> = ({
  profile,
  onSave,
  onClose,
}) => {
  const formik = useFormik({
    initialValues: {
      userId: profile?.uniqueId || "",
      heading: profile?.heading || "",
      about: profile?.about || "",
    },
    validationSchema: ProfileAboutValidation,
    enableReinitialize: true,
    onSubmit: async (values) => {
      try {
        const response = await API.patch("/profile/bio", values);
        toast.success(response.data.message);
      } catch (error) {
        const err = error as AxiosError<{ error: string }>;
        toast.error(err.response?.data.error || "Something Went Wrong");
      } finally {
        onSave();
        onClose();
      }
    },
  });

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-50 p-4">
      <div className="bg-[var(--primary-bg)] text-[var(--primary-text)] rounded-custom max-w-2xl w-full shadow-2xl overflow-hidden">
        <div className="bg-[var(--text-hover-color)] text-[var(--text-color-primary)] p-5">
          <div className="flex items-center justify-between">
            <h2 className="heading font-medium">
              Edit About Section
            </h2>
            <button
              onClick={onClose}
              className="hover:text-[var(--text-hover-color)] hover:bg-[var(--text-color-primary)] cursor-pointer p-1 rounded-custom transition-all"
            >
              <LuX className="h-4 w-4" />
            </button>
          </div>
        </div>

        <form onSubmit={formik.handleSubmit} className="p-5 space-y-3">
          <div>
            <InputGroup
              label="Heading"
              type="text"
              name="heading"
              value={formik.values.heading}
              onChange={formik.handleChange}
              maxLength={200}
              placeholder="Your professional headline"
            />
            {formik.touched.heading && formik.errors.heading && (
              <p className="text-xs text-[var(--danger-button)] mt-1">
                {formik.errors.heading}
              </p>
            )}
          </div>
          <div>
            <TextareaGroup
              label="About Description"
              name="about"
              value={formik.values.about}
              onChange={formik.handleChange}
              placeholder="Tell us about yourself, your experience, goals, and what makes you unique..."
              maxLength={600}
            />
            {formik.touched.about && formik.errors.about && (
              <p className="text-xs text-[var(--danger-button)] mt-1">{formik.errors.about}</p>
            )}
            <div className="flex justify-between items-center mt-2">
              <p className="text-xs">
                Write a compelling description that highlights your strengths
                and experience
              </p>
              <span className="paragraph">
                {formik.values.about.length}/600
              </span>
            </div>
          </div>

          <div className="flex justify-end space-x-4">
            <ButtonGroupSecondary label="Cancel" onClick={onClose}   />
            <ButtonGroup label="Submit" type="submit"/>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditAboutModal;

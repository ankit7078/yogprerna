'use client'

import {
  ExperienceProps,
  FormattedOptionsProps,
  PropertyProps,
  UserProps,
} from "@/types/types";
import CreatableSelect from "react-select/creatable";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import API from "@/contexts/API";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import { ProfileExperienceValidation } from "@/contexts/ValidationSchema";
import { reactSelectDesignClass } from "@/common/reactSelectDesignClass";
import { InputGroup } from "@/common/FormComponents";
import { ButtonGroup, ButtonGroupSecondary } from "@/common/ButtonGroup";

export default function ExpereienceForm({
  profile,
  editingItem,
  onClose,
  getProfile,
  properties,
}: {
  profile: UserProps | null;
  editingItem: ExperienceProps;
  onClose: () => void;
  getProfile: () => void;
  properties: PropertyProps[];
}) {
  const [companySelectOptions, setCompanySelectOptions] = useState<
    FormattedOptionsProps[]
  >([]);

  useEffect(() => {
    if (properties) {
      const formattedOptions = properties?.map((property) => ({
        label: property.property_name,
        value: property.property_name,
        id: property.uniqueId,
      }));
      setCompanySelectOptions(formattedOptions);
    }
  }, [properties]);

  const formatToMonthInput = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    return `${year}-${month}`;
  };

  const formik = useFormik({
    initialValues: {
      uniqueId: editingItem?.uniqueId || "",
      userId: profile?.uniqueId || "",
      position: editingItem?.position || "",
      property_id: editingItem?.property_id || null,
      property_name: editingItem?.property_name || "",
      location: editingItem?.location || "",
      currentlyWorking: editingItem?.currentlyWorking || false,
      start_date: formatToMonthInput(editingItem?.start_date),
      end_date: formatToMonthInput(editingItem?.end_date),
    },
    validationSchema: ProfileExperienceValidation,
    enableReinitialize: true,
    onSubmit: async (values) => {
      if (!values?.property_id && !values.property_name) {
        toast.error("Have To Select Company");
        return;
      }
      const payload = {
        ...values,
        property_id: values.property_id || null,
        property_name: values.property_id ? "" : values.property_name,
      };

      try {
        const response = await API.post(`/profile/experience`, payload);
        toast.success(response.data.message);
      } catch (error) {
        const err = error as AxiosError<{ error: string }>;
        toast.error(err.response?.data?.error || "Something went wrong.");
      } finally {
        getProfile();
        onClose();
      }
    },
  });

  const handleCompanyChange = (option: FormattedOptionsProps | null) => {
    if (option && option.id) {
      formik.setFieldValue("property_name", "");
      formik.setFieldValue("property_id", option.id);
    } else if (option) {
      formik.setFieldValue("property_name", option.value);
      formik.setFieldValue("property_id", null);
    } else {
      formik.setFieldValue("property_name", "");
      formik.setFieldValue("property_id", null);
    }
  };

  const handleCompanyCreate = (inputValue: string) => {
    formik.setFieldValue("property_name", inputValue);
    formik.setFieldValue("property_id", null);
  };
  return (
    <div>
      <div className="p-5">
        <h3 className="heading font-semibold mb-4">
          {profile?.experiences?.find(
            (exp) => exp?.uniqueId === editingItem?.uniqueId
          )
            ? "Edit Experience"
            : "Add New Experience"}
        </h3>

        <form onSubmit={formik.handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <InputGroup
                id="position"
                label="Position"
                type="text"
                {...formik.getFieldProps("position")}
                placeholder="Enter Your Position"
              />
              {formik.touched.position && formik.errors.position && (
                <p className="text-xs text-[var(--danger-button)] mt-1">
                  {formik.errors.position}
                </p>
              )}
            </div>

            <div>
              <label className="block text-xs mb-1">
                Company
              </label>
              <CreatableSelect
                options={companySelectOptions.filter(
                  (opt) =>
                    !formik.values.property_name ||
                    opt.value !== formik.values.property_name
                )}
                onChange={handleCompanyChange}
                onCreateOption={handleCompanyCreate}
                value={
                  formik.values.property_id
                    ? companySelectOptions.find(
                      (option) => option?.id === formik.values.property_id
                    ) || null
                    : formik.values.property_name
                      ? {
                        label: formik.values.property_name,
                        value: formik.values.property_name,
                      }
                      : null
                }
                isClearable
                className="text-xs "
                classNames={reactSelectDesignClass}
              />
              {formik.touched.property_id && formik.errors.property_id && (
                <p className="text-xs text-[var(--danger-button)] mt-1">
                  {formik.errors.property_id}
                </p>
              )}
              {formik.touched.property_name && formik.errors.property_name && (
                <p className="text-xs text-[var(--danger-button)] mt-1">
                  {formik.errors.property_name}
                </p>
              )}
            </div>

            <div>
              <InputGroup
                id="location"
                label="Location"
                type="text"
                {...formik.getFieldProps("location")}
                placeholder="Enter Your Location"
              />
              {formik.touched.location && formik.errors.location && (
                <p className="text-xs text-[var(--danger-button)] mt-1">
                  {formik.errors.location}
                </p>
              )}
            </div>

            <div>
              <InputGroup
                id="start_date"
                label="Start Date"
                type="month"
                {...formik.getFieldProps("start_date")}

              />
              {formik.touched.start_date && formik.errors.start_date && (
                <p className="text-xs text-[var(--danger-button)] mt-1">
                  {formik.errors.start_date}
                </p>
              )}
            </div>
            {!formik.values.currentlyWorking && (
              <div>
                <InputGroup
                  label="End Date"
                  id="end_date"
                  type="month"
                  {...formik.getFieldProps("end_date")}
                  disabled={formik.values.currentlyWorking}
                />
                {formik.touched.end_date && formik.errors.end_date && (
                  <p className="text-xs text-[var(--danger-button)] mt-1">
                    {formik.errors.end_date}
                  </p>
                )}
              </div>
            )}
          </div>

          <div>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={formik.values.currentlyWorking}
                {...formik.getFieldProps("currentlyWorking")}
                className="cursor-pointer w-3 h-3"
              />
              <span className="ml-2 text-xs font-medium">
                I currently work here
              </span>
            </label>
          </div>

          <div className="flex justify-end space-x-3">
            <ButtonGroupSecondary label="Cancel" onClick={onClose}  />
            <ButtonGroup label="Submit" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
}

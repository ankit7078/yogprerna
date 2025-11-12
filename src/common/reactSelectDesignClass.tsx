export const reactSelectDesignClass: ClassNamesConfig<any, true> = {
  control: (state) =>
    `!rounded-md border ${state.isFocused
      ? "!border-[var(--primary-border)]"
      : "!border-[var(--primary-border)]"
    } !bg-[var(--primary-bg)] !text-white !shadow-sm`,
  menu: () => "!bg-white dark:!bg-gray-900 !text-white",
  option: (state) =>
    `!cursor-pointer !px-3 !py-1 ${state.isSelected
      ? "!bg-gray-500 !text-white"
      : state.isFocused
        ? "!bg-gray-100 dark:!bg-gray-700"
        : ""
    }`,
  multiValue: () => "!bg-gray-100 dark:!bg-gray-800 !px-2 !py-1 !mr-1",
  multiValueLabel: () => "!text-sm !text-white",
  multiValueRemove: () =>
    "hover:!bg-red-500 hover:!text-white !cursor-pointer !ml-1",
  placeholder: () => "!text-white",
  singleValue: () => "!text-white",
};
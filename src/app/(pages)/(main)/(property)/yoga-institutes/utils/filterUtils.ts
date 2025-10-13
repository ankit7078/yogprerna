// utils/filterUtils.js
export const matchesMultiWordSearch = (itemName, searchTerm) => {
  if (!searchTerm.trim()) return true;
  const searchWords = searchTerm.toLowerCase().trim().split(/\s+/);
  const itemNameLower = itemName.toLowerCase();
  return searchWords.every((word) => itemNameLower.includes(word));
};

export const getActiveFilters = (filters) => {
  const activeFilters = [];
  Object.entries(filters).forEach(([key, values]) => {
    if (Array.isArray(values) && values.length > 0) {
      values.forEach((value) => {
        activeFilters.push({
          type: key,
          value,
          label: `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`,
        });
      });
    }
  });
  return activeFilters;
};
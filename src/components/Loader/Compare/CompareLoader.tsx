import React from "react";

const CompareLoader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin"></div>
        <p className="mt-4 text-lg font-semibold text-gray-700">
          Loading Comparison Data...
        </p>
      </div>
    </div>
  );
};

export default CompareLoader;
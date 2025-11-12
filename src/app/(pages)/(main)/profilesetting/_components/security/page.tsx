import React from 'react';

const BusinessContent = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Business Information
            </h2>
            <p className="text-gray-600">
                Manage your business details, branding, and public profile settings here.
            </p>
            {/* You can add forms and inputs here */}
            <div className="mt-6">
                <label htmlFor="businessName" className="block text-sm font-medium text-gray-700">
                    Business Name
                </label>
                <input
                    type="text"
                    id="businessName"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                    placeholder="Yogprerna Institute"
                />
            </div>
        </div>
    );
};

export default BusinessContent;
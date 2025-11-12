import React from 'react';

const PlaceholderTab = ({ title }) => (
    <div className="text-gray-400">
        <h2 className="text-2xl font-semibold text-white mb-4">{title}</h2>
        <p>This is a placeholder for the "{title}" settings. You can build out this component just like the "Account" tab.</p>
    </div>
);

export default PlaceholderTab;
import React from 'react';

interface PlaceholderTabProps {
  title: string;
}

const PlaceholderTab: React.FC<PlaceholderTabProps> = ({ title }) => (
  <div className="">
    <h2 className="sub-heading font-semibold mb-4">{title}</h2>
    <p>This is a placeholder for the "{title}" settings. You can build out this component just like the "Account" tab.</p>
  </div>
);

export default PlaceholderTab;
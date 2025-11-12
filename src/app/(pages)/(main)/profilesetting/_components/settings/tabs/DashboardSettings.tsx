import React from 'react';
import { SelectGroup, CheckboxGroup } from '../../ui/FormComponents'; // Adjusted path

const DashboardSettings = () => (
    <div className="space-y-12">
        <section>
            <h2 className="text-lg font-semibold text-white">Dashboard Preferences</h2>
            <p className="text-sm text-gray-400 mb-6">Personalize your main dashboard</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SelectGroup
                    label="Default Dashboard"
                    id="default-dashboard"
                    options={['My Dashboard', 'Team Dashboard', 'Project Overview']}
                    defaultValue="My Dashboard"
                />
                <SelectGroup
                    label="Default Time Range"
                    id="dashboard-time"
                    options={['Last 7 Days', 'Last 30 Days', 'This Quarter']}
                    defaultValue="Last 7 Days"
                />
            </div>
        </section>
        <div className="border-b border-gray-700"></div>
        <section>
            <h2 className="text-lg font-semibold text-white">Widget Visibility</h2>
            <p className="text-sm text-gray-400 mb-6">Choose which widgets to display</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <CheckboxGroup label="My Tasks" id="widget-tasks" defaultChecked={true} />
                <CheckboxGroup label="Team Activity" id="widget-activity" defaultChecked={true} />
                <CheckboxGroup label="Calendar" id="widget-calendar" defaultChecked={true} />
                <CheckboxGroup label="Project Status" id="widget-projects" defaultChecked={false} />
                <CheckboxGroup label="Time Tracking" id="widget-time" defaultChecked={true} />
                <CheckboxGroup label="Reports Overview" id="widget-reports" defaultChecked={false} />
            </div>
        </section>
    </div>
);

export default DashboardSettings;
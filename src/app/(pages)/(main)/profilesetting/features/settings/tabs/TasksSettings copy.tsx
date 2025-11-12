import React from 'react';
import { SelectGroup, CheckboxGroup, } from '../../../_components/FormComponents'; // Adjusted path

const TasksSettings = () => (
    <div className="space-y-12">
        <section>
            <h2 className="text-lg font-semibold text-white">Task Preferences</h2>
            <p className="text-sm text-gray-400 mb-6">Customize your task management flow</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SelectGroup
                    label="Default Task View"
                    id="task-view"
                    options={['List', 'Board (Kanban)', 'Calendar']}
                    placeholder="List"
                />
                <SelectGroup
                    label="Default Sort Order"
                    id="task-sort"
                    options={['Due Date (Ascending)', 'Due Date (Descending)', 'Priority', 'Creation Date']}
                    placeholder="Due Date (Ascending)"
                />
                <div className="md:col-span-2 space-y-4">
                    <CheckboxGroup
                        label="Show completed tasks"
                        id="show-completed"
                        defaultChecked={true}
                        description="Completed tasks will be visible in your views."
                    />
                    <CheckboxGroup
                        label="Enable task priorities"
                        id="enable-priorities"
                        defaultChecked={true}
                        description="Allow setting high, medium, and low priorities."
                    />
                </div>
            </div>
        </section>
    </div>
);

export default TasksSettings;
"use client";

import React from 'react';
import { ActiveFilters, FilterGroupKey } from '../../../../../../types/types';
import {
    experienceTypeFilters,
    locationTypeFilters,
    certificationTypeFilters,
    courseLevelFilters,
    courseTypeFilters,
    durationFilters,
} from '../../../../../data/lib/coursesdata';
import FilterGroup from './FilterGroup';

type Props = {
    activeFilters: ActiveFilters;
    toggleFilter: (group: FilterGroupKey, filterId: string) => void;
};

export default function Sidebar({ activeFilters, toggleFilter }: Props) {
    return (
        <div className="space-y-6">
            <FilterGroup
                title="Travel Experiences"
                groupKey="experienceType"
                items={experienceTypeFilters}
                activeItems={activeFilters.experienceType}
                toggleItem={toggleFilter}
                searchPlaceholder="Search experiences..."
            />
            <FilterGroup
                title="Location Type"
                groupKey="locationType"
                items={locationTypeFilters}
                activeItems={activeFilters.locationType}
                toggleItem={toggleFilter}
                searchPlaceholder="Search location..."
            />
            <FilterGroup
                title="Certifications Types"
                groupKey="certificationType"
                items={certificationTypeFilters}
                activeItems={activeFilters.certificationType}
                toggleItem={toggleFilter}
                searchPlaceholder="Search certification type..."
            />
            <FilterGroup
                title="Course Level"
                groupKey="courseLevel"
                items={courseLevelFilters}
                activeItems={activeFilters.courseLevel}
                toggleItem={toggleFilter}
                searchPlaceholder="Search course level..."
            />
            <FilterGroup
                title="Course Types"
                groupKey="courseType"
                items={courseTypeFilters}
                activeItems={activeFilters.courseType}
                toggleItem={toggleFilter}
                searchPlaceholder="Search course type..."
            />
            <FilterGroup
                title="Durations"
                groupKey="duration"
                items={durationFilters}
                activeItems={activeFilters.duration}
                toggleItem={toggleFilter}
                searchPlaceholder="Search duration..."
            />
        </div>
    );
}
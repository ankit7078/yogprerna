"use client";

import React from 'react';
import SettingsHeader from './SettingHeader';
import SettingsTabs from './SettingsTabs';
import AccountSettings from './tabs/AccountSettings';
import TasksSettings from './tabs/TasksSettings';
import DashboardSettings from './tabs/DashboardSettings';
import NotificationsSettings from './tabs/NotificationsSettings';
import SharingSettings from './tabs/SharingSettings';
import UpdateScheduleSettings from './tabs/UpdateScheduleSettings';
import BillingSettings from './tabs/BillingSettings';
import QuestionsSettings from './tabs/QuestionsSettings';

const SettingsPage = ({ tab }: { tab?: string }) => {
  const activeTab = tab || 'Account';

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Account':
        return <AccountSettings />;
      case 'Tasks':
        return <TasksSettings />;
      case 'Dashboard':
        return <DashboardSettings />;
      case 'Notifications':
        return <NotificationsSettings />;
      case 'Sharing':
        return <SharingSettings />;
      case 'Update schedule':
        return <UpdateScheduleSettings />;
      case 'Billing':
        return <BillingSettings />;
      case 'Questions':
        return <QuestionsSettings />;
      default:
        return <AccountSettings />;
    }
  };

  return (
    <div className="">
      <SettingsHeader />
      <SettingsTabs />
      <div className="mt-8">
        {renderTabContent()}
      </div>
    </div>
  );
}

export default SettingsPage;
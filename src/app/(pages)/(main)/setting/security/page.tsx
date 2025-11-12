"use client";

import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

type SettingsItemLinkProps = {
  title: string;
  icon?: React.ReactNode;
  onClick?: () => void;
};

const SettingsItemLink: React.FC<SettingsItemLinkProps> = ({ title, icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full flex justify-between items-center p-4 text-left transition-colors duration-150"
    >
      <span className="text-xs">{title}</span>
      <div className="flex items-center gap-3">
        <FiChevronRight className="w-4 h-4 text-gray-400" />
      </div>
    </button>
  );
};

const PasswordSecurityPage = () => {

  const loginRecoveryItems = [
    { title: 'Change password' },
    { title: 'Two-factor authentication' },
    { title: 'Saved login', }
  ];

  const securityChecksItems = [
    { title: "Where you're logged in" },
    { title: 'Login alerts' },
    { title: 'Recent emails' },
    { title: 'Security Checkup', }
  ];

  return (
    <section className='text-[var(--secondary-text)]'>
      <div className="text-[var(--secondary-text)] space-y-6">
        <div>
          <h1 className="heading font-bold">
            Password and security
          </h1>
        </div>

        <section>
          <h2 className="sub-heading font-semibold text-[var(--primary-text)]">
            Login & recovery
          </h2>
          <p className="text-[var(--primary-text)] mt-1 mb-4">
            Manage your passwords, login preferences and recovery methods.
          </p>

          <div className="rounded-lg border border-[var(--primary-border)] overflow-hidden">
            <div className="divide-y divide-[var(--primary-border)]">
              {loginRecoveryItems.map((item) => (
                <SettingsItemLink
                  key={item.title}
                  title={item.title}
                />
              ))}
            </div>
          </div>
        </section>
        <section>
          <h2 className="sub-heading font-semibold text-[var(--primary-text)]">
            Security checks
          </h2>
          <p className="text-[var(--primary-text)] mt-1 mb-4">
            Review security issues by running checks across apps, devices and emails sent.
          </p>

          <div className="rounded-custom border border-[var(--primary-border)] overflow-hidden">
            <div className="divide-y divide-[var(--primary-border)]">
              {securityChecksItems.map((item) => (
                <SettingsItemLink
                  key={item.title}
                  title={item.title}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default PasswordSecurityPage;
import React from 'react';
import { InputGroup, SelectGroup } from '../../../../../../../common/FormComponents';
import { FiCamera } from 'react-icons/fi';

const AccountSettings = () => {
    return (
        <div className="sm:space-y-12 space-y-6">
            <section className='text-[var(--primary-text)]'>
                <div className="flex flex-col md:flex-row justify-between md:items-start items-center">
                    <div className="w-full md:w-auto hidden sm:block">
                        <h2 className="sub-heading font-semibold ">Profile</h2>
                        <p>Set your account details</p>
                    </div>
                    {/* mobile view */}
                    <div className='flex w-full gap-4 px-1 mb-2 justify-start items-center sm:hidden'>
                        <div className="relative w-16 h-16 md:mt-0">
                            {/* Profile Image */}
                            <img
                                src="https://placehold.co/96x96/374151/FFF?text=BD"
                                alt="Profile picture"
                                className="w-16 h-16 rounded-full object-cover"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = "https://placehold.co/96x96/374151/FFF?text=User";
                                }}
                            />
                            <button
                                className="absolute bottom-0 right-0 bg-[var(--secondary-bg)] p-1.5 rounded-full shadow-md hover:bg-[var(--primary-bg)] transition"
                                aria-label="Edit profile photo"
                            >
                                <FiCamera size={14} className="text-[var(--secondary-text)]" />
                            </button>
                        </div>
                        <div className='relative'>
                            <h2 className="sub-heading font-semibold ">Profile</h2>
                            <p>Set your account details</p>
                        </div>
                    </div>

                    <form className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 w-full sm:max-w-xl mx-auto p-1 sm:p-0 ">
                        {/* Name */}
                        <div className="w-full">
                            <InputGroup
                                label="Name"
                                type="text"
                                id="name"
                                placeholder="Enter Your Name"
                            />
                        </div>

                        {/* Surname */}
                        <div className="w-full">
                            <InputGroup
                                label="Surname"
                                type="text"
                                id="surname"
                                placeholder="Enter Your Surname"
                            />
                        </div>

                        {/* Email */}
                        <div className="md:col-span-2 w-full">
                            <InputGroup
                                label="Email"
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                            />
                        </div>
                    </form>

                    <div className="relative w-16 h-16 md:mt-0 hidden sm:block">
                        {/* Profile Image */}
                        <img
                            src="https://placehold.co/96x96/374151/FFF?text=BD"
                            alt="Profile picture"
                            className="w-16 h-16 rounded-full object-cover"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = "https://placehold.co/96x96/374151/FFF?text=User";
                            }}
                        />
                        <button
                            className="absolute bottom-0 right-0 bg-[var(--secondary-bg)] p-1.5 rounded-full shadow-md hover:bg-[var(--primary-bg)] transition cursor-pointer"
                            aria-label="Edit profile photo"
                        >
                            <FiCamera size={14} className="text-[var(--secondary-text)]" />
                        </button>
                    </div>

                </div>
            </section>

            {/* Divider */}
            <div className="border-b border-[var(--primary-border)]"></div>

            <section className='text-[var(--secondary-text)]'>
                <h2 className="font-semibold mb-2 sub-heading">Timezone & preferences</h2>
                <p className='mb-3 text-[var(--primary-text)]'>Let us know the time zone and format</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <InputGroup label="City" id="city" placeholder="Enter your city" />
                    <SelectGroup
                        label="Timezone"
                        id="timezone"
                        placeholder="Select timezone"
                        options={['UTC/GMT -4 hours', 'UTC/GMT -5 hours', 'UTC/GMT -6 hours']}
                    />
                    <SelectGroup
                        label="Date & Time format"
                        id="datetime"
                        placeholder="Select date & time format"
                        options={['dd/mm/yyyy 00:00', 'mm/dd/yyyy 00:00', 'yyyy-mm-dd 00:00']}
                    />
                </div>
            </section>
        </div>
    );
};

export default AccountSettings;


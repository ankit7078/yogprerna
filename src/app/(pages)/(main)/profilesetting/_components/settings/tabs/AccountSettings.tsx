import React from 'react';
import { FiUploadCloud, FiInfo } from 'react-icons/fi';
import { InputGroup, SelectGroup } from '../../ui/FormComponents'; // Adjusted path

const AccountSettings = () => {
    return (
        <div className="space-y-12">
            <section>
                <div className="flex flex-col md:flex-row justify-between md:items-start items-center">
                    <div className="w-full md:w-auto">
                        <h2 className="text-md font-semibold text-white">Profile</h2>
                        <p className="text-xs text-gray-400">Set your account details</p>
                    </div>

                    <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {/* Name */}
                        <div>

                            <InputGroup
                                label="Name"
                                type="text"
                                id="name"
                                placeholder='Enter Your Name'
                            />
                        </div>

                        {/* Surname */}
                        <div>
                            <InputGroup
                                label="Surname"
                                type="text"
                                id="surname"
                                placeholder='Enter Your Surname'
                            />
                        </div>

                        {/* Email */}
                        <div className="md:col-span-2">
                            <InputGroup
                                label="Email"
                                type="email"
                                id="email"
                                placeholder='Enter your email'
                            />
                        </div>
                    </form>

                    <div className="flex flex-col items-start md:mt-0">
                        <img
                            src="https://placehold.co/96x96/374151/FFF?text=BD"
                            alt="Profile picture of Bartosz Mcdaniel"
                            className="w-16 h-16 rounded-full mb-4 object-cover"
                            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/96x96/374151/FFF?text=User"; }}
                        />
                        <div className="flex items-center space-x-2">
                            <button className="text-xs text-gray-400 cursor-pointer font-medium hover:text-gray-300">Edit Photo</button>
                            <button className="text-gray-400 hover:text-white cursor-pointer">
                                <FiUploadCloud className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                </div>
            </section>

            {/* Divider */}
            <div className="border-b border-gray-700"></div>

            {/* Timezone & preferences Section */}
            <section>
                <h2 className="text-md font-semibold text-white">Timezone & preferences</h2>
                <p className="text-xs text-gray-400 mb-6">Let us know the time zone and format</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Changed defaultValue to placeholder */}
                    <InputGroup label="City" id="city" placeholder="Enter your city" />

                    {/* Changed defaultValue to placeholder */}
                    <SelectGroup
                        label="Timezone"
                        id="timezone"
                        placeholder="Select timezone"
                        options={['UTC/GMT -4 hours', 'UTC/GMT -5 hours', 'UTC/GMT -6 hours']}
                    />

                    {/* Changed defaultValue to placeholder */}
                    <SelectGroup
                        label="Date & Time format"
                        id="datetime"
                        placeholder="Select date & time format"
                        options={['dd/mm/yyyy 00:00', 'mm/dd/yyyy 00:00', 'yyyy-mm-dd 00:00']}
                    />
                </div>
            </section>

            {/* Divider */}
            <div className="border-b border-gray-700"></div>

            {/* ... Other sections like "Motivation & Performance setup" would go here ... */}
        </div>
    );
};

export default AccountSettings;
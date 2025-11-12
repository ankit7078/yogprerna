import React from 'react';

const ProfileHeaderSkeleton = () => (
  <div className="p-6 md:p-8 bg-white rounded-lg shadow-md animate-pulse">
    <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
      <div className="w-24 h-24 bg-gray-300 rounded-full"></div>
      <div className="flex-1 text-center sm:text-left">
        <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2 mb-4"></div>
        <div className="h-4 bg-gray-300 rounded w-1/4"></div>
      </div>
      <div className="h-10 bg-gray-300 rounded-md w-32 mt-4 sm:mt-0"></div>
    </div>
  </div>
);

const InfoCardSkeleton = ({ titleWidth = 'w-1/4' }) => (
  <div className="p-6 md:p-8 bg-white rounded-lg shadow-md animate-pulse">
    <div className="flex justify-between items-center mb-6">
      <div className={`h-5 bg-gray-300 rounded ${titleWidth}`}></div>
      <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
    </div>
    <div className="space-y-4">
      <div className="h-4 bg-gray-300 rounded w-full"></div>
      <div className="h-4 bg-gray-300 rounded w-5/6"></div>
      <div className="h-10 bg-gray-300 rounded-md w-36 mx-auto mt-6"></div>
    </div>
  </div>
);

const RightSidebarCardSkeleton = ({ children, titleWidth = 'w-1/3' }) => (
    <div className="p-6 bg-white rounded-lg shadow-md animate-pulse">
        <div className={`h-5 bg-gray-300 rounded ${titleWidth} mb-6`}></div>
        {children}
    </div>
);


const ProfilePageSkeleton = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-6 md:p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <main className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <ProfileHeaderSkeleton />
            <InfoCardSkeleton titleWidth="w-24" />
            <InfoCardSkeleton titleWidth="w-32" />
            <InfoCardSkeleton titleWidth="w-28" />
            <InfoCardSkeleton titleWidth="w-20" />
            <InfoCardSkeleton titleWidth="w-32" />
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <RightSidebarCardSkeleton titleWidth="w-32">
                <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-gray-300 rounded-full mb-4"></div>
                    <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded w-3/4 mb-4"></div>
                    <div className="h-12 bg-gray-300 rounded-md w-full"></div>
                </div>
            </RightSidebarCardSkeleton>

             <RightSidebarCardSkeleton titleWidth="w-36">
                <div className="flex flex-col items-center">
                    <div className="w-32 h-32 bg-gray-300 rounded-full border-8 border-gray-200 flex items-center justify-center mb-4">
                         <div className="h-8 bg-gray-200 rounded w-1/2"></div>
                    </div>
                    <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
                    <div className="h-10 bg-gray-300 rounded-md w-full mt-2"></div>
                </div>
            </RightSidebarCardSkeleton>

            <RightSidebarCardSkeleton titleWidth="w-40">
                <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                        <div className="w-5 h-5 bg-gray-300 rounded"></div>
                        <div className="h-4 bg-gray-300 rounded w-full"></div>
                    </div>
                     <div className="flex items-center space-x-3">
                        <div className="w-5 h-5 bg-gray-300 rounded"></div>
                        <div className="h-4 bg-gray-300 rounded w-full"></div>
                    </div>
                </div>
            </RightSidebarCardSkeleton>

            <RightSidebarCardSkeleton titleWidth="w-36">
                <div className="space-y-5">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                            <div className="flex-1">
                                <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                                <div className="h-3 bg-gray-300 rounded w-1/2"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </RightSidebarCardSkeleton>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProfilePageSkeleton;

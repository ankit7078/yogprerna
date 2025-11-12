const ProfileLoader = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 animate-pulse">
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-8">
          <div className="h-20 bg-gray-300 rounded-t-2xl"></div>
          <div className="relative px-8 pb-8">
            <div className="flex items-end justify-between -mt-16 mb-6">
              <div className="relative">
                <div className="w-32 h-32 bg-gray-300 rounded-full border-4 border-white"></div>
              </div>
              <div className="flex gap-3">
                <div className="h-10 w-32 bg-gray-300 rounded-xl"></div>
                <div className="h-10 w-48 bg-gray-300 rounded-xl hidden sm:block"></div>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <div className="h-4 w-1/4 bg-gray-300 rounded-md mb-2"></div>
                <div className="h-8 w-1/2 bg-gray-300 rounded-md"></div>
                <div className="h-6 w-1/3 bg-gray-300 rounded-full mt-3"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
          <div className="h-7 w-1/3 bg-gray-300 rounded-md mb-6"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-300 rounded-lg"></div>
                <div className="flex-1">
                  <div className="h-4 w-1/2 bg-gray-300 rounded-md mb-2"></div>
                  <div className="h-5 w-3/4 bg-gray-300 rounded-md"></div>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
             {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-300 rounded-lg"></div>
                <div className="flex-1">
                  <div className="h-4 w-1/2 bg-gray-300 rounded-md mb-2"></div>
                  <div className="h-5 w-3/4 bg-gray-300 rounded-md"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-8">
          <div className="h-7 w-1/3 bg-gray-300 rounded-md mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="h-12 bg-gray-300 rounded-xl"></div>
            <div className="h-12 bg-gray-300 rounded-xl"></div>
            <div className="h-12 bg-gray-300 rounded-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileLoader;


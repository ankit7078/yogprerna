const ProfileEditLoader = () => {
  const renderInputSkeleton = () => (
    <div>
      <div className="h-5 w-1/4 bg-gray-300 rounded-md mb-2"></div>
      <div className="h-12 w-full bg-gray-300 rounded-lg"></div>
    </div>
  );

  const renderSelectSkeleton = () => (
    <div>
      <div className="h-5 w-1/4 bg-gray-300 rounded-md mb-2"></div>
      <div className="h-12 w-full bg-gray-300 rounded-xl"></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 animate-pulse">
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-2xl shadow-sm p-8">
          <div className="space-y-6">
            {renderInputSkeleton()}
            {renderInputSkeleton()}
            {renderInputSkeleton()}
            {renderInputSkeleton()}
            {renderInputSkeleton()}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {renderInputSkeleton()}
              {renderInputSkeleton()}
            </div>

            {renderSelectSkeleton()}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {renderSelectSkeleton()}
              {renderSelectSkeleton()}
            </div>

            <div className="flex gap-4 pt-6">
              <div className="h-12 w-24 bg-gray-300 rounded-xl"></div>
              <div className="h-12 w-24 bg-gray-300 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileEditLoader;

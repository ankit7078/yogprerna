import React from 'react';

const Shimmer: React.FC = () => (
  <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-gray-200/50 to-transparent"></div>
);

const BlogLoader: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="relative bg-gray-100 rounded-3xl overflow-hidden shadow-lg mb-16 p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                    <div className="h-6 w-1/4 bg-gray-200 rounded-full relative overflow-hidden"><Shimmer /></div>
                    <div className="h-12 w-full bg-gray-200 rounded-lg relative overflow-hidden"><Shimmer /></div>
                    <div className="h-10 w-3/4 bg-gray-200 rounded-lg relative overflow-hidden"><Shimmer /></div>
                    <div className="h-6 w-full bg-gray-200 rounded-md relative overflow-hidden"><Shimmer /></div>
                    <div className="h-6 w-5/6 bg-gray-200 rounded-md relative overflow-hidden"><Shimmer /></div>
                    <div className="h-12 w-48 bg-gray-200 rounded-full mt-4 relative overflow-hidden"><Shimmer /></div>
                </div>
                 <div className="hidden lg:block h-64 w-full bg-gray-200 rounded-2xl relative overflow-hidden"><Shimmer /></div>
            </div>
        </div>

        <div className="mb-6 bg-gray-100 p-4 rounded-2xl h-20 relative overflow-hidden"><Shimmer /></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="bg-gray-100 rounded-2xl shadow-sm p-6 space-y-4 relative overflow-hidden">
                    <div className="h-40 w-full bg-gray-200 rounded-xl relative overflow-hidden"><Shimmer /></div>
                    <div className="h-6 w-1/3 bg-gray-200 rounded-full relative overflow-hidden"><Shimmer /></div>
                    <div className="h-8 w-full bg-gray-200 rounded-lg relative overflow-hidden"><Shimmer /></div>
                    <div className="h-5 w-5/6 bg-gray-200 rounded-md relative overflow-hidden"><Shimmer /></div>
                    <div className="h-5 w-full bg-gray-200 rounded-md relative overflow-hidden"><Shimmer /></div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default BlogLoader;

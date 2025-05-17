import React from "react";

const Shimmer = () => {
    return (
        <div className="p-4 space-y-4">
            <div className="animate-pulse flex space-x-4 bg-gray-800 rounded-lg p-4">
                <div className="bg-gray-700 h-24 w-40 rounded"></div>
                <div className="flex-1 space-y-4 py-1">
                    <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-700 rounded w-1/2"></div>
                    <div className="h-4 bg-gray-700 rounded w-full"></div>
                </div>
            </div>
        </div>
    );
};

export default Shimmer;

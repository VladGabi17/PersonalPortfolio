import React from "react";

const OverviewCard = ({ icon, title, description }) => {
  return (
    <div className="p-6 border rounded-xl border-r-gray-200">
      <div className="md:flex md:items-start md:-mx-4">
        <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4">
          {icon}
        </span>
        <div className="mt-4 md:mx-4 md:mt-0">
          <h1 className="text-xl font-medium text-gray-700 capitalize">
            {title}
          </h1>
          <p className="mt-3 text-gray-500">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default OverviewCard;
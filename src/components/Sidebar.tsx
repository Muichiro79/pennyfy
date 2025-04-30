// import React from 'react';

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 w-64 h-full bg-gray-800 text-white shadow-xl">
      <div className="flex justify-between items-center p-4">
        <h2 className="text-xl font-semibold">Sidebar</h2>
      </div>
      <div className="mt-6">
        <ul>
          <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Home</li>
          <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">About</li>
          <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Services</li>
          <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

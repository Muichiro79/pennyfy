// import React from 'react';

const Settings = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-emerald-600">Settings</h2>
      
      {/* Notifications Settings */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-emerald-500">Notifications</h3>
        <div className="mt-2">
          <div className="flex justify-between items-center">
            <p className="text-gray-700">Enable Email Notifications</p>
            <input type="checkbox" className="h-5 w-5 bg-emerald-500 rounded" />
          </div>
          <div className="flex justify-between items-center mt-4">
            <p className="text-gray-700">Enable SMS Notifications</p>
            <input type="checkbox" className="h-5 w-5 bg-emerald-500 rounded" />
          </div>
        </div>
      </div>

      {/* Privacy Settings */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-emerald-500">Privacy</h3>
        <div className="mt-2">
          <div className="flex justify-between items-center">
            <p className="text-gray-700">Allow Profile to be Public</p>
            <input type="checkbox" className="h-5 w-5 bg-emerald-500 rounded" />
          </div>
        </div>
      </div>

      {/* Language Settings */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-emerald-500">Language Preferences</h3>
        <select className="mt-2 p-2 border rounded-lg text-emerald-600">
          <option value="english">English</option>
          <option value="spanish">Spanish</option>
          <option value="french">French</option>
        </select>
      </div>
      
      {/* Save Button */}
      <div className="mt-6">
        <button className="px-6 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-all">
          Save Settings
        </button>
      </div>
    </div>
  );
};

export default Settings;

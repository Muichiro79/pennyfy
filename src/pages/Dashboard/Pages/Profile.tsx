// import React from 'react';

const Profile = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-emerald-600">Profile</h2>
      
      {/* Profile Info */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-emerald-500">User Information</h3>
        <div className="mt-2">
          <div className="flex justify-between">
            <p className="text-gray-700">Name:</p>
            <p className="text-emerald-700">John Doe</p>
          </div>
          <div className="flex justify-between mt-2">
            <p className="text-gray-700">Email:</p>
            <p className="text-emerald-700">john.doe@example.com</p>
          </div>
          <div className="flex justify-between mt-2">
            <p className="text-gray-700">Location:</p>
            <p className="text-emerald-700">Lagos, Nigeria</p>
          </div>
        </div>
      </div>
      
      {/* Edit Profile */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-emerald-500">Account Settings</h3>
        <button className="mt-4 px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-all">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;

import React from 'react';
import useProfile from '../profileDataBackend/ProfileData';

const ProfilePage = () => {
  // Set profile data from your source
  const profile = useProfile() || {
    email: "Error",
    gender: "Error",
    name: "Error",
    phno: 0,
    profilePicture: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-center mb-4">
          <img 
            src={profile.profilePicture} 
            alt="Profile" 
            className="w-24 h-24 rounded-full border-2 border-gray-300" 
          />
        </div>
        <div className="space-y-4">
          <div>
            <span className="block text-sm font-medium text-gray-700">Name:</span>
            <p className="mt-1 text-gray-900">{profile.name || "N/A"}</p>
          </div>
          <div>
            <span className="block text-sm font-medium text-gray-700">Gender:</span>
            <p className="mt-1 text-gray-900">{profile.gender || "N/A"}</p>
          </div>
          <div>
            <span className="block text-sm font-medium text-gray-700">Phone Number:</span>
            <p className="mt-1 text-gray-900">{profile.phno || "N/A"}</p>
          </div>
          <div>
            <span className="block text-sm font-medium text-gray-700">Email:</span>
            <p className="mt-1 text-gray-900">{profile.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

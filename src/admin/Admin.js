import React from 'react';
import useProfile from '../profileDataBackend/ProfileData';

export default function Admin() {
  const profile = useProfile() || { role: 'Error' };  // Fallback if profile data fails


  // If the user's role is not "admin", return null (renders nothing)
  if (profile.role !== 'admin') {
    return (
        <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl font-bold text-red-500">you dont have access</h1>
      </div>
    );
  }

  // If the user is an admin, render the admin content (e.g., admin button)
  return (
<h1>ram ram admin</h1>
  );
}

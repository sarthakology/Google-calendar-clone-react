import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useProfile from '../profileDataBackend/ProfileData';
import { useNavigate } from 'react-router-dom';
import refreshJWTToken from '../services/RefreshJWTToken';

const ProfilePage = () => {
  const profile = useProfile() || {
    email: "Error",
    gender: "Error",
    name: "Error",
    phno: 0,
    profilePicture: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"
  };


  const loading = useProfile()

  const [name, setName] = useState(profile.name);
  const [gender, setGender] = useState(profile.gender);
  const [phno, setPhno] = useState(profile.phno);
  const [email, setEmail] = useState(profile.email);
  const [isEditing, setIsEditing] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setName(profile.name);
    setGender(profile.gender);
    setPhno(profile.phno);
    setEmail(profile.email);
  }, [profile]);

  const handleSaveChanges = async () => {
    try {
      const accessToken = await refreshJWTToken();

      if (accessToken) {
        const formData = {
          name,
          gender,
          phno,
          email,
        };

        await axios.put('http://localhost:8083/edit-profile', formData, {
          headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
          },
        });

        console.log('Profile updated successfully');
      } else {
        console.error('No accessToken found');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
    }
    
    setIsEditing(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    console.log('User logged out');
    navigate('/');
  };
  
    //baad me isko bhi banaa h 
  if(!loading) return (
    <h1>loading profile please wait...</h1>
  )
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
            {isEditing ? (
              <input 
                type="text" 
                className="mt-1 w-full border rounded px-3 py-2"
                value={name} 
                onChange={(e) => setName(e.target.value)} 
              />
            ) : (
              <p className="mt-1 text-gray-900">{name || "N/A"}</p>
            )}
          </div>
          <div>
            <span className="block text-sm font-medium text-gray-700">Gender:</span>
            {isEditing ? (
              <select
                className="mt-1 w-full border rounded px-3 py-2"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            ) : (
              <p className="mt-1 text-gray-900">{gender || "N/A"}</p>
            )}
          </div>
          <div>
            <span className="block text-sm font-medium text-gray-700">Phone Number:</span>
            {isEditing ? (
              <input 
                type="text" 
                className="mt-1 w-full border rounded px-3 py-2"
                value={phno} 
                onChange={(e) => setPhno(e.target.value)} 
              />
            ) : (
              <p className="mt-1 text-gray-900">{phno || "N/A"}</p>
            )}
          </div>
          <div>
            <span className="block text-sm font-medium text-gray-700">Email:</span>
            {isEditing ? (
              <input 
                type="text" 
                className="mt-1 w-full border rounded px-3 py-2"
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
              />
            ) : (
              <p className="mt-1 text-gray-900">{email || "N/A"}</p>
            )}
          </div>
          <button 
            className="mt-4 w-full bg-blue-500 text-white py-2 rounded"
            onClick={() => isEditing ? handleSaveChanges() : setIsEditing(true)}
          >
            {isEditing ? 'Save Changes' : 'Edit Profile'}
          </button>
          <button 
            className="mt-4 w-full bg-red-500 text-white py-2 rounded"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

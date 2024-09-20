import React, { useState, useEffect, useMemo, useContext } from 'react';
import axios from 'axios';
import useProfile from '../profileDataBackend/ProfileData';
import { useNavigate } from 'react-router-dom';
import refreshJWTToken from '../services/RefreshJWTToken';
import GlobalContext from "../context/GlobalContext";
import { uploadFileToFirebase } from "../firebase/FirebaseUpload";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProfilePage = () => {
  const profileData = useProfile();
  
  // Memoize profile data
  const profile = useMemo(() => profileData || {
    email: "Error",
    gender: "Error",
    name: "Error",
    phno: 0,
    profilePicture: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"
  }, [profileData]);

  const [name, setName] = useState(profile.name);
  const [gender, setGender] = useState(profile.gender);
  const [phno, setPhno] = useState(profile.phno);
  const [email, setEmail] = useState(profile.email);
  const [isEditing, setIsEditing] = useState(false);
  const [profilePicture, setProfilePicture] = useState(profile.profilePicture);
  const [imageUpload, setImageUpload] = useState(null);
  const [imgURL, setImgURL] = useState(profile.profilePicture);

  const { setLoader, dispatchCalEvent } = useContext(GlobalContext);
  const navigate = useNavigate();

  useEffect(() => {
    setName(profile.name);
    setGender(profile.gender);
    setPhno(profile.phno);
    setEmail(profile.email);
    setProfilePicture(profile.profilePicture);
    setImgURL(profile.profilePicture);
  }, [profile]);

  const handleSaveChanges = async () => {
    setLoader(true);
    try {
      let uploadedImageURL = imgURL;

      // Upload the image if a new one is selected
      if (imageUpload) {
        await uploadFileToFirebase(imageUpload, (url) => {
          uploadedImageURL = url;
        }, setLoader);
      }

      const accessToken = await refreshJWTToken(navigate);
      if (accessToken) {
        const formData = {
          name,
          gender,
          phno,
          email,
          profilePicture: uploadedImageURL // Use the URL of the uploaded image
        };
        await axios.put('http://localhost:8083/auth/update/user', formData, {
          headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
          },
        });
        console.log('Profile updated successfully');
        toast.success('Success! Profile updated successfully!');
      } else {
        console.error('No accessToken found');
        toast.error('No accessToken found');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      toast.error('Error updating profile:', error);
    } finally {
      setIsEditing(false);
      setLoader(false);
    }
  };

  const handleLogout = () => {

      localStorage.removeItem('savedEvents');
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      toast.success('Successfully logged out!');
      dispatchCalEvent({ type: 'deleteAll' });
      navigate('/');
  };

  if (!profileData) return <h1>Loading profile, please wait...</h1>;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <div className="relative flex justify-center mb-4">
          {isEditing ? (
            <>
              <img
                src={imageUpload ? URL.createObjectURL(imageUpload) : profilePicture}
                alt="Profile"
                className="w-24 h-24 rounded-full border-2 border-gray-300 cursor-pointer"
                onClick={() => document.getElementById('fileInput').click()}
              />
              <input
                id="fileInput"
                type="file"
                accept="image/*"
                onChange={(event) => {
                  const file = event.target.files[0];
                  if (file) {
                    setImageUpload(file);
                    setImgURL(URL.createObjectURL(file)); // Update the image preview
                  }
                }}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
            </>
          ) : (
            <img
              src={imageUpload ? URL.createObjectURL(imageUpload) : profilePicture}
              alt="Profile"
              className="w-24 h-24 rounded-full border-2 border-gray-300"
            />
          )}
        </div>

        <div className="space-y-4">
          {/* Name input */}
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

          {/* Gender input */}
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

          {/* Phone number input */}
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

          {/* Email input */}
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

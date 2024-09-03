// firebaseUpload.js
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase";
import axios from "axios";
import { v4 } from "uuid";

export const uploadFileToFirebase = async (
  imageUpload,
  name,
  gender,
  phno,
  email
) => {
  if (imageUpload == null) return;

  const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);

  try {
    const snapshot = await uploadBytes(imageRef, imageUpload);
    const url = await getDownloadURL(snapshot.ref);

    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      const formData = {
        name,
        gender,
        phno,
        email,
        url // Use the updated URL after upload
      };

      // Ensure URL is updated before the request
      console.log("Image URL after upload:", url);

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
};

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API_URLS from '../ApiUrls';
import { toast } from 'react-toastify';

export default function DeleteUsersAdmin() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch users when the component mounts
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(API_URLS.GET_ROLE);
        setUsers(response.data);
      } catch (error) {
        toast.error('Failed to fetch users.');
        setError('Failed to fetch users.');
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);
  
  // Delete user account immediately without confirmation
  const handleDelete = async (email) => {
    try {
      await axios.delete(API_URLS.DELETE_USER(email));
      toast.success(`User with email ${email} deleted successfully`);
      setUsers(users.filter(user => user.email !== email)); // Update UI
    } catch (error) {
      toast.error('Error deleting user.');
    }
  };

  if (loading) return <div>Loading users...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Manage User Deletion</h2>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.email}>
              <td className="py-2 px-4 border-b">{user.email}</td>
              <td className="py-2 px-4 border-b">
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  onClick={() => handleDelete(user.email)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

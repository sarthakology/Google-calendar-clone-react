import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API_URLS from '../ApiUrls';

export default function RoleUpdateAdmin() {
  const [users, setUsers] = useState([]);
  const [updatedRoles, setUpdatedRoles] = useState({});

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(API_URLS.GET_ROLE);
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, []);

  const handleRoleChange = (email, newRole) => {
    setUpdatedRoles({
      ...updatedRoles,
      [email]: newRole,
    });
  };

  const handleSubmit = async (email) => {
    const newRole = updatedRoles[email];
    try {
      await axios.put(API_URLS.UPDATE_ROLE, {
        email,
        role: newRole,
      });
      console.log(`Role updated for ${email}`);
    } catch (error) {
      console.error('Error updating role:', error);
      alert('Error updating role');
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Manage User Roles</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Current Role</th>
            <th className="py-2 px-4 border-b">Update Role</th>
            <th className="py-2 px-4 border-b">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.email}>
              <td className="py-2 px-4 border-b">{user.email}</td>
              <td className="py-2 px-4 border-b">{user.role}</td>
              <td className="py-2 px-4 border-b">
                <select
                  className="border rounded p-2"
                  value={updatedRoles[user.email] || user.role}
                  onChange={(e) => handleRoleChange(user.email, e.target.value)}
                >
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
                </select>
              </td>
              <td className="py-2 px-4 border-b">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  onClick={() => handleSubmit(user.email)}
                >
                  Update Role
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

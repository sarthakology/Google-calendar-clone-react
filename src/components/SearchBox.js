import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function SearchBox() {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSearch = async () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(searchTerm)) {
            console.log('Invalid email format');
            return;
        }

        try {
            const response = await axios.get(`http://localhost:8083/search/${searchTerm}`);
            if (response.data) {
                navigate(`/search/${searchTerm}`);
            }
        } catch (error) {
            console.log('Not found or error occurred:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <div className="flex items-center border border-gray-300 rounded-full bg-white shadow-md w-[200px] h-[40px]">
            <input
                type="email"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-grow border-none bg-transparent px-3 py-2 text-gray-700 placeholder-gray-400 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-500 h-full"
            />
            <button
                className="flex items-center justify-center w-10 h-full bg-blue-500 rounded-r-full hover:bg-blue-600 transition duration-200 -ml-10"
                onClick={handleSearch}
            >
                <span className="material-icons-outlined text-white">
                    search
                </span>
            </button>
        </div>
    );
}

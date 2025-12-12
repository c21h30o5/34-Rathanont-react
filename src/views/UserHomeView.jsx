// src/views/User.jsx

import { useState, useEffect } from 'react';
import axios from 'axios';

export default function UserHomeView() {
    const [members, setMembers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const API_URL = "https://67eca027aa794fb3222e43e2.mockapi.io/members"; 

    //  Fetch ข้อมูล
    useEffect(() => {
        const fetchMembers = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const response = await axios.get(API_URL);
                setMembers(response.data);
            } catch (err) {
                console.error("Error fetching data:", err);
                setError("Failed to load data. Please check the network or API endpoint.");
                setMembers([]);
            } finally {
                setIsLoading(false);
            }
        };

        fetchMembers();
    }, []);

    if (isLoading) {
        return (
            <div className="text-center mt-20 text-2xl font-semibold">
                Loading Data from API...
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center mt-20 text-xl font-semibold text-red-600">
                Error: {error}
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center p-8">
            <div className="w-full max-w-4xl overflow-x-auto shadow-lg rounded-lg border">
                <table className="min-w-full bg-white divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Position</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {members.length > 0 ? (
                            members.map((member) => (
                                <tr key={member.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{member.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{member.lastname}</td> 
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{member.position}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="3" className="px-6 py-4 text-center text-gray-500">
                                    No data found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
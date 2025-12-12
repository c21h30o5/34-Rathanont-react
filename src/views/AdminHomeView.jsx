import { useState, useEffect } from 'react';
import axios from 'axios';
import CreateUserForm from '../components/CreateUserForm';

export default function AdminHomeView() {
    const [members, setMembers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    // State สำหรับ Form เพิ่ม User ใหม่
    const [newMember, setNewMember] = useState({
        name: '',
        lastname: '',
        position: ''
    });
    const API_URL = "https://67eca027aa794fb3222e43e2.mockapi.io/members"; 
    // จัดการการเปลี่ยนแปลงข้อมูลในกล่อง Input
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewMember(prev => ({
            ...prev,
            [name]: value
        }));
    };
    // ดึงข้อมูล
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

    useEffect(() => {
        fetchMembers();
    }, []);

    if (isLoading) {
        return <div className="text-center mt-20 text-2xl font-semibold">Loading Data...</div>;
    }
    if (error) {
        return <div className="text-center mt-20 text-xl font-semibold text-red-600">Error: {error}</div>;
    }

    // ฟังก์ชันจัดการปุ่ม Save (POST)
    const handleSave = async (e) => {
        e.preventDefault();
        if (!newMember.name || !newMember.lastname || !newMember.position) {
            alert('Please fill in all fields.');
            return;
        }

        try {
            await axios.post(API_URL, newMember);
            setNewMember({ name: '', lastname: '', position: '' });
            await fetchMembers();
            alert(`User ${newMember.name} created successfully!`);
        } catch (err) {
            console.error("Error creating user:", err);
            setError("Failed to create user.");
        }
    };

    return (
        <div className="flex flex-col items-center p-8">
            <CreateUserForm
                newMember={newMember}
                handleChange={handleChange}
                handleSave={handleSave}
            />

            <div className="w-full max-w-4xl overflow-x-auto shadow-lg rounded-lg border">
                <table className="min-w-full bg-white divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Position</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {members.length > 0 ? (
                            members.map((employee) => (
                                <tr key={employee.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{employee.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{employee.lastname}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{employee.position}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                        <button className="text-red-600 hover:text-red-900">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="px-6 py-4 text-center text-gray-500">
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
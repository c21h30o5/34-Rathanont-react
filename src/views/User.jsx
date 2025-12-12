// src/views/User.jsx

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // 1. Import axios
// ไม่ต้อง import { mockData } อีกต่อไป

export default function User() {
    const navigate = useNavigate();
    // State สำหรับเก็บข้อมูลพนักงาน
    const [members, setMembers] = useState([]);
    // State สำหรับแสดงสถานะการโหลด
    const [isLoading, setIsLoading] = useState(true);
    // State สำหรับจัดการข้อผิดพลาดจากการเรียก API
    const [error, setError] = useState(null); 

    const API_URL = "https://67eca027aa794fb3222e43e2.mockapi.io/members"; 

    //  Fetch ข้อมูล
    useEffect(() => {
        const fetchMembers = async () => {
            // 2. ตั้งค่าสถานะเริ่มต้น
            setIsLoading(true);
            setError(null);

            try {
                // 3. ใช้ axios.get เพื่อดึงข้อมูล
                const response = await axios.get(API_URL);
                // 4. หากสำเร็จ กำหนดข้อมูลพนักงาน
                setMembers(response.data);
            } catch (err) {
                // 5. หากเกิดข้อผิดพลาดในการเชื่อมต่อ/เรียก API
                console.error("Error fetching data:", err);
                setError("Failed to load data. Please check the network or API endpoint.");
                setMembers([]); // เคลียร์ข้อมูลเก่า
            } finally {
                // 6. ไม่ว่าจะสำเร็จหรือล้มเหลว ให้หยุดสถานะการโหลด
                setIsLoading(false);
            }
        };

        fetchMembers();
    }, []); // Array ว่าง: ทำงานเมื่อ Component ถูก Render ครั้งแรก

    // 7. การจัดการสถานะการแสดงผล
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

    // 8. แสดงผลหน้า User View เมื่อโหลดข้อมูลเสร็จแล้ว
    return (
        <div className="flex flex-col items-center p-8">
            <h1 className="text-center text-5xl font-bold mb-10">
                Generation Thailand <br/>
                Home - User View
            </h1>
            {/* ปุ่ม Navigation */}
            <div className="flex justify-around w-full max-w-sm mb-12">
                <button
                    className="px-6 py-3 bg-white font-semibold border rounded-md shadow hover:bg-gray-100" 
                    onClick={() => navigate('/user')} 
                >
                    User Home View
                </button>
                <button
                    className="px-6 py-3 bg-white font-semibold border rounded-md shadow hover:bg-gray-100" 
                    onClick={() => navigate('/admin')}
                >
                    Admin Home View
                </button>
            </div>

            <h3 className="text-2xl font-semibold mb-4 text-gray-700 w-full max-w-4xl text-left">
                Table 1
            </h3>

            {/* ตารางแสดงข้อมูลพนักงาน */}
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
                            members.map((employee) => (
                                <tr key={employee.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{employee.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{employee.lastname}</td> 
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{employee.position}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="3" className="px-6 py-4 text-center text-gray-500">
                                    No employee data found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
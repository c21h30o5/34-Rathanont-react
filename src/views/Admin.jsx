import { useNavigate } from "react-router-dom"

export default function Admin() {
    const navigate = useNavigate()

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-center text-5xl font-semibold pt-15">
                Generation Thailand <br></br>
                Home - Admin View
            </h1>

            <div className="flex justify-around w-full pt-12">
                <button
                    className="bg-white font-semibold py-5 px-6 border border-gray-300 rounded-md shadow-md hover:bg-gray-50 transition"
                    onClick={() => navigate('/user')} // สมมติว่า route สำหรับ User คือ /user
                >
                User Home View
                </button>
                <button
                    className="bg-white font-semibold py-5 px-6 border border-gray-300 rounded-md shadow-md hover:bg-gray-50 transition"
                    onClick={() => navigate('/admin')} // สมมติว่า route สำหรับ Admin คือ /admin
                >
                Admin Home View
                </button>
            </div>

            <div>

            </div>
        </div>
    )
}
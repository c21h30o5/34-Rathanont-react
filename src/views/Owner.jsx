export default function Owner() {
    return (
        <div className="flex flex-col items-center pt-10 min-h-screen bg-gray-100">
            <h1 className="text-center text-5xl font-semibold mb-10 text-gray-800">
                34_Rathanont (Ardel) - JSD11
            </h1>

            <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-xl">
                <div className="flex justify-center mb-8">
                    <img
                        src="public\profilePic.jpg"
                        alt="Profile Picture of Owner"
                        className="w-64 h-64 object-cover border-4 border-gray-400 rounded-full" // เพิ่ม class จัดรูปแบบตามต้องการ
                    />
                </div>
                <h3 className="text-center text-xl font-semibold mb-4 text-gray-800 border-t pt-4">
                    Short Biography:
                </h3>
                <p className="text-center text-gray-700 leading-relaxed px-4">
                    Why So Serious ?
                </p>
            </div>
        </div>
    );
};
// src/components/CreateUserForm.jsx

export default function CreateUserForm({ newMember, handleChange, handleSave }) {
    return (
        <div className="mb-8 w-full max-w-4xl p-6 bg-white rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Create User Here</h3>
            {/* 💡 ใช้ Props ที่ส่งมาจาก AdminHomeView */}
            <form onSubmit={handleSave} className="flex gap-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={newMember.name}
                    onChange={handleChange}
                    className="p-2 border border-gray-300 rounded flex-grow"
                />
                <input
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                    value={newMember.lastname}
                    onChange={handleChange}
                    className="p-2 border border-gray-300 rounded flex-grow"
                />
                <input
                    type="text"
                    name="position"
                    placeholder="Position"
                    value={newMember.position}
                    onChange={handleChange}
                    className="p-2 border border-gray-300 rounded flex-grow"
                />
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-150"
                >
                    Save
                </button>
            </form>
        </div>
    );
}
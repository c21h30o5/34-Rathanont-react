import axios from "axios";
import { useState } from "react";

const Formxdd = ({ onUserCreated }) => {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    position: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
        // ใช้ axios.post() แทน fetch()
        const response = await axios.post(
            "https://memory-backend-forjsd11.onrender.com/api/users",
            formData // Axios จะจัดการ JSON.stringify และตั้งค่า Content-Type: application/json ให้โดยอัตโนมัติ
        );
        console.log(formData, response.data);
        setFormData({
            name: "",
            lastname: "",
            position: "",
        });
        if (onUserCreated) {
            onUserCreated();
        }
    } catch (error) {
        console.error("Error creating user:", error);
    } finally {
        setLoading(false);
    }
};

  return (
    <form onSubmit={handleSubmit} className="bg-amber-50 flex justify-evenly">
      <input className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" name="name" value={formData.name} onChange={handleChange} placeholder="name" disabled={loading} />
      <input className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" name="lastname" value={formData.lastname} onChange={handleChange} placeholder="description" disabled={loading} />
      <input className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" name="position" value={formData.position} onChange={handleChange} placeholder="imgurl" disabled={loading} />
      <button type="submit" className="font-bold bg-green-400 rounded-4xl w-24" disabled={loading}>
        {loading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default Formxdd;

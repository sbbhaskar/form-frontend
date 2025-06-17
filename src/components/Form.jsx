import React, { useState } from "react";
import axios from "axios";

import {
  PhoneIcon,
  UserIcon,
  Building2Icon,
  Globe2Icon,
  MessageSquareIcon,
} from "lucide-react";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    website: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/form`, formData);
);

      alert(res.data.message);

      // ✅ Reset form after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        companyName: "",
        website: "",
        phone: "",
        message: "",
      });
    } catch (err) {
      console.error("Submission Error:", err);
      alert("❌ Server error. Please try again later.");
    }
  };

  return (
    <form className="w-full flex flex-col space-y-4" onSubmit={handleSubmit}>
      <div className="flex items-center space-x-2">
        <UserIcon className="w-5 h-5" />
        <input
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none"
          type="text"
          placeholder="First Name"
          required
        />
      </div>

      <div className="flex items-center space-x-2">
        <UserIcon className="w-5 h-5" />
        <input
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none"
          type="text"
          placeholder="Last Name"
          required
        />
      </div>

      <div className="flex items-center space-x-2">
        <Building2Icon className="w-5 h-5" />
        <input
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none"
          type="text"
          placeholder="Company Name"
          required
        />
      </div>

      <div className="flex items-center space-x-2">
        <Globe2Icon className="w-5 h-5" />
        <input
          name="website"
          value={formData.website}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none"
          type="url"
          placeholder="Company Website URL"
        />
      </div>

      <div className="flex items-center space-x-2">
        <PhoneIcon className="w-5 h-5" />
        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none"
          type="tel"
          placeholder="Contact Number"
          required
        />
      </div>

      <div className="flex items-start space-x-2">
        <MessageSquareIcon className="w-5 h-5 mt-2" />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none"
          rows="4"
          placeholder="Message / Query"
        ></textarea>
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          className="w-48 bg-blue-700 hover:bg-blue-600 p-3 rounded font-semibold mt-2 cursor-pointer"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;

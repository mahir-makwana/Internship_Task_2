import { useContext, useState } from "react";
import { MyContext } from "./context";

const Personal = () => {
  const { setData } = useContext(MyContext);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const handleChange = () => {
    setData((prevData) => ({
      ...prevData,
      name,
      address,
    }));
  };

  return (
    <div className="form-section mb-6 p-6 bg-purple-800 rounded-lg shadow-md">
      <h2 className="text-2xl mb-4">Personal Information</h2>
      <label className="block text-lg mb-2 text-gray-200">
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={handleChange}
          className="w-full p-2 mt-2 rounded-md bg-purple-700 text-white"
          required
        />
      </label>
      <label className="block text-lg mb-2 text-gray-200">
        Address:
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          onBlur={handleChange}
          className="w-full p-2 mt-2 rounded-md bg-purple-700 text-white"
          required
        />
      </label>
    </div>
  );
};

export default Personal;

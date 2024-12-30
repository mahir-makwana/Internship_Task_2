import { useContext, useState } from "react";
import { MyContext } from "./context";

const Contact = () => {
  const { setData } = useContext(MyContext);

  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [github, setGithub] = useState("");
  const [linkedin, setLinkedin] = useState("");

  const handleChange = (updatedContact) => {
    setData((prevData) => ({
      ...prevData,
      contact: { ...prevData.contact, ...updatedContact },
    }));
  };

  return (
    <div className="form-section mb-6 p-6 bg-purple-800 rounded-lg shadow-md">
      <h2 className="text-2xl mb-4">Contact Information</h2>
      <label className="block text-lg mb-2 text-gray-200">
        Phone:
        <input
          type="text"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
            handleChange({ phone: e.target.value });
          }}
          className="w-full p-2 mt-2 rounded-md bg-purple-700 text-white"
          required
        />
      </label>
      <label className="block text-lg mb-2 text-gray-200">
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            handleChange({ email: e.target.value });
          }}
          className="w-full p-2 mt-2 rounded-md bg-purple-700 text-white"
          required
        />
      </label>
      <label className="block text-lg mb-2 text-gray-200">
        GitHub:
        <input
          type="text"
          value={github}
          onChange={(e) => {
            setGithub(e.target.value);
            handleChange({ github: e.target.value });
          }}
          className="w-full p-2 mt-2 rounded-md bg-purple-700 text-white"
          required
        />
      </label>
      <label className="block text-lg mb-2 text-gray-200">
        LinkedIn:
        <input
          type="text"
          value={linkedin}
          onChange={(e) => {
            setLinkedin(e.target.value);
            handleChange({ linkedin: e.target.value });
          }}
          className="w-full p-2 mt-2 rounded-md bg-purple-700 text-white"
          required
        />
      </label>
    </div>
  );
};

export default Contact;

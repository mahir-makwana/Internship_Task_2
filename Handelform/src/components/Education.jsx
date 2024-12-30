import { useContext, useState } from "react";
import { MyContext } from "./context";

const Education = () => {
  const { setData } = useContext(MyContext);

  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [year, setYear] = useState("");

  const handleChange = (updatedEducation) => {
    setData((prevData) => ({
      ...prevData,
      education: { ...prevData.education, ...updatedEducation },
    }));
  };

  return (
    <div className="form-section mb-6 p-6 bg-purple-800 rounded-lg shadow-md">
      <h2 className="text-2xl mb-4">Education</h2>
      <label className="block text-lg mb-2 text-gray-200">
        School:
        <input
          type="text"
          value={school}
          onChange={(e) => {
            setSchool(e.target.value);
            handleChange({ school: e.target.value });
          }}
          className="w-full p-2 mt-2 rounded-md bg-purple-700 text-white"
          required
        />
      </label>
      <label className="block text-lg mb-2 text-gray-200">
        Degree:
        <input
          type="text"
          value={degree}
          onChange={(e) => {
            setDegree(e.target.value);
            handleChange({ degree: e.target.value });
          }}
          className="w-full p-2 mt-2 rounded-md bg-purple-700 text-white"
          required
        />
      </label>
      <label className="block text-lg mb-2 text-gray-200">
        Year of Passing:
        <input
          type="number"
          value={year}
          onChange={(e) => {
            setYear(e.target.value);
            handleChange({ year: e.target.value });
          }}
          className="w-full p-2 mt-2 rounded-md bg-purple-700 text-white"
          required
        />
      </label>
    </div>
  );
};

export default Education;

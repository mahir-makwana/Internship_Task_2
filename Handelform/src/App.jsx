import { useState, useContext } from "react";
import { MyContext } from "./components/context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Personal from "./components/Personal";
import Education from "./components/Education";
import Contact from "./components/Contact";

const App = () => {
  const { data } = useContext(MyContext);
  const [isSubmitting, setIsSubmitting] = useState(false);

  console.log("App Data", data);

  const handleSubmitAll = async () => {
    if (
      !data.name ||
      !data.address ||
      !data.education.school ||
      !data.education.degree ||
      !data.education.year ||
      !data.contact.phone ||
      !data.contact.email ||
      !data.contact.github ||
      !data.contact.linkedin
    ) {
      toast.error("Please fill in all required fields", {
        position: "top-center",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("http://localhost:8080/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        toast.error(result.message);
        throw new Error(result.message);
      }
      toast.success(result.message, { position: "top-center" });
    } catch (error) {
      console.error("Fetch error:", error);
      toast.error("Backend error: " + error.message, {
        position: "top-center",
      });
    }
  };

  return (
    <div className="bg-purple-900 text-white min-h-screen py-8 px-6">
      <h1 className="text-3xl font-semibold mb-6 text-center">
        User Information Form
      </h1>
      <Personal />
      <Education />
      <Contact />
      <div className="mt-6">
        <button
          onClick={handleSubmitAll}
          disabled={isSubmitting}
          className={`w-full py-2 rounded-lg shadow-md ${
            isSubmitting ? "bg-purple-700" : "bg-purple-500"
          } text-white transition`}
        >
          {isSubmitting ? "Submitting..." : "Submit All"}
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default App;

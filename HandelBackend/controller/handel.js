const FormModel = require("../models/FormModel");

const handel = async (req, res) => {
  try {
    console.log(req.body);

    const form = req.body;
    console.log("Form data received:", form);

    const data = await FormModel.create(form);

    console.log("Data saved:", data);

    res.status(200).json({ message: "Form submitted successfully", data });
  } catch (error) {
    console.error("Failed to fetch:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = handel;

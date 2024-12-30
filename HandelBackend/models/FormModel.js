const mongoose = require("mongoose");

const HandelFormSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    education: {
      school: {
        type: String,
        required: true,
      },
      degree: {
        type: String,
        required: true,
      },
      year: {
        type: Number,
        required: true,
      },
    },
    contact: {
      phone: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      github: {
        type: String,
        required: true,
      },
      linkedin: {
        type: String,
        required: true,
      },
    },
  },
  { timestamps: true }
);

const FormModel = mongoose.model("internship", HandelFormSchema);

module.exports = FormModel;

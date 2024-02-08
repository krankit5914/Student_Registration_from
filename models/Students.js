const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  names: { type: String, required: true },
  rollNo: { type: Number, unique: true, require: true },
  mobileNo: { type: Number, unique: true, require: true },
  email: { type: String, unique: true, lowercase: true, require: true },
  dob: { type: String, required: true },
  gender: { type: String, required: true },
  category: { type: String, required: true },
  pwd: { type: String, required: true },
  tenth: { type: String, required: true },
  twelth: { type: String, required: true },
  modeOfGraduation: { type: String, require: true },
  underGraduation: { type: String, required: true },
  noOfBacklogs: { type: String, require: true },
  annualFamilyIncome: { type: Number, required: true },
  sourceOfIncome: { type: String, required: true },
  deviceUsedForOnlineLearning: { type: String, required: true },
  candidatesInterstForOccupation: { type: String, required: true },
  CandidateWillingnessToRelocateForJob: { type: String, require: true },
  address: { type: {}, required: true },
});

module.exports = mongoose.model("student-data", studentSchema);

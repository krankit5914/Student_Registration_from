const studentModel = require("../models/Students");

studentRegisterController = async (req, res) => {
  try {
    const {
      names,
      rollNo,
      mobileNo,
      email,
      dob,
      gender,
      category,
      pwd,
      tenth,
      twelth,
      modeOfGraduation,
      underGraduation,
      noOfBacklogs,
      annualFamilyIncome,
      sourceOfIncome,
      deviceUsedForOnlineLearning,
      candidatesInterstForOccupation,
      CandidateWillingnessToRelocateForJob,
      address,
    } = req.body;
    if (!names) {
      return res.send({ message: "Name is Required" });
    }
    if (!rollNo) {
      return res.send({ message: "RollNo is Required" });
    }
    if (!mobileNo) {
      return res.send({ message: "MoblieNo is Required" });
    }
    if (!email) {
      return res.send({ message: "Email is Required" });
    }
    if (!dob) {
      return res.send({ message: "Date of birth is Required" });
    }
    if (!gender) {
      return res.send({ message: "Gender is Required" });
    }
    if (!category) {
      return res.send({ message: "Category is Required" });
    }
    if (!pwd) {
      return res.send({ message: "PWD is Required" });
    }
    if (!tenth) {
      return res.send({ message: "10th is Required" });
    }
    if (!twelth) {
      return res.send({ message: "12th is Required" });
    }
    if (!modeOfGraduation) {
      return res.send({ message: "Mode of Graduation is Required" });
    }
    if (!underGraduation) {
      return res.send({ message: "UnderGraduation is Required" });
    }
    if (!noOfBacklogs) {
      return res.send({ message: "No of Backlogs is Required" });
    }
    if (!annualFamilyIncome) {
      return res.send({ message: "Annual family income is Required" });
    }
    if (!sourceOfIncome) {
      return res.send({ message: "source of income is Required" });
    }
    if (!deviceUsedForOnlineLearning) {
      return res.send({
        message: "Device is used for online learning is Required",
      });
    }
    if (!candidatesInterstForOccupation) {
      return res.send({
        message: "candidates interst for occupation is Required",
      });
    }
    if (!CandidateWillingnessToRelocateForJob) {
      return res.send({
        message: "candidate willingness to relocate for job is Required",
      });
    }
    if (!address) {
      return res.send({ message: "Address is Required" });
    }
    const student = await new studentModel({
      names,
      rollNo,
      mobileNo,
      email,
      dob,
      gender,
      category,
      pwd,
      tenth,
      twelth,
      modeOfGraduation,
      underGraduation,
      noOfBacklogs,
      annualFamilyIncome,
      sourceOfIncome,
      deviceUsedForOnlineLearning,
      candidatesInterstForOccupation,
      CandidateWillingnessToRelocateForJob,
      address,
    }).save();
    res.status(201).send({
      success: true,
      message: "Student Registration successfully",
      student,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in registration",
      error,
    });
  }
};

getStudentController = async (req, res) => {
  try {
    const students = await studentModel.find();
    res.status(200).send(students);
  } catch (error) {
    console.log("Error In Fetching Data");
    res.status(500).send({ message: "Error in fatching data" });
  }
};

getStudentControllerbyId = async (req, res) => {
  try {
    const students = await studentModel.findOne();
    res.status(200).send(students);
  } catch (error) {
    console.log("Error In Fetching Data");
    res.status(500).send({ message: "Error in fatching data" });
  }
};

module.exports = {
  studentRegisterController,
  getStudentController,
  getStudentControllerbyId,
};

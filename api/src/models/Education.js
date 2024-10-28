const mongoose = require('mongoose');

const EducationSchema = new mongoose.Schema({
  school: { type: String, required: true },
  degree: { type: String, required: true },
  fieldOfStudy: { type: String, required: true },
  startYear: { type: String, required: true },
  endYear: { type: String },
  grade: { type: String },
});

module.exports = EducationSchema;

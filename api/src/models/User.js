const mongoose = require('mongoose');

const EducationSchema = require('./Education');
const ExperienceSchema = require('./Experience');
const SkillsSchema = require('./Skills');

const UserSchema = new mongoose.Schema({
  personalId: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  gender: { type: String, required: true },
  email: { type: String, unique: true },
  address: { type: String },
  phone: { type: String },
  education: [EducationSchema],
  experience: [ExperienceSchema],
  skills: [SkillsSchema],
});

module.exports = mongoose.model('User', UserSchema);

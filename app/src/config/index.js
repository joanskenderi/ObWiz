import {
  contactInfo,
  education,
  experience,
  personalInfo,
  skills,
} from '../data';

const personalInputFields = [
  { label: 'First Name', placeholder: 'Enter your first name' },
  { label: 'Last Name', placeholder: 'Enter your last name' },
  { label: 'Personal ID', placeholder: 'Enter your personal ID' },
];

const genderOptions = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
];

const contactInputFields = [
  { label: 'Email', placeholder: 'Enter your email', type: 'email' },
  { label: 'Phone', placeholder: 'Enter your phone number', type: 'tel' },
];

const educationInputFields = [
  { label: 'School', placeholder: 'Enter your school' },
  { label: 'Degree', placeholder: 'Enter your degree' },
  { label: 'Field of Study', placeholder: 'Enter your field of study' },
  { label: 'Start Year', placeholder: 'Enter start year' },
  {
    label: 'End Year (optional)',
    placeholder: 'Enter end year',
  },
  {
    label: 'Grade (optional)',
    placeholder: 'Enter your grade',
  },
];

const experienceInputFields = [
  { label: 'Company', placeholder: 'Enter your company name' },
  { label: 'Position', placeholder: 'Enter your position' },
  { label: 'Start Date', placeholder: 'Enter start date' },
  {
    label: 'End Date (optional)',
    placeholder: 'Enter end date',
  },
  {
    label: 'Description (optional)',
    placeholder: 'Enter a brief description of your experience',
  },
];

const skillSeniorityOptions = [
  { value: 'junior', label: 'Junior' },
  { value: 'intermediate', label: 'Intermediate' },
  { value: 'senior', label: 'Senior' },
];

const resumeSections = [
  { title: 'Personal Information', content: personalInfo },
  { title: 'Contact Information', content: contactInfo },
  { title: 'Education', content: education },
  { title: 'Experience', content: experience },
  { title: 'Skills', content: skills },
];

export {
  personalInputFields,
  genderOptions,
  contactInputFields,
  educationInputFields,
  experienceInputFields,
  skillSeniorityOptions,
  resumeSections,
};

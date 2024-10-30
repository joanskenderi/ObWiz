const personalInputFields = [
  {
    name: 'firstName',
    label: 'First Name',
    placeholder: 'Enter your first name',
  },
  {
    name: 'lastName',
    label: 'Last Name',
    placeholder: 'Enter your last name',
  },
  {
    name: 'personalId',
    label: 'Personal ID',
    placeholder: 'Enter your personal ID',
  },
];

const genderOptions = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
];

const contactInputFields = [
  {
    name: 'email',
    label: 'Email',
    placeholder: 'Enter your email',
    type: 'email',
  },
  {
    name: 'phone',
    label: 'Phone',
    placeholder: 'Enter your phone number',
    type: 'tel',
  },
];

const educationInputFields = [
  {
    name: 'school',
    label: 'School',
    placeholder: 'Enter your school',
  },
  {
    name: 'degree',
    label: 'Degree',
    placeholder: 'Enter your degree',
  },
  {
    name: 'fieldOfStudy',
    label: 'Field of Study',
    placeholder: 'Enter your field of study',
  },
  {
    name: 'startYear',
    label: 'Start Year',
    placeholder: 'Enter start year',
  },
  {
    name: 'endYear',
    label: 'End Year (optional)',
    placeholder: 'Enter end year',
  },
  {
    name: 'grade',
    label: 'Grade (optional)',
    placeholder: 'Enter your grade',
  },
];

const experienceInputFields = [
  {
    name: 'company',
    label: 'Company',
    placeholder: 'Enter your company name',
  },
  {
    name: 'position',
    label: 'Position',
    placeholder: 'Enter your position',
  },
  {
    name: 'startDate',
    label: 'Start Date',
    placeholder: 'Enter start date',
  },
  {
    name: 'endDate',
    label: 'End Date (optional)',
    placeholder: 'Enter end date',
  },
];

const skillSeniorityOptions = [
  { label: 'Junior', value: 'junior' },
  { label: 'Intermediate', value: 'intermediate' },
  { label: 'Senior', value: 'senior' },
];

export {
  personalInputFields,
  genderOptions,
  contactInputFields,
  educationInputFields,
  experienceInputFields,
  skillSeniorityOptions,
};

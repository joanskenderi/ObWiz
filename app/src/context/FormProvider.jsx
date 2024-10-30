import { createContext, useState } from 'react';

export const FormContext = createContext();

const FormProvider = ({ children }) => {
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    personalId: '',
    gender: '',
    email: '',
    phone: '',
    address: '',
    school: '',
    degree: '',
    fieldOfStudy: '',
    startYear: '',
    endYear: '',
    grade: '',
    company: '',
    position: '',
    startDate: '',
    endDate: '',
    description: '',
    skill: '',
    seniority: '',
  });

  const updateFormValues = (newValues) => {
    setFormValues((prevValues) => ({ ...prevValues, ...newValues }));
  };

  return (
    <FormContext.Provider value={{ formValues, updateFormValues }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;

import { useNavigate } from 'react-router-dom';

import {
  Button,
  Dropdown,
  FormContainer,
  Input,
  StepWrapper,
  Title,
} from '../components';
import { useForm } from '../hooks';
import { genderOptions, personalInputFields } from '../config';

const Personal = () => {
  const navigate = useNavigate();
  const { formValues, updateFormValues } = useForm();

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormValues({ [name]: value });
  };

  return (
    <StepWrapper>
      <Title>Personal Information</Title>
      <FormContainer>
        {personalInputFields.map(({ label, name, placeholder }) => (
          <Input
            key={name}
            name={name}
            label={label}
            placeholder={placeholder}
            value={formValues[name]}
            onChange={handleChange}
          />
        ))}
        <Dropdown
          name="gender"
          label="Gender"
          options={genderOptions}
          value={formValues.gender}
          onChange={(value) => updateFormValues({ gender: value })}
        />
        <Button onClick={() => navigate('/contact')}>Next</Button>
      </FormContainer>
    </StepWrapper>
  );
};

export default Personal;

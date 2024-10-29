import { useNavigate } from 'react-router-dom';

import {
  Button,
  Dropdown,
  FormContainer,
  Input,
  StepWrapper,
  Title,
} from '../components';
import { genderOptions, personalInputFields } from '../config';

const Personal = () => {
  const navigate = useNavigate();

  return (
    <StepWrapper>
      <Title>Personal Information</Title>
      <FormContainer>
        {personalInputFields.map(({ label, placeholder }) => (
          <Input key={label} label={label} placeholder={placeholder} />
        ))}
        <Dropdown label="Gender" options={genderOptions} />
        <Button onClick={() => navigate('/contact')}>Next</Button>
      </FormContainer>
    </StepWrapper>
  );
};

export default Personal;

import { useNavigate } from 'react-router-dom';

import {
  Button,
  FormContainer,
  Input,
  StepWrapper,
  Title,
} from '../components';
import { experienceInputFields } from '../config';

const Experience = () => {
  const navigate = useNavigate();

  return (
    <StepWrapper>
      <Title>Experience</Title>
      <FormContainer>
        {experienceInputFields.map(({ label, placeholder }) => (
          <Input key={label} label={label} placeholder={placeholder} />
        ))}
        <div className="flex justify-between mt-4">
          <Button variant="previous" onClick={() => navigate('/education')}>
            Previous
          </Button>
          <Button variant="next" onClick={() => navigate('/skills')}>
            Next
          </Button>
        </div>
      </FormContainer>
    </StepWrapper>
  );
};

export default Experience;

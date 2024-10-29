import { useNavigate } from 'react-router-dom';

import {
  Button,
  FormContainer,
  Input,
  StepWrapper,
  Title,
} from '../components';
import { educationInputFields } from '../config';

const Education = () => {
  const navigate = useNavigate();

  return (
    <StepWrapper>
      <Title>Education</Title>
      <FormContainer>
        {educationInputFields.map(({ label, placeholder }) => (
          <Input key={label} label={label} placeholder={placeholder} />
        ))}
        <div className="flex justify-between mt-4">
          <Button variant="previous" onClick={() => navigate('/contact')}>
            Previous
          </Button>
          <Button variant="next" onClick={() => navigate('/experience')}>
            Next
          </Button>
        </div>
      </FormContainer>
    </StepWrapper>
  );
};

export default Education;

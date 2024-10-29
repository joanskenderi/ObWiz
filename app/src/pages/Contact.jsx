import { useNavigate } from 'react-router-dom';

import {
  Button,
  FormContainer,
  Input,
  StepWrapper,
  Textarea,
  Title,
} from '../components';
import { contactInputFields } from '../config';

const Contact = () => {
  const navigate = useNavigate();

  return (
    <StepWrapper>
      <Title>Contact Information</Title>
      <FormContainer>
        {contactInputFields.map(({ label, placeholder, type }) => (
          <Input
            key={label}
            label={label}
            placeholder={placeholder}
            type={type}
          />
        ))}
        <Textarea label="Address" placeholder="Enter your address" />
        <div className="flex justify-between mt-4">
          <Button variant="previous" onClick={() => navigate('/personal')}>
            Previous
          </Button>
          <Button variant="next" onClick={() => navigate('/education')}>
            Next
          </Button>
        </div>
      </FormContainer>
    </StepWrapper>
  );
};

export default Contact;

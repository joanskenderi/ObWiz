import { useNavigate } from 'react-router-dom';

import {
  Button,
  FormContainer,
  Input,
  StepWrapper,
  Textarea,
  Title,
} from '../components';
import { useForm } from '../hooks';
import { contactInputFields } from '../config';

const Contact = () => {
  const navigate = useNavigate();
  const { formValues, updateFormValues } = useForm();

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormValues({ [name]: value });
  };

  return (
    <StepWrapper>
      <Title>Contact Information</Title>
      <FormContainer>
        {contactInputFields.map(({ label, name, placeholder }) => (
          <Input
            key={name}
            name={name}
            label={label}
            placeholder={placeholder}
            value={formValues[name]}
            onChange={handleChange}
          />
        ))}
        <Textarea
          name="address"
          label="Address"
          placeholder="Enter your address"
          onChange={handleChange}
        />
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

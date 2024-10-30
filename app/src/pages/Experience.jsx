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
import { experienceInputFields } from '../config';

const Experience = () => {
  const navigate = useNavigate();
  const { formValues, updateFormValues } = useForm();

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormValues({ [name]: value });
  };

  return (
    <StepWrapper>
      <Title>Experience</Title>
      <FormContainer>
        {experienceInputFields.map(({ label, name, placeholder }) => (
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
          name="description"
          label="Description (optional)"
          placeholder="Enter a brief description of your experience"
          onChange={handleChange}
        />
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

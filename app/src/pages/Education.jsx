import { useNavigate } from 'react-router-dom';

import {
  Button,
  FormContainer,
  Input,
  StepWrapper,
  Title,
} from '../components';
import { useForm } from '../hooks';
import { educationInputFields } from '../config';

const Education = () => {
  const navigate = useNavigate();
  const { formValues, updateFormValues } = useForm();

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormValues({ [name]: value });
  };

  return (
    <StepWrapper>
      <Title>Education</Title>
      <FormContainer>
        {educationInputFields.map(({ label, name, placeholder }) => (
          <Input
            key={name}
            name={name}
            label={label}
            placeholder={placeholder}
            value={formValues[name]}
            onChange={handleChange}
          />
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

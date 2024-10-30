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
import { skillSeniorityOptions } from '../config';

const Skills = () => {
  const navigate = useNavigate();
  const { formValues, updateFormValues } = useForm();

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormValues({ [name]: value });
  };

  return (
    <StepWrapper>
      <Title>Skills</Title>
      <FormContainer>
        <Input
          name="skill"
          label="Skill"
          placeholder="Add a skill"
          value={formValues.skill}
          onChange={handleChange}
        />
        <Dropdown
          name="seniority"
          label="Seniority"
          options={skillSeniorityOptions}
          value={formValues.seniority}
          onChange={(value) => updateFormValues({ seniority: value })}
        />
        <Button variant="secondary">Add New Skill</Button>
        <div className="flex justify-between mt-4">
          <Button variant="previous" onClick={() => navigate('/experience')}>
            Previous
          </Button>
          <Button variant="finish" onClick={() => navigate('/resume')}>
            Finish
          </Button>
        </div>
      </FormContainer>
    </StepWrapper>
  );
};

export default Skills;

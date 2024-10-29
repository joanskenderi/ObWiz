import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Button,
  Dropdown,
  FormContainer,
  Input,
  StepWrapper,
  Title,
} from '../components';
import { skillSeniorityOptions } from '../config';

const Skills = () => {
  const navigate = useNavigate();
  const [skills, setSkills] = useState([
    { skill: '', level: '', isAdded: false },
  ]);
  const [isAdding, setIsAdding] = useState(true);

  const handleSkillChange = (index, field, value) => {
    const updatedSkills = skills.map((skill, i) =>
      i === index ? { ...skill, [field]: value } : skill
    );

    setSkills(updatedSkills);
  };

  const handleSaveSkill = (index) => {
    const updatedSkills = skills.map((skill, i) =>
      i === index ? { ...skill, isAdded: true } : skill
    );

    setSkills(updatedSkills);
    setIsAdding(false);
  };

  const handleAddSkill = () => {
    setSkills([...skills, { skill: '', level: '', isAdded: false }]);
    setIsAdding(true);
  };

  return (
    <StepWrapper>
      <Title>Skills</Title>
      <FormContainer>
        {skills.map((skill, index) =>
          skill.isAdded ? (
            <div key={index} className="space-y-4">
              <p className="text-slate-700 font-semibold">{`Skill Name: ${skill.skill}`}</p>
              <p className="text-slate-500">{`Experience Level: ${skill.level}`}</p>
            </div>
          ) : (
            <div key={index} className="space-y-4">
              <Input
                label="Skill Name"
                placeholder="Enter your skill name"
                value={skill.skill}
                onChange={(e) =>
                  handleSkillChange(index, 'skill', e.target.value)
                }
              />
              <Dropdown
                label="Experience Level"
                options={skillSeniorityOptions}
                value={skill.level}
                onChange={(e) =>
                  handleSkillChange(index, 'level', e.target.value)
                }
              />
              <Button variant="primary" onClick={() => handleSaveSkill(index)}>
                Add Skill
              </Button>
            </div>
          )
        )}
        {!isAdding && (
          <Button variant="secondary" onClick={handleAddSkill}>
            Add New Skill
          </Button>
        )}
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

import { useNavigate } from 'react-router-dom';

import { Title, ResumeSection, Button } from '../components';
import { resumeSections } from '../config';

const Resume = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center p-4">
      <Title>Resume</Title>
      <div className="w-full max-w-2xl bg-white shadow-md rounded-lg p-6 space-y-6">
        {resumeSections.map(({ title, content }) => (
          <ResumeSection key={title} title={title} content={content} />
        ))}
      </div>
      <div className="w-2/6 md:w-1/6 flex items-center justify-center mt-4">
        <Button variant="primary" onClick={() => navigate('/')}>
          Go to Home
        </Button>
      </div>
    </div>
  );
};

export default Resume;

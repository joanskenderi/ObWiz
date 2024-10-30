import { useNavigate } from 'react-router-dom';

import { Title, Button } from '../components';
import { useForm } from '../hooks';
import { formatFieldName } from '../utils';

const Resume = () => {
  const { formValues } = useForm();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center p-4">
      <Title>Resume</Title>
      <div className="w-full max-w-2xl bg-white shadow-md rounded-lg p-8 space-y-6">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800">
            Personal Information
          </h2>
          {Object.entries(formValues).map(([key, value]) => (
            <div
              key={key}
              className="flex justify-between border-b border-slate-300 py-2"
            >
              <span className="font-semibold text-slate-700">
                {formatFieldName(key)}:
              </span>
              <span className="text-slate-600">{value || '-'}</span>
            </div>
          ))}
        </div>
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

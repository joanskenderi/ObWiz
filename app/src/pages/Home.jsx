import { useNavigate } from 'react-router-dom';

import { Button } from '../components';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center p-4 space-y-8">
      <h1 className="text-4xl md:text-6xl font-extrabold text-slate-800 text-center mb-6 relative">
        Welcome to ObWiz
        <span className="absolute inset-x-0 -bottom-1 h-1 bg-gradient-to-r from-violet-500 via-violet-600 to-violet-800 rounded"></span>
      </h1>
      <p className="text-slate-500 text-center text-lg md:text-xl max-w-md">
        We turn good careers into great CVs
      </p>
      <div className="w-2/6 md:w-1/6 flex items-center justify-center">
        <Button variant="primary" onClick={() => navigate('/personal')}>
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default Home;

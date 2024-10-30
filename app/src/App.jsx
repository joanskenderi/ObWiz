import { BrowserRouter } from 'react-router-dom';

import { AppRouter } from './router';
import { FormProvider } from './context';

const App = () => {
  return (
    <FormProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </FormProvider>
  );
};

export default App;

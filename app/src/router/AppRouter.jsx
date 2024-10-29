import { Route, Routes } from 'react-router-dom';

import {
  Contact,
  Education,
  Experience,
  Home,
  Personal,
  Resume,
  Skills,
} from '../pages';

const routerConfig = [
  { path: '/', element: <Home /> },
  { path: '/personal', element: <Personal /> },
  { path: '/contact', element: <Contact /> },
  { path: '/education', element: <Education /> },
  { path: '/experience', element: <Experience /> },
  { path: '/skills', element: <Skills /> },
  { path: '/resume', element: <Resume /> },
  { path: '*', element: <Home /> },
];

const AppRouter = () => {
  return (
    <Routes>
      {routerConfig.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default AppRouter;

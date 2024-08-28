import './App.css'
import Dashboard from './components/Dashboard/Dashboard';
import LoginForm from './components/login/LoginForm';
import RegisterForm from './components/register/RegisterForm';
import Home from './pages/Home';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div><Home /></div>
  },
  {
    path: '/dashboard',
    element: <div><Dashboard /></div>
  },
  {
    path: '/login',
    element: <div><LoginForm /></div>
  },
  {
    path: '/register',
    element: <div><RegisterForm /></div>
  }
]
);

function App() {

  return (
      <div>
        <RouterProvider router={router} />
      </div>
  )
}

export default App

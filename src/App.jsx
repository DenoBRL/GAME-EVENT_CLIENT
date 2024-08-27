import './App.css'

import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/login/Login';
import Register from './components/register/Register';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/dashboard',
    element: <div><Dashboard /></div>
  },
  {
    path: '/',
    element: <div><Login /></div>
  },
  {
    path: '/register',
    element: <div><Register /></div>
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

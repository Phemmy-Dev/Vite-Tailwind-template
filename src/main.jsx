import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './index.css'
import Homepage from './pages/Homepage/Homepage.jsx';
import AboutPage from './pages/AboutPage/AboutPage.jsx';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/advertise',
    // element: <App />,
  },
  {
    path: '/about',
    // element: <App />,
  },
  {
    path: '/contact',
    // element: <App />,
  },
  {
    path: '/terms',
    // element: <Terms />,
  },
  {
    path: '/privacy',
    // element: <Privacypage />,
  },
  {
    path: '/contact',
    // element: <App />,
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

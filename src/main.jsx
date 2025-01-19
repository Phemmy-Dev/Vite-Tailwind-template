import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './index.css'
import Homepage from './pages/Homepage/Homepage.jsx';
import AboutPage from './pages/AboutPage/AboutPage.jsx';
import CommunityPage from './pages/CommunityPage/CommunityPage.jsx';
// import ProgramsPage from './pages/ProgramsPage/ProgramsPage.jsx';
import ContactPage from './pages/ContactPage/ContactPage.jsx';
import JoinPage from './pages/JoinPage/JoinPage.jsx';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  // {
  //   path: '/programs',
  //   element: <ProgramsPage />,
  // },
  {
    path: '/community',
    element: <CommunityPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
  {
    path: '/join',
    element: <JoinPage />,
  },
  {
    path: '/privacy',
    // element: <Privacypage />,
  },
  {
    path: '/contact',
    // element: <ContactPage />,
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

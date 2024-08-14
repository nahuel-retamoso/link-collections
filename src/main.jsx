import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import ErrorPage from './views/ErrorPage.jsx';
import SingleView from './views/SingleView/SingleView.jsx';
import MyCollections from './views/MyCollections/MyCollections.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <MyCollections />,
      },
      {
        path: "collection/:id",
        element: <SingleView />,
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
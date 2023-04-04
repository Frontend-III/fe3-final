import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./error-page";
import Home from "./Routes/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "home",
                element: <Home />,
            },
            {
                path: "dentist/:id",
                element: <Dentist />,
            },
            {
                path: "contact",
                element: <Contact />,
            },
            {
                path: "favs",
                element: <Favs />
            }
        ]
    },
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);



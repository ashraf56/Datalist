import { createBrowserRouter } from "react-router-dom";

import Home from "../Home/Home";

import App from "../App";
import DataDetail from "../Components/DataDetail/DataDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: '/',
        element: <App />
      },
      {
        path: '/:id',
        element: <DataDetail />,
        loader: async ({ params }) => {
          try {
            const response = await fetch(`https://api.tvmaze.com/shows/${params.id}`);
            if (!response.ok) {
              const error = new Error(`Failed to fetch user data. Status: ${response.status}`);
              error.response = response;
              throw error;
            }

            const data = await response.json();
            return data;
          } catch (error) {
            return { error };
          }
        }

      },
    ]
  },
]);

export default router
import { createBrowserRouter } from "react-router-dom";

import Home from "../Home/Home";

import App from "../App";
import UserDetail from "../Components/UserDetail/UserDetail";

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
        element: <UserDetail />,
        loader: async ({ params }) => {
          try {
            const response = await fetch(`https://602e7c2c4410730017c50b9d.mockapi.io/users/${params.id}`);
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
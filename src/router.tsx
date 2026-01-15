import { createBrowserRouter } from "react-router-dom";
import HomePage from "./routes/_index";
import RootLayout from "./routes/root-layout";
import AboutPage from "./routes/about"; // Import the new page

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
        { index: true, element: <HomePage /> },
        { path: "about", element: <AboutPage /> } // Add the route
    ],
  },
]);
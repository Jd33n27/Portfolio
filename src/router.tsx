import { createBrowserRouter } from "react-router-dom";
import HomePage from "./routes/_index";
import RootLayout from "./routes/root-layout";
import AboutPage from "./routes/about";
import ProjectsPage from "./routes/projects";
import ResumePage from "./routes/resume";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
        { index: true, element: <HomePage /> },
        { path: "about", element: <AboutPage /> },
        { path: "projects", element: <ProjectsPage /> },
        { path: "resume", element: <ResumePage /> }
    ],
  },
]);
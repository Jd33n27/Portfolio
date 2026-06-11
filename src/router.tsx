import { lazy, Suspense, type ComponentType } from "react";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./routes/root-layout";

const HomePage = lazy(() => import("./routes/_index"));
const AboutPage = lazy(() => import("./routes/about"));
// const ProjectsPage = lazy(() => import("./routes/projects"));
const ResumePage = lazy(() => import("./routes/resume"));

const pageLoader = (
  <div className="min-h-[50vh] flex items-center justify-center">
    <div className="h-8 w-8 rounded-full border-2 border-white/20 border-t-chelsea animate-spin" />
  </div>
);

function withSuspense(Component: ComponentType) {
  return (
    <Suspense fallback={pageLoader}>
      <Component />
    </Suspense>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: withSuspense(HomePage) },
      { path: "about", element: withSuspense(AboutPage) },
      // Projects route intentionally paused while the portfolio is repositioned.
      // { path: "projects", element: withSuspense(ProjectsPage) },
      { path: "resume", element: withSuspense(ResumePage) },
    ],
  },
]);

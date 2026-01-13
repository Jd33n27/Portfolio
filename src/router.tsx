import { createBrowserRouter } from "react-router-dom";
import HomePage from "./routes/_index";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },

  //   {
  //     path: "dashboard",
  //     element: <DashboardLayout />,
  //     children: [
  //       { index: true, element: <DashboardHome /> },
  //       { path: "settings", element: <DashboardSettings /> },
  //       { path: "transactions", element: <DashboardTransactions /> },
  //     ],
  //   },

  //   {
  //     path: "auth",
  //     element: <AuthLayout />,
  //     children: [
  //       { path: "login", element: <Login /> },
  //       { path: "profile", element: <Profile /> },
  //     ],
  //   },
]);

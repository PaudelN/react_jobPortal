import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Components/Login";
import { ChakraProvider } from "@chakra-ui/react";
import Signup from "./Components/Signup";
import TermsConditions from "./Components/Terms&Conditions";
import Error from "./Components/Error";
import Sidebar from "./Layout/Sidebar";
import Dashboard from "./pages/Dashboard";
import Filter from "./pages/Filter";
import Chat from "./pages/Chat";
import Help from "./pages/Help";
import Notification from "./pages/Notification";
import Setting from "./pages/Setting";
import UserProfile from "./pages/UserProfile";
import Analyzer from "./sub-pages/Analyzer";
import Templates from "./sub-pages/Templates";
import CVMaker from "./sub-pages/CVMaker";
import Recruitment from "./sub-pages/Recruitment";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/login",
      index: true,
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/termsandconditions",
      element: <TermsConditions />,
    },
    {
      path: "*",
      element: <Error />,
    },
    {
      path: "/error",
      element: <Error />,
    },
    {
      element: <Sidebar />,
      children: [
        {
          path: "/userdashboard",
          element: <Dashboard />,
        },
        {
          path: "/filter",
          element: <Filter />,
        },
        {
          path: "/notification",
          element: <Notification />,
        },
        {
          path: "/setting",
          element: <Setting />,
        },
        {
          path: "/help",
          element: <Help />,
        },
        {
          path: "/userprofile",
          element: <UserProfile />,
        },
        {
          path: "/chat",
          element: <Chat />,
        },
        {
          path: "/analyzer",
          element: <Analyzer />,
        },
        {
          path: "/cvmaker",
          element: <CVMaker />,
        },
        {
          path: "/templates",
          element: <Templates />,
        },
        {
          path: "/recruitment",
          element: <Recruitment />,
        },
      ],
    },
  ]);

  return (
    <>
      <ChakraProvider>
        <RouterProvider router={router} />
      </ChakraProvider>
    </>
  );
};

export default App;

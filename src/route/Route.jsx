import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import NotFound from "../Pages/NotFound/NotFound";
import Contact from "../Pages/Contact/Contact";
import BlogPage from "../Pages/Home/BlogPage/BlogPage";
import Services from "../Pages/Services/Services";
import SignUp from "../Pages/SignUp/SignUp";
import SignIn from "../Pages/SignIn/SignIn";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import DashboardLayout from "../layout/DashboardLayout/DashboardLayout";
import MyAppointment from "../Pages/Dashboard/MyAppointment/MyAppointment";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute/AdminRoute";
import OurExpert from "../Pages/Dashboard/OutExpert/OurExpert";
import ManageExperts from "../Pages/Dashboard/ManageExperts/ManageExperts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/service",
        element: <Services />,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/blogs",
        element: (
          <PrivateRoute>
            <BlogPage></BlogPage>
          </PrivateRoute>
        ),
      },
      {
        path: "/sign-up",
        element: <SignUp></SignUp>,
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <MyAppointment></MyAppointment>,
      },
      {
        path: "/dashboard/my-appointment",
        element: <MyAppointment></MyAppointment>,
      },
      {
        path: "/dashboard/all-users",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/add-expert",
        element: (
          <AdminRoute>
            <OurExpert></OurExpert>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/manage-experts",
        element: (
          <AdminRoute>
            <ManageExperts></ManageExperts>
          </AdminRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);

export default router;

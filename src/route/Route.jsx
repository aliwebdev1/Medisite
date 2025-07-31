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
    path: "*",
    element: <NotFound></NotFound>,
  },
]);

export default router;

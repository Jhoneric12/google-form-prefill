import { RouterProvider, createBrowserRouter } from "react-router";
import AdminRoutes from "./pageRoutes/AdminRoutes";
import LandingRoutes from "./pageRoutes/LandingRoutes";

const RootRoutes = () => {
  const router = createBrowserRouter([
    { path: "/admin/*", Component: AdminRoutes },
    { path: "/*", Component: LandingRoutes },
    // { path: "/dashboard/*", Component: AdminRoutes },
    // { path: "/exhibitor/*", Component: ExhibitorRoutes },
    // { path: "/*", Component: ClientRoute },
  ]);

  return <RouterProvider router={router} />;
};

export default RootRoutes;

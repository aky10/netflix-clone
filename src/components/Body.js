import Browse from "./Browse";
import Login from "./Login";
import {
  createHashRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import WatchTrailer from "./WatchTrailer";

const Body = () => {
  const appRouter = createHashRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/watch",
      element: <WatchTrailer />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
